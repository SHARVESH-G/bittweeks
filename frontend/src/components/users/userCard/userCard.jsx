import { Avatar, Button } from "@mui/material";
import { randomColor } from "../../../datas/colors";

const UserCard = ({ user }) => {
  return (
    <div className="bg-slate-100 rounded-2xl p-6 hover:shadow-2xl transition-shadow border border-[var(--colorPrimaryTernary)] flex flex-col items-center text-center">
      <Avatar
        sx={{
          bgcolor: randomColor,
          width: 72,
          height: 72,
          fontSize: 32,
          mb: 2,
        }}
      >
        {user.name.slice(0, 1)}
      </Avatar>
      <h2 className="text-xl font-semibold text-[var(--colorPrimary)]">{user.name}</h2>
      <p className="text-sm text-gray-500 mb-3">{user.username}</p>
      <span className="inline-block border border-black text-black text-xs font-medium px-3 py-1 rounded-[12px]">
        {user.dept.toUpperCase()}
      </span>
      <Button sx={{marginTop:'8px' , fontSize:'12px' , fontWeight:'bolder' , color:'var(--colorPrimary)'}}>Follow</Button>
    </div>
  );
};

export default UserCard;
