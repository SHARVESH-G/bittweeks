import { formatDistanceToNow } from "date-fns";
import { IoIosHeartEmpty } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import useFetchData from "../../hooks/userFetchData";
import { randomColor } from "../../datas/colors";
import { MoonLoader } from "react-spinners";
import { highlightHashtags } from "../../helper/highlightHashTags";

function PostTweek() {
  const { data, loading, error } = useFetchData("/api/getallpost");
  const posts = data?.posts || [];

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <MoonLoader size={55} color="var(--colorPrimary)" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto space-y-6 px-2 sm:px-4">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white px-4 sm:px-5 py-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
        >
          <div className="flex items-start gap-3">
            <Avatar
              src={post.postAuthor.profilePic || ""}
              sx={{
                bgcolor: post.postAuthor.profilePic
                  ? "transparent"
                  : randomColor,
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
                  className="rounded-lg mt-3 w-full max-h-56 object-cover border border-gray-100"
                />
              )}

              <div className="flex items-center text-sm text-gray-500 mt-3">
                <IoIosHeartEmpty size={20} className="text-red-500 mr-2" />
                <span>0 likes</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostTweek;
