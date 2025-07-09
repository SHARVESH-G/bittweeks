import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Avatar } from '@mui/material'


const MessageSection = ({ currentUserId }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessagedUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/messages/users/${currentUserId}`);
        setUsers(res.data.conversations);
      } catch (err) {
        console.error("Failed to load chat users:", err);
      }
    };

    if (currentUserId) {
      fetchMessagedUsers();
    }
  }, [currentUserId]);

  const openChat = (userId) => {
    navigate(`/messages/${userId}`);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Chats</h2>
      {users.length === 0 && <p className="text-gray-500">No recent chats</p>}
      {users.map(({ user, lastMessage, unreadCount }) => (
        <div
          key={user._id}
          onClick={() => openChat(user._id)}
          className="flex items-center justify-between px-4 py-3 border-2 border-gray-300 hover:bg-gray-100 cursor-pointer my-2 rounded-2xl"
        >
          <div className="flex gap-4">
            <Avatar src={user?.profilePic}>{user.name.slice(0,1)}</Avatar>
            <div>
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-600">{lastMessage}</p>
            </div>
          </div>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {unreadCount} new
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageSection;
