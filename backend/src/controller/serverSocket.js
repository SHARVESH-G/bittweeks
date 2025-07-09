
import { Server } from "socket.io";
import {Message} from "../models/Message.js";

const setupSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {


    socket.on("join", (userId) => {
      socket.join(userId);
    });


    socket.on("privateMessage", async ({ sender, recipient, content }) => {
      try {
        const newMessage = new Message({ sender, recipient, content });
        await newMessage.save();

        io.to(recipient).to(sender).emit("newMessage", newMessage);
      } catch (err) {
        console.error("Error saving message:", err);
      }
    });
  });
};

export default setupSocket;
