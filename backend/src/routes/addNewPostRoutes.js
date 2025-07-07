import express from 'express';
import {addNewPost,fetchAllPost,fetchUserPost,toggleLike,deletePost} from '../controller/addPostController.js';

const router = express.Router();

router.post("/addnewpost", addNewPost);
router.get("/getallpost", fetchAllPost);
router.get("/myposts", fetchUserPost);

router.post("/likepost/:postId", toggleLike);
router.delete("/deletepost/:postId", deletePost);

export default router;
