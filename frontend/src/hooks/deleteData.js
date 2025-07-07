import axios from "axios";
import { backEndURL } from "../datas/backendServerLink";


const deletePostById = async (path, postId) => {
  try {
    const res = await axios.delete(`${backEndURL}/api${path}/${postId}`);
    return res.data;
  } catch (err) {
    console.error("Delete failed:", err);
    throw err;
  }
};

export default deletePostById;
