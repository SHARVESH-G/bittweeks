import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    department: { type: String, required: false }, // ⬅️ was: required: true
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },   // ⬅️ was: required: true

    regNo: { type: String },
    startYear: { type: Number },
    endYear: { type: Number },
    isHosteller: { type: Boolean },
    profilePic: { type: String, default: null },

    followers: { type: Number, default: 0 },
    allFollowers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  },
  { timestamps: true }
);

export const User = mongoose.model("user" , UserSchema);