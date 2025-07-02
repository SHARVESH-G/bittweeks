import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { randomColor } from "../../datas/randomDatas";
import { useState } from "react";
import { NoOfGroups } from "../../datas/randomDatas";
import { truncateText } from '../../helper/textFormat'

const generateGroups = () =>{
  let ranGroups =[NoOfGroups(3)];
  return ranGroups[0];
}

const RecommendedGroup = () => {
  const [RecommendedRandomGroup, setRecommendedRandomGroup] = useState(generateGroups);
  return (
    <div className="bg-white px-6 py-8 rounded-xl shadow">
      <h2 className="text-sm font-semibold mb-3 pb-4">Recommended Communities</h2>
      <ul className="space-y-3">
        {RecommendedRandomGroup.slice(0,3).map((group) => (
          <li key={group.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar
                sx={{
                  bgcolor: randomColor(),
                  width: 32,
                  height: 32,
                  fontSize: 14,
                }}
              >
                {group.name.slice(0,1)}
              </Avatar>
              <div className="text-xs">
                <p className="font-medium">{truncateText(group.name , 20)}</p>
                <p className="text-[var(--colorPrimaryHover)]"><strong>{group.members}</strong> Active Members</p>
              </div>
            </div>
            <button className="text-xs bg-[var(--colorPrimary)] hover:bg-[var(--colorPrimaryHover)] text-white px-2 py-1 rounded-md">
              Join
            </button>
          </li>
        ))}
        <div className="flex justify-between pt-3 text-xs">
          <Link to="/community" className="text-[var(--colorPrimary)]">See all</Link>
          <button
            onClick={()=>setRecommendedRandomGroup(generateGroups)}
            className="text-[var(--colorPrimary)] cursor-pointer"
          >
            Refresh
          </button>
        </div>
      </ul>
    </div>
  );
};

export default RecommendedGroup;