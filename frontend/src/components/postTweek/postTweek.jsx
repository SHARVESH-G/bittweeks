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
          className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow p-8"
        >
          <div className="flex items-center justify-between text-2xl text-gray-500 mb-2">
            <div className="flex items-center gap-2">
              <Avatar sx={{ bgcolor: randomColor, width: 60, height: 60, fontSize: 30 }}>
                {post.author[0].toUpperCase()}
              </Avatar>
              <span className="font-semibold text-gray-700">@{post.author}</span>
            </div>
            <span>{formatDistanceToNow(new Date(post.postedAt), { addSuffix: true })}</span>
          </div>

          <p className="text-gray-800 mb-3 whitespace-pre-wrap text-4xl">{post.tweet}</p>

          <div className="flex items-center text-sm text-gray-500">
            <span className="text-red-500 mr-1">
              <IoIosHeartEmpty size={35}/>
            </span>
            <span>{post.likes}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostTweek;
