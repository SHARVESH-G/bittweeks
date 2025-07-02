import React from 'react'
import { userPost } from '../../datas/userPosts'
import {Link} from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'



const MyPost = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Typography>My Posts</Typography>
      {userPost.length != 0 
            ? <Typography sx={{marginTop:'4rem'}}>Your Posts</Typography> 
            : <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'center' , marginTop:'50px'}}>
                <Typography>No Post To Display</Typography>
                <Link to="/posts" className='border border-[var(--colorPrimary)] border-2 rounded-[5px] mt-7'><Button sx={{color:'var(--colorPrimary)'}}>Create Your Own Post</Button></Link>
              </Box>}
    </div>
  )
}

export default MyPost