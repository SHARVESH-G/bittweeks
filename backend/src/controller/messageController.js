import {Message} from "../models/Message.js";
import {User} from "../models/Users.js";

// 1. Get all messages between two users (used for chat screen)
export const getMessagesForUser = async (req, res) => {
  const { id: recipientId } = req.params;
  const { currentUserId } = req.query;

  try {
    const messages = await Message.find({
      $or: [
        { sender: currentUserId, recipient: recipientId },
        { sender: recipientId, recipient: currentUserId },
      ],
    }).sort({ createdAt: 1 });

    res.status(200).json({ messages });
  } catch (err) {
    console.error("Failed to fetch messages:", err);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};

// 2. Get all recent conversations for a user (used in inbox / message section)
export const getUserConversations = async (req, res) => {
  const { userId } = req.params;

  try {
    const messages = await Message.find({
      $or: [{ sender: userId }, { recipient: userId }],
    }).sort({ createdAt: -1 });

    const convoMap = new Map();

    for (const msg of messages) {
      const otherUserId =
        msg.sender.toString() === userId
          ? msg.recipient.toString()
          : msg.sender.toString();

      if (!convoMap.has(otherUserId)) {
        convoMap.set(otherUserId, {
          userId: otherUserId,
          lastMessage: msg.content,
          unreadCount: 0,
        });
      }

      if (msg.recipient.toString() === userId && msg.isSeen === false) {
        convoMap.get(otherUserId).unreadCount += 1;
      }
    }

    const userIds = Array.from(convoMap.keys());
    const users = await User.find({ _id: { $in: userIds } });

    const conversations = userIds.map((id) => {
      const user = users.find((u) => u._id.toString() === id);
      const { lastMessage, unreadCount } = convoMap.get(id);

      return {
        user: {
          _id: user._id,
          name: user.name,
          profilePic: user.profilePic,
        },
        lastMessage,
        unreadCount,
      };
    });

    res.status(200).json({ conversations });
  } catch (err) {
    console.error("Failed to load conversations:", err);
    res.status(500).json({ message: "Failed to load conversations" });
  }
};
