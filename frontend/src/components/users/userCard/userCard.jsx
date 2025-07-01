import { Avatar } from "@mui/material";
import { randomColor } from "../../../datas/colors";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-sm shadow-xl p-4 hover:shadow-2xl transition-shadow border border-[var(--colorPrimaryTernary)]">
      <div className="flex items-center gap-4 mb-3">
        <Avatar sx={{ bgcolor: randomColor }}>{user.name.slice(0,1)}</Avatar>
        <div>
          <h2 className="text-xl font-semibold text-[var(--colorPrimary)]">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.username}</p>
        </div>
      </div>
      <span className="mt-2 inline-block border border-1 border-black text-black text-xs font-medium px-3 py-1 rounded-[12px]">
        {user.dept.toUpperCase()}
      </span>
    </div>
  );
};

export default UserCard