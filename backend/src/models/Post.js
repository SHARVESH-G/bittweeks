import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    postTitle: {
      type: String,
      required: true,
    },
    postImage: {
      type: String,
    },
    postAuthor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    postLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  { timestamps: true }
);


export const Post = mongoose.model('post' , PostSchema);