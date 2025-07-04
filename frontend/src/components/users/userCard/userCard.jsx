import { Avatar, Button } from "@mui/material";
import { randomColor } from "../../../datas/colors";


const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center gap-2 border border-[var(--colorPrimary)] border-0.5">
      <Avatar
        src={user.profilePic || ""}
        sx={{
          bgcolor: user.profilePic ? "transparent" : randomColor,
          width: 60,
          height: 60,
          fontSize: 22,
        }}
      >
        {!user.profilePic && user.name.slice(0, 1).toUpperCase()}
      </Avatar>

      <div className="flex flex-col items-center">
        <h2 className="text-base font-semibold text-gray-800">{user.name}</h2>
        <p className="text-xs text-gray-500">{user.email}</p>
        <p className="text-xs text-gray-500 mt-2">Followers : {user.followers}</p>
        <span className="mt-1 text-[10px] text-[var(--colorPrimary)] bg-gray-100 border border-[var(--colorPrimary)] px-2 py-[2px] rounded-full">
          {user.department.toUpperCase()}
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
          color: "var(--colorPrimary)",
          borderColor: "var(--colorPrimary)"
        }}
      >
        Follow
      </Button>
    </div>
  );
};

export default UserCard;
