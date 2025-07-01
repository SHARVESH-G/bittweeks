import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { Colors } from '../../datas/colors';
import { recommendedUsers } from '../../datas/temp/users'
import CustomChip from '../ui/chip/chip'


function getRandomColor(){
    return Colors[Math.floor(Math.random() * Colors.length)];
}


const RecommendedUser = () => {
  return (
    <div className="bg-white m-10 p-4 rounded-[25px]">
      <h2 className="text-lg font-semibold mb-4 pr-8 pl-8">Recommended Users you</h2>
      <ul className="space-y-4">
        {recommendedUsers.map((user) => (
          <li key={user.id} className="flex items-center justify-between pl-8 pr-8">
            <div className="flex items-center gap-5">
              <Avatar sx={{ bgcolor: getRandomColor() }}>{user.name.slice(0,1)}</Avatar>
              <div>
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-[var(--colorPrimaryHover)]">{user.username}</p>
              </div>
              {user.dept == 'cse' && <CustomChip text="Your Department" bgcolor="var(--colorPrimaryTernary)" color="white"/>}
            </div>
            <button className="text-sm bg-[var(--colorPrimary)] hover:bg-[var(--colorPrimaryHover)] text-white px-3 py-1 rounded cursor-pointer">
              Follow
            </button>
          </li>
        ))}
        <Link to="/users" className="mt-5 text-[var(--colorPrimary)] pr-8 pl-8">See all</Link>
      </ul>
    </div>
  );
};

export default RecommendedUser;
