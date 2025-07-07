import axios from "axios";

const deletePostById = async (path, postId) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api${path}/${postId}`);
    return res.data;
  } catch (err) {
    console.error("Delete failed:", err);
    throw err;
  }
};

export default deletePostById;
