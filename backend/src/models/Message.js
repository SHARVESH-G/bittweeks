import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
        recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
        content: { type: String, required: true },
        seen:{type:Boolean , default:false}
    },
    {
        timestamps: true
    }
);

export const Message =  mongoose.model('Message', messageSchema);
