import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import useFetchData from "../../hooks/userFetchData";
import { loggedInUser } from "../../hooks/loggedInUser";
import UserPost from "../../components/usersPost/userPost";
import { TbFilterDown , TbFilterUp  } from "react-icons/tb";
import { MoonLoader } from "react-spinners";


const MyPost = () => {
  const [filter , setFilter] = useState(false);



  const { _id: userId } = loggedInUser();
  const { data, loading, error } = useFetchData(
    `/api/myposts?userId=${userId}`
  );
  const myPosts = data?.userPosts || [];

  if (loading){
    return (
      <div className="flex justify-center py-10">
          <MoonLoader size={35} color="var(--colorPrimary)" />
      </div>
    )
  }
  if (error) return <Typography>Error fetching posts</Typography>;
  const sortedPost = filter ? [...myPosts].reverse() : myPosts;
  const FilterIcon = filter ? <TbFilterDown/> : <TbFilterUp/>
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
            <Typography >
              Your Posts ({myPosts.length})
            </Typography>
            <button className="border-[var(--colorPrimary)] border-2 rounded-[5px] px-4 py-1 text-[var(--colorPrimary)] flex items-center gap-2" onClick={()=>setFilter(!filter)}>
              {FilterIcon}
              Sort  
            </button>
          </div>
          {sortedPost.map((post) => (
            <UserPost post={post} />
          ))}
        </Box>
      ) : <Typography>No Post To Display</Typography>}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        
      </Box>
    </div>
  );
};

export default MyPost;
