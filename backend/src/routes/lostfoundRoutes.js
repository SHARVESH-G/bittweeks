import express from 'express'
import { postLostFoundRequest , fetchAllLostRequest , fetchAllFoundRequest} from '../controller/lostfoundController.js'
const router = express.Router()

router.get('/alllost' , fetchAllLostRequest);
router.get('/allfound' , fetchAllFoundRequest);
router.post('/newlostfoundreq' ,postLostFoundRequest );


export default router;