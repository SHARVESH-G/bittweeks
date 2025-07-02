import { posts } from "../../datas/temp/posts";
import { formatDistanceToNow } from "date-fns";
import { IoIosHeartEmpty } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { randomColor } from "../../datas/colors";

function PostTweek() {
  return (
    <div className="w-full mx-auto space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white px-4 py-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between text-base text-gray-500 mb-3">
            <div className="flex items-center gap-3">
              <Avatar
                sx={{
                  bgcolor: randomColor,
                  width: 48,
                  height: 48,
                  fontSize: 20,
                }}
              >
                {post.author[0].toUpperCase()}
              </Avatar>
              <span className="font-medium text-gray-600">@{post.author}</span>
            </div>
            <span className="text-sm text-gray-400">
              {formatDistanceToNow(new Date(post.postedAt), { addSuffix: true })}
            </span>
          </div>

          <p className="text-gray-700 mb-3 whitespace-pre-wrap text-lg leading-relaxed">
            {post.tweet}
          </p>

          <div className="flex items-center text-sm text-gray-500">
            <IoIosHeartEmpty size={22} className="text-red-500 mr-2" />
            <span>{post.likes}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostTweek;
