import express from 'express';
import {getAllUsers } from '../controller/fetchAllUsersControllers.js';

const router = express.Router();

router.get("/users", getAllUsers);

export default router;
