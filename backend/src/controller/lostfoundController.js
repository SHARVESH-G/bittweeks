import { LostFound } from "../models/LostFound.js";

const postLostFoundRequest = async(req , res) =>{
    try{
        const {reqTitle , reqType , reqContactInfo , reqPlace , reqImage , reqAuthor } = req.body;

        if(!reqTitle || !reqType || !reqContactInfo || !reqAuthor ){
            return res.status(500).json({message:"Some Fields Are Missing"})
        }
        const newRequest = await LostFound({reqTitle , reqType , reqContactInfo , reqPlace:reqPlace || "College" , reqImage , reqAuthor });
        await newRequest.save();
        return res.status(200).json({ message: "Request Posted Successfully" })
    }
    catch (err) {
        return res.status(500).json({ message: "Something Went Wrong While Creating Event" })
    }
}



const fetchAllLostRequest = async(req,res) => {
    try{
        const allReq = await LostFound.find({}).populate('reqAuthor' , 'name profilePic _id').sort({createdAt:-1})
        const allLost = allReq.filter((req)=>req.reqType === 'lost');
        return res.status(200).json(allLost)
    }
    catch(err){
        return res.status(500).json({message:"Something Went Wrong"});
    }
}

const fetchAllFoundRequest = async(req,res) => {
    try{
        const allReq = await LostFound.find({}).populate('reqAuthor' , 'name profilePic _id').sort({createdAt:-1})
        const allFound = allReq.filter((req)=>req.reqType === 'found');
        return res.status(200).json(allFound)
    }
    catch(err){
        return res.status(500).json({message:"Something Went Wrong"});
    }
}

const fetAllLostFoundOfTheUser = async(req,res) => {
    try{
        const {userId} = req.query;
        const allUserRequest = await LostFound.find({reqAuthor:userId}).populate('reqAuthor',"name profilePic _id").sort({createdAt:-1})
        return res.status(200).json(allUserRequest);
    }
    catch(err){
        return res.status(500).json({message:"NOT Fetching Properly"})
    }
}

export { postLostFoundRequest , fetchAllLostRequest , fetchAllFoundRequest , fetAllLostFoundOfTheUser};