import { Avatar, Button } from "@mui/material";
import { randomColor } from "../../../datas/colors";

const GroupCard = ({ group }) => {
  return (
    <div className="bg-slate-100 rounded-xl px-4 py-5 hover:shadow-lg transition-shadow border border-[var(--colorPrimaryTernary)] flex flex-col items-center text-center space-y-2">
      <Avatar
        sx={{
          bgcolor: randomColor,
          width: 56,
          height: 56,
          fontSize: 24,
          mb: 1,
        }}
      >
        {group.name.charAt(0)}
      </Avatar>
      <h2 className="text-base font-semibold text-[var(--colorPrimary)]">
        {group.name}
      </h2>
      <span className="inline-block border border-green-400 text-green-600 text-xs font-medium px-3 py-0.5 rounded-full">
        {group.members} Active Members
      </span>
      <Button sx={{marginTop:'8px' , fontSize:'12px' , fontWeight:'bolder' , color:'var(--colorPrimary)' , border:'2px solid var(--colorPrimaryHover)'}}>Join Community</Button>
    </div>
  );
};

export default GroupCard;
