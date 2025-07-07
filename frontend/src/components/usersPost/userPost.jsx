import { formatDistanceToNow } from "date-fns";
import Avatar from "@mui/material/Avatar";
import { randomColor } from "../../datas/colors";
import { highlightHashtags } from "../../helper/highlightHashTags";

const UserPost = ({ post, onDelete }) => {
  return (
    <div
      className="bg-white my-4 px-5 py-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <Avatar
          src={post.postAuthor?.profilePic || ""}
          sx={{
            bgcolor: post.postAuthor?.profilePic ? "transparent" : randomColor,
            width: 40,
            height: 40,
            fontSize: 16,
          }}
        >
          {!post.postAuthor?.profilePic &&
            post.postAuthor?.name?.[0]?.toUpperCase()}
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-8">
            <span className="font-medium text-sm text-gray-800">
              {post.postAuthor.name}
            </span>
            <span className="text-xs text-gray-500">
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-700 whitespace-pre-wrap">
            {highlightHashtags(post.postTitle)}
          </p>

          {post.postImage && (
            <img
              src={post.postImage}
              alt="Post"
              className="rounded-lg mt-3 w-full max-h-56 object-contain border border-gray-100"
            />
          )}

          <div className="flex items-center text-sm text-gray-500 mt-2 justify-between">
            <span>{post.postLikes.length} Likes</span>

            {onDelete && (
              <button
                onClick={() => onDelete(post._id)}
                className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded hover:bg-red-200"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
