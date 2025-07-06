import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { ConnectToDB } from './config/connectToDB.js'

import authRoutes from './routes/authRoutes.js'
import fetchAllUsers from './routes/fetchAllUsersRoutes.js'
import addNewPost from './routes/addNewPostRoutes.js'
import eventRouter from './routes/eventRoutes.js'


const PORT = process.env.PORT
const server = express();
server.use(express.json({ limit: "5mb" }));
server.use(cors({ origin: "*" }))

ConnectToDB()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server Started on http://localhost/${PORT}`);
        })
    })
    .catch(() => {
        console.log(`Can't Start Server Something Went Wrong`);
    })


server.use('/api/auth', authRoutes);
server.use('/api', fetchAllUsers);
server.use('/api', addNewPost);
server.use('/api', eventRouter);