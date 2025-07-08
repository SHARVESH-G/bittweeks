import express from 'express';
import {
  getMessagesForUser,
  getUserConversations,
} from '../controller/messageController.js';

const router = express.Router();

router.get('/messages/:id', getMessagesForUser);
router.get('/messages/users/:userId', getUserConversations);

export default router;
