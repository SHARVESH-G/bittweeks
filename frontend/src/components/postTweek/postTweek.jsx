import { useRef } from "react";
import { formatDistanceToNow } from "date-fns";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { highlightHashtags } from "../../helper/highlightHashTags";
import { randomColor } from "../../datas/colors";
import { loggedInUser } from "../../hooks/loggedInUser";

function PostTweek({ posts, setPosts }) {
  const currentUser = loggedInUser();
  const currentUserId = currentUser._id;
  const currentAvatarColor = useRef({});

  const handleLike = async (postId) => {
    try {
      await fetch(`http://localhost:3000/api/likepost/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: currentUserId }),
      });

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? {
                ...post,
                postLikes: post.postLikes.includes(currentUserId)
                  ? post.postLikes.filter((id) => id !== currentUserId)
                  : [...post.postLikes, currentUserId],
              }
            : post
        )
      );
    } catch (err) {
      console.error("Failed to toggle like:", err);
    }
  };

  return (
    <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto space-y-2 px-2 sm:px-4">
      {posts.map((post) => {
        if (!post || !post.postAuthor) return null;

        const isFollowing = Array.isArray(post.postAuthor.allFollowers)
          ? post.postAuthor.allFollowers.includes(currentUserId)
          : false;

        return (
          <div
            key={post._id}
            className={`bg-white px-4 sm:px-5 py-4 rounded-xl border-2 shadow-sm hover:shadow-md transition-all ${
              isFollowing
                ? `border-[var(--colorPrimary)]`
                : `border-gray-200`
            }`}
          >
            <div className="flex items-start gap-3">
              <Avatar
                src={post.postAuthor.profilePic || ""}
                sx={{
                  bgcolor: post.postAuthor.profilePic
                    ? "transparent"
                    : (() => {
                        const id = post.postAuthor._id;
                        if (!currentAvatarColor.current[id]) {
                          currentAvatarColor.current[id] = randomColor();
                        }
                        return currentAvatarColor.current[id];
                      })(),
                  width: 50,
                  height: 50,
                  fontSize: 25,
                }}
              >
                {!post.postAuthor.profilePic &&
                  post.postAuthor.name?.[0]?.toUpperCase()}
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-medium text-sm sm:text-base text-gray-800">
                    {post.postAuthor.name}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 sm:mt-0">
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>

                <p className="mt-2 text-sm sm:text-base text-gray-700 whitespace-pre-wrap">
                  {highlightHashtags(post.postTitle)}
                </p>

                {post.postImage && (
                  <img
                    src={post.postImage}
                    alt="Post"
                    className="rounded-lg mt-3 w-full max-h-56 object-contain border border-gray-100 self-start"
                  />
                )}

                <div className="flex items-center text-sm text-gray-500 mt-3">
                  {post.postLikes.includes(currentUserId) ? (
                    <IoIosHeart
                      size={22}
                      className="text-red-500 cursor-pointer mr-2"
                      onClick={() => handleLike(post._id)}
                    />
                  ) : (
                    <IoIosHeartEmpty
                      size={22}
                      className="text-gray-500 cursor-pointer mr-2"
                      onClick={() => handleLike(post._id)}
                    />
                  )}
                  <span>{post.postLikes.length} likes</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostTweek;