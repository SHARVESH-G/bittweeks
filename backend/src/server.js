import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import session from "express-session";
import passport from "passport";
import http from "http";
import setupSocket from "./controller/serverSocket.js";
import "./config/passport.js";

import { ConnectToDB } from "./config/connectToDB.js";
import authRoutes from "./routes/authRoutes.js";
import fetchAllUsers from "./routes/fetchAllUsersRoutes.js";
import addNewPost from "./routes/addNewPostRoutes.js";
import eventRouter from "./routes/eventRoutes.js";
import lostfoundRouter from "./routes/lostfoundRoutes.js";
import messageRoutes from "./routes/messageRouter.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json({ limit: "5mb" }));

app.use(
  session({
    secret: process.env.JWT_SECRET, // or SESSION_SECRET
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // true in production with HTTPS
      sameSite: "lax",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", fetchAllUsers);
app.use("/api", addNewPost);
app.use("/api", eventRouter);
app.use("/api", lostfoundRouter);
app.use("/api", messageRoutes);

// HTTP Server + Socket
const httpServer = http.createServer(app);
setupSocket(httpServer);

// Start Server
ConnectToDB().then(() => {
  httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});