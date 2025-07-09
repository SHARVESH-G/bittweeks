import React, { useState, useEffect } from "react";
import PostTweek from "../../components/postTweek/postTweek";
import { tweetMaxLength } from "../../datas/projectParameters";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import { loggedInUser } from "../../hooks/loggedInUser";
import { backEndURL } from "../../datas/backendServerLink";


const Home = () => {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${backEndURL}/api/getallpost`);
      if (res.status === 200) {
        setPosts(res.data.posts);
      }
    } catch (error) {
      console.error("Failed to fetch posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async () => {
    if (!content.trim()) {
      toast.info("Enter Title", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    try {
      const res = await axios.post(`${backEndURL}/api/addnewpost`, {
        postTitle: content,
        postAuthor: loggedInUser()._id,
      });

      if (res.status === 201) {
        toast.success("Success!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
        setContent("");
        const newPost = res.data.newPost;
        fetchPosts();
      }
    } catch (err) {
      console.error("Post failed:", err);
      toast.info("Something went wrong while posting", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex justify-center">
      <ToastContainer />
      <div className="w-full max-w-4xl flex items-center flex-col">
        <div className="flex w-[90%] justify-between items-center border-2 border-b-black border-x-0 border-t-0 gap-2 mb-6 p-6">
          <textarea
            rows="1"
            placeholder="Post"
            className="w-[85%] resize-none border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
            maxLength={tweetMaxLength}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className="cursor-pointer border-1 text-white bg-[var(--colorPrimary)] px-5 py-1.5 rounded"
            onClick={handlePost}
          >
            Post
          </button>
        </div>

        <PostTweek posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
};

export default Home;