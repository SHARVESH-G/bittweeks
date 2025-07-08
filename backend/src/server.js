//server js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { ConnectToDB } from './config/connectToDB.js';

import http from "http";
import setupSocket from './controller/serverSocket.js';

import authRoutes from './routes/authRoutes.js';
import fetchAllUsers from './routes/fetchAllUsersRoutes.js';
import addNewPost from './routes/addNewPostRoutes.js';
import eventRouter from './routes/eventRoutes.js';
import lostfoundRouter from './routes/lostfoundRoutes.js';
import messageRoutes from './routes/messageRouter.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(cors({ origin: "*" }));

// Create HTTP server
const httpServer = http.createServer(app);

// Setup Socket
setupSocket(httpServer);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', fetchAllUsers);
app.use('/api', addNewPost);
app.use('/api', eventRouter);
app.use('/api', lostfoundRouter);

app.use('/api', messageRoutes);


// Connect to DB and start server
ConnectToDB()
  .then(() => {
    httpServer.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log(`Can't Start Server. Something went wrong`);
  });
