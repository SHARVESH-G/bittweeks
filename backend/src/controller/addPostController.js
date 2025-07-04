import { Post } from "../models/Post.js";

const addNewPost = async (req, res) => {
  try {
    const { postTitle, postImage, postAuthor} = req.body;

    if (!postTitle || !postAuthor) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Post({ postTitle, postImage:postImage||null, postAuthor});
    await newPost.save();

    return res.status(201).json({ message: "Posted Successfully", post: newPost });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};



const fetchAllPost = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate('postAuthor', 'name email department profilePic')
      .sort({ createdAt: -1 });

    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(500).json({ message: "Fetching went wrong" });
  }
};

export { addNewPost , fetchAllPost};
