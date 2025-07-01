import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { Colors } from '../../datas/colors';
import { groups} from '../../datas/temp/groups'


function getRandomColor(){
    return Colors[Math.floor(Math.random() * Colors.length)];
}


const RecommendedGroup = () => {
  return (
    <div className="bg-white m-10 p-4 rounded-[25px]">
      <h2 className="text-lg font-semibold mb-4 pr-8 pl-8">Recommended Communities you</h2>
      <ul className="space-y-4">
        {groups.map((group) => (
          <li key={group.id} className="flex items-center justify-between pl-8 pr-8">
            <div className="flex items-center gap-5">
              <Avatar sx={{ bgcolor: getRandomColor() }}>{group.name.slice(0,1)}</Avatar>
              <div>
                <p className="font-medium text-sm">{group.name}</p>
                <p className="text-xs text-[var(--colorPrimaryHover)]">{group.members} Acive</p>
              </div>
            </div>
            <button className="text-sm bg-[var(--colorPrimary)] hover:bg-[var(--colorPrimaryHover)] text-white px-3 py-1 rounded cursor-pointer">
              Join
            </button>
          </li>
        ))}
        <Link to="/community" className="mt-5 text-[var(--colorPrimary)] pr-8 pl-8">See all</Link>
      </ul>
    </div>
  );
};

export default RecommendedGroup;
