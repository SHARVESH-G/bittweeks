import { Avatar } from "@mui/material";
import CustomChip from "../ui/chip/chip";
import { randomColor } from "../../datas/colors";
import { useRef, useState } from "react";
import { loggedInUser } from "../../hooks/loggedInUser";
import { useHandleFollowing } from "../../hooks/handleFollowing"; // renamed
import { DeptCodeFetcher } from "../../helper/deptToDeptCode";

const RecommendedUserCard = ({ user }) => {
  const currentUser = loggedInUser();
  const currentColors = useRef({});
  const isFollowing = user.allFollowers?.includes(currentUser._id);
  const [thisUser, setThisUser] = useState({ ...user, followed: isFollowing });

  const handleFollowToggle = async () => {
    await useHandleFollowing({
      user: thisUser,
      currentUserId: currentUser._id,
      setUserState: setThisUser,
    });
  };

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-3 flex-wrap">
        <Avatar
          sx={{
            bgcolor: (() => {
              const id = user._id;
              if (!currentColors.current[id]) {
                currentColors.current[id] = randomColor();
              }
              return currentColors.current[id];
            })(),
            width: 32,
            height: 32,
            fontSize: 14,
          }}
          src={user.profilePic || ""}
        >
          {!user.profilePic && user.name.charAt(0)}
        </Avatar>

        <div className="text-xs">
          <div className="flex gap-6">
            <p className="font-medium">{user.name}</p>
            {user.department === currentUser.department && (
              <CustomChip
                text="Your Dept"
                bgcolor="var(--colorPrimaryTernary)"
                color="white"
              />
            )}
          </div>
          <p className="text-[var(--colorPrimaryHover)]">{DeptCodeFetcher(user.department)}</p>
        </div>
      </div>

      <button
        className={`text-xs px-2 py-1 border-2 rounded-md ${thisUser.followed ? "text-red-500 border-red-500 hover:text-white hover:bg-red-500" : "text-[var(--colorPrimary)] border-[var(--colorPrimary)] hover:text-white hover:bg-[var(--colorPrimary)]"}`}
        onClick={handleFollowToggle}
      >
        { currentUser._id === thisUser._id ? "You" : thisUser.followed ? "Unfollow" : "Follow"}
      </button>
    </li>
  );
};

export default RecommendedUserCard;
