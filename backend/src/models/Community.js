import mongoose from 'mongoose';

const CommunitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    img: {
      type: String,
      default: '',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    members:{
        type:Number,
        default:0
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Community', CommunitySchema);
