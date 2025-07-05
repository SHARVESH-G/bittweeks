import { Avatar, Button } from "@mui/material";
import { DeptCodeFetcher } from "../../../helper/deptToDeptCode";
import { randomColor } from "../../../datas/colors";
import { useRef, useState } from "react";
import { loggedInUser } from "../../../hooks/loggedInUser";
import { handleFollowing } from "../../../hooks/handleFollowing";


const UserCard = ({ user }) => {
  const usersColors = useRef({});
  const currentUser = loggedInUser();

  const isFollowing = user.allFollowers?.includes(currentUser._id);
  const [thisUser, setThisUser] = useState({ ...user, followed: isFollowing });

  const displayUser = thisUser;

  return (
    <div className="bg-white cursor rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center gap-2 border border-[var(--colorPrimary)] border-0.5">
      <Avatar
        src={displayUser.profilePic || ""}
        sx={{
          bgcolor: (() => {
            const id = displayUser._id;
            if (!usersColors.current[id]) {
              usersColors.current[id] = randomColor();
            }
            return usersColors.current[id];
          })(),
          width: 60,
          height: 60,
          fontSize: 22,
        }}
      >
        {!displayUser.profilePic && displayUser.name.slice(0, 1).toUpperCase()}
      </Avatar>

      <div className="flex flex-col items-center">
        <h2 className="text-base font-semibold text-gray-800">{displayUser.name}</h2>
        <p className="text-xs text-gray-500">{displayUser.email}</p>
        <p className="text-xs text-gray-500 mt-2">
          Followers : {displayUser.allFollowers.length}
        </p>
        <span className="mt-1 text-[10px] text-[var(--colorPrimary)] bg-gray-100 border border-[var(--colorPrimary)] px-2 py-[2px] rounded-full">
          {DeptCodeFetcher(displayUser.department.toUpperCase())}
        </span>
      </div>

      <Button
        variant="outlined"
        size="small"
        sx={{
          fontSize: "11px",
          textTransform: "none",
          fontWeight: "bold",
          mt: 1,
          borderRadius: "8px",
          color: displayUser.followed ? "red" : "var(--colorPrimary)",
          borderColor: displayUser.followed ? "red" : "var(--colorPrimary)",
        }}
        onClick={() => handleFollowing({ user: displayUser, currentUserId: currentUser._id, setUserState: setThisUser })}
      >
        {currentUser._id === displayUser._id ? "YOU" : displayUser.followed ? "Unfollow" : "Follow"}
      </Button>
    </div>
  );
};

export default UserCard;