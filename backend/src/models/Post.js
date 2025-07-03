import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    likes:{
      type:Number,
      default:0
    }
  },
  { timestamps: true }
);

export const Post = mongoose.model('post', PostSchema);
