import express from 'express'
import { addEvent, getAllEvents } from '../controller/eventController.js';

const router = express.Router();

router.post('/addevent' , addEvent);

router.get('/getallevent' ,getAllEvents )

export default router;