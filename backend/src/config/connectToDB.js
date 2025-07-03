import mongoose from 'mongoose'

export const ConnectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully")
    }catch(err){
        console.log("Something Went Wrong While Connecting To DB")
        process.exit(1);
    }
}