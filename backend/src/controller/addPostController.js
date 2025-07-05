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
      .populate('postAuthor', 'name email department profilePic allFollowers')
      .sort({ createdAt: -1 });

    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(500).json({ message: "Fetching went wrong" });
  }
};





const fetchUserPost = async(req,res)=>{
  try{
    const {userId} = req.query;
    const userPosts = await Post.find({postAuthor : userId}).populate("postAuthor" , "name profilePic").sort({createdAt:-1})
    return res.status(200).json({userPosts})
  }catch(err){
    return res.status(500).json({message:"Something Went Wrong"})
  }
}


const toggleLike = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.body.userId;

    const post = await Post.findById(postId);

    if (!post) return res.status(404).json({ message: 'Post not found' });

    const liked = post.postLikes.some(id => id.toString() === userId);

    if (liked) {
      post.postLikes = post.postLikes.filter(id => id.toString() !== userId);
    } else {
      post.postLikes.push(userId);
    }

    await post.save();

    res.status(200).json({
      liked: !liked,
      likeCount: post.postLikes.length,
      updatedLikes: post.postLikes
    });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};


export { addNewPost , fetchAllPost , fetchUserPost , toggleLike};
