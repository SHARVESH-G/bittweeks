import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import { Avatar } from "@mui/material";

const socket = io("http://localhost:3000");

const ChatPage = ({ currentUserId }) => {
  const { recipientId } = useParams();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [recipientInfo, setRecipientInfo] = useState(null);
  const messageEndRef = useRef(null);

  useEffect(() => {
    socket.emit("join", currentUserId);

    const fetchMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/messages/${recipientId}`, {
          params: { currentUserId },
        });
        setMessages(res.data.messages);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    const fetchRecipient = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/users/${recipientId}`);
        setRecipientInfo(res.data);
      } catch (err) {
        console.error("Error fetching recipient info:", err);
      }
    };

    fetchMessages();
    fetchRecipient();

    socket.on("newMessage", (msg) => {
      const match =
        (msg.sender === currentUserId && msg.recipient === recipientId) ||
        (msg.sender === recipientId && msg.recipient === currentUserId);
      if (match) setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("newMessage");
  }, [recipientId, currentUserId]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("privateMessage", {
      sender: currentUserId,
      recipient: recipientId,
      content: text,
    });

    setText("");
  };

  return (
    <div className="relative w-full sm:h-[90vh] bg-[var(--colorPrimary)]/20 overflow-hidden h-[82vh] by-4">
      <div className="absolute top-0 left-0 w-full z-10 p-4 bg-white shadow flex items-center gap-3 border-b">
        <Avatar
          src={recipientInfo?.profilePic || ""}
          sx={{ width: 40, height: 40, fontSize: 16 }}
        >
          {!recipientInfo?.profilePic && recipientInfo?.name?.[0]?.toUpperCase()}
        </Avatar>
        <h2 className="text-lg font-semibold text-gray-800">
          {recipientInfo?.name || "Chat"}
        </h2>
      </div>
      <div
        className="absolute w-full z-10 px-4 py-2 bg-white shadow-inner border-t border-gray-200"
        style={{
          bottom: window.innerWidth < 768 ? "0px" : "0px",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex items-center gap-3"
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a message..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0088cc] text-sm"
          />
          <button
            type="submit"
            className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-full bg-[var(--colorPrimary)] text-white hover:bg-[#007ab8] transition"
          >
            <IoSend className="text-lg" />
          </button>
        </form>
      </div>


      <div
        className="absolute inset-0 overflow-y-auto px-4 space-y-2 hide-scrollbar"
        style={{
          paddingTop: "80px" ,
          paddingBottom: window.innerWidth < 768 ? "130px" : "80px",
        }}
      >
        {messages.map((msg) => {
          const isMine = msg.sender === currentUserId;
          return (
            <div
              key={msg._id}
              className={`flex items-end gap-2 ${isMine ? "justify-end" : "justify-start"}`}
            >
              {!isMine && (
                <Avatar
                  src={recipientInfo?.profilePic || ""}
                  sx={{ width: 30, height: 30, fontSize: 14 }}
                >
                  {!recipientInfo?.profilePic && recipientInfo?.name?.[0]?.toUpperCase()}
                </Avatar>
              )}
              <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm break-words ${
                  isMine
                    ? "bg-[var(--colorPrimary)] text-white ml-auto"
                    : "bg-gray-100 text-gray-800 mr-auto"
                }`}
              >
                {msg.content}
              </div>
            </div>
          );
        })}
        <div ref={messageEndRef} />
      </div>
    </div>
  );
};

export default ChatPage;
