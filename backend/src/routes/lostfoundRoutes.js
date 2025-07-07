import express from 'express'
import { postLostFoundRequest , fetchAllLostRequest , fetchAllFoundRequest , fetAllLostFoundOfTheUser} from '../controller/lostfoundController.js'
const router = express.Router()

router.get('/alllost' , fetchAllLostRequest);
router.get('/allfound' , fetchAllFoundRequest);
router.post('/newlostfoundreq' ,postLostFoundRequest );
router.get('/alluserreq' , fetAllLostFoundOfTheUser)


export default router;