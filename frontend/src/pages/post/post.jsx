import React, { useState } from "react";
import axios from "axios";
import ImageToBase64 from "../../helper/ImageToBase";
import { tweetMaxLength } from "../../datas/projectParameters";
import { loggedInUser } from "../../hooks/loggedInUser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { backEndURL } from "../../datas/backendServerLink";

const Post = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const navi = useNavigate();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      toast.warn("The Image Size Should Be Less Than 1MB", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    try {
      const base64 = await ImageToBase64(file);
      setImage(base64);
      setPreview(base64);
    } catch (err) {
      console.error("Error converting image:", err);
    }
  };

  const handlePost = async () => {
    if (!content) {
      toast.info('Enter Title', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${backEndURL}/api/addnewpost`, {
        postTitle: content,
        postImage: image,
        postAuthor: loggedInUser()._id,
      });

      if (res.status === 201) {
        toast.success('🦄 Wow so easy!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        setContent("");
        setImage(null);
        setPreview(null);
        navi('/');
      }
    } catch (err) {
      console.error("Post failed:", err);
      toast.info('Something went wrong while posting ', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <ToastContainer />
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-[var(--colorPrimary)]">
          Create Tweet
        </h2>

        <textarea
          rows="5"
          placeholder="What's happening?"
          className="w-full resize-none border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={tweetMaxLength}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 border-1 border-gray-400 p-2 w-full rounded cursor-pointer"
        />

        {preview && (
          <div className="mb-4">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <button
          onClick={handlePost}
          disabled={loading}
          className={`w-full py-2 px-4 rounded-lg transition text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[var(--colorPrimary)] hover:bg-[var(--colorPrimaryHover)]"
          }`}
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </div>
  );
};

export default Post;
