import express from 'express';
import {getAllUsers , toogleFollownUnfollow } from '../controller/fetchAllUsersControllers.js';

const router = express.Router();

router.get("/users", getAllUsers);
router.post('/userfollow/:followedUserId' , toogleFollownUnfollow);

export default router;
