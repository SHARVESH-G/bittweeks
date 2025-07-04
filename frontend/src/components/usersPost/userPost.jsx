import { formatDistanceToNow } from "date-fns";
import { IoIosHeartEmpty } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { randomColor } from "../../datas/colors";

const UserPost = ({post}) => {
  return (
    <div
      key={post._id}
      className="bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <Avatar
          src={post.postAuthor.profilePic || ""}
          sx={{
            bgcolor: post.postAuthor.profilePic ? "transparent" : randomColor,
            width: 40,
            height: 40,
            fontSize: 16,
          }}
        >
          {!post.postAuthor.profilePic &&
            post.postAuthor.name?.[0]?.toUpperCase()}
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center justify-between">
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
            {post.postTitle}
          </p>

          {post.postImage && (
            <img
              src={post.postImage}
              alt="Post"
              className="rounded-lg mt-3 w-full max-h-56 object-contains border border-gray-100"
            />
          )}

          <div className="flex items-center text-sm text-gray-500 mt-2">
            <IoIosHeartEmpty size={20} className="text-red-500 mr-2" />
            <span>0 likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
