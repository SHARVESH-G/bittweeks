import mongoose from 'mongoose'

const LostFoundSchema = new mongoose.Schema(
    {
        reqTitle:{
            type:String,
            required:true
        },
        reqType:{
            type:String,
            enum:['lost' , 'found'],
            required:true
        },
        reqContactInfo:{
            type:String,
            required:true,
            trim:true
        },
        reqPlace:{
            type:String,
            trim:true
        },
        reqImage:{
            type:String,
            default:null
        },
        reqAuthor:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
        }
    },
    {
        timestamps:true,
    }
)

export const LostFound = mongoose.model('lostfound' , LostFoundSchema);