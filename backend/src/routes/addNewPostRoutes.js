import express from 'express';
import {addNewPost,fetchAllPost,fetchUserPost,toggleLike} from '../controller/addPostController.js';

const router = express.Router();

router.post("/addnewpost", addNewPost);
router.get("/getallpost", fetchAllPost);
router.get("/myposts", fetchUserPost);

router.post("/likepost/:postId", toggleLike);

export default router;
