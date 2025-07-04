import express from 'express'
import { addNewPost , fetchAllPost , fetchUserPost} from '../controller/addPostController.js'

const router = express.Router()

router.post("/addnewpost" , addNewPost);
router.get("/getallpost" , fetchAllPost);
router.get("/myposts" , fetchUserPost);

export default router;