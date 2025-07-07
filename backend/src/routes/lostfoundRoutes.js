import express from 'express'
import { postLostFoundRequest , fetchAllLostRequest , fetchAllFoundRequest , fetAllLostFoundOfTheUser , deleteLostFoundRequests} from '../controller/lostfoundController.js'
const router = express.Router()

router.get('/alllost' , fetchAllLostRequest);
router.get('/allfound' , fetchAllFoundRequest);
router.post('/newlostfoundreq' ,postLostFoundRequest );
router.get('/alluserreq' , fetAllLostFoundOfTheUser)

router.delete('/deletelostfound/:reqId', deleteLostFoundRequests);



export default router;