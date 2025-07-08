import express from 'express';
import {
  getAllUsers,
  getUserById,
  toogleFollownUnfollow
} from '../controller/fetchAllUsersControllers.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/userfollow/:followedUserId', toogleFollownUnfollow);

export default router;
