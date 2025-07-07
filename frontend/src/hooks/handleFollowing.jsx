import axios from "axios";
import { backEndURL } from "../datas/backendServerLink";
export const useHandleFollowing = async ({ user, currentUserId, setUserState }) => {
  if (user._id === currentUserId) return;

  try {
    const res = await axios.post(
      `${backEndURL}/api/userfollow/${user._id}`,
      { currentUser: currentUserId }
    );

    setUserState((prev) => ({
      ...prev,
      followed: res.data.followed,
      followers: res.data.followers,
      allFollowers: res.data.allFollowers,
    }));
  } catch (err) {
    console.error(" Failed to follow/unfollow");
  }
};
