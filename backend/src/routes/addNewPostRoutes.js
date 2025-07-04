import express from 'express'
import { addNewPost , fetchAllPost} from '../controller/addPostController.js'

const router = express.Router()

router.post("/addnewpost" , addNewPost);
router.get("/getallpost" , fetchAllPost);

export default router;