import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import useFetchData from '../../hooks/userFetchData';
import { loggedInUser } from "../../hooks/loggedInUser";
import UserPost from '../../components/usersPost/userPost';



const MyPost = () => {
  const { _id: userId } = loggedInUser();
  const { data, loading, error } = useFetchData(`/api/myposts?userId=${userId}`);
  const myPosts = data?.userPosts || [];

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error fetching posts</Typography>;

  return (
    <div className='flex flex-col justify-center items-center'>
      <Typography variant="h5" gutterBottom>My Posts</Typography>

      {myPosts.length > 0 ? (
        <Box>
          <Typography sx={{ marginTop: '4rem' }}>Your Posts ({myPosts.length})</Typography>
          {myPosts.map((post)=>(
            <UserPost post={post}/>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
          <Typography>No Post To Display</Typography>
          <Link to="/posts" className='border-[var(--colorPrimary)] border-2 rounded-[5px] mt-7'>
            <Button sx={{ color: 'var(--colorPrimary)' }}>Create Your Own Post</Button>
          </Link>
        </Box>
      )}
    </div>
  );
};

export default MyPost;
