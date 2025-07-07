import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import useFetchData from "../../hooks/userFetchData";
import { loggedInUser } from "../../hooks/loggedInUser";
import UserPost from "../../components/usersPost/userPost";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { MoonLoader } from "react-spinners";
import axios from "axios";
import ConfirmModal from "../../components/modals/confirmModal";
import { backEndURL } from "../../datas/backendServerLink";



const MyPost = () => {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [refetchKey, setRefetchKey] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const { _id: userId } = loggedInUser();
  const { data, loading, error } = useFetchData(`/api/myposts?userId=${userId}&_=${refetchKey}`);
  const myPosts = data?.userPosts || [];

  const confirmDelete = (id) => {
    setPostToDelete(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${backEndURL}/api/deletepost/${postToDelete}`);
      setRefetchKey((prev) => prev + 1);
    } catch (err) {
      console.error("Failed to delete post:", err);
      alert("Failed to delete post.");
    } finally {
      setShowModal(false);
      setPostToDelete(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <MoonLoader size={35} color="var(--colorPrimary)" />
      </div>
    );
  }

  if (error) return <Typography>Error fetching posts</Typography>;

  const filteredPost = myPosts.filter((post) =>
    post.postTitle?.toLowerCase().includes(search.toLowerCase())
  );

  const sortedPost = filter ? [...filteredPost].reverse() : filteredPost;
  const FilterIcon = filter ? <FaArrowCircleDown /> : <FaArrowCircleUp />;

  return (
    <div className="flex flex-col justify-center items-center">
      <Typography variant="h5" gutterBottom>
        My Posts
      </Typography>
      <Link
        to="/posts"
        className="border-[var(--colorPrimary)] border-2 rounded-[5px] mt-7"
      >
        <Button sx={{ color: "var(--colorPrimary)" }}>
          Create Your Own Post
        </Button>
      </Link>

      {myPosts.length > 0 ? (
        <Box>
          <div className="flex mt-10 justify-between items-center">
            <Typography>Your Posts ({myPosts.length})</Typography>
            <button
              className="border-[var(--colorPrimary)] border-2 rounded-[5px] px-4 py-1 text-[var(--colorPrimary)] flex items-center gap-2"
              onClick={() => setFilter(!filter)}
            >
              {FilterIcon}
              Sort
            </button>
          </div>

          <div className="max-w-lg mx-auto mb-2 mt-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </div>

          {sortedPost.map((post) => (
            <UserPost key={post._id} post={post} onDelete={confirmDelete} />
          ))}
        </Box>
      ) : (
        <Typography>No Post To Display</Typography>
      )}

      <ConfirmModal
        show={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleDelete}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      />
    </div>
  );
};

export default MyPost;
