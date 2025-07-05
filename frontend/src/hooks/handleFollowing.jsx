import axios from "axios";

export const handleFollowing = async ({ user, currentUserId, setUserState }) => {
  if (user._id === currentUserId) return;

  try {
    const res = await axios.post(
      `http://localhost:3000/api/userfollow/${user._id}`,
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
