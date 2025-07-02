import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { randomColor, NoOfUsers } from '../../datas/randomDatas';
import CustomChip from '../ui/chip/chip';


const generateUsers = () =>{
  const ranUser = NoOfUsers(3);
  return ranUser;
}
const RecommendedUser = () => {
  const [recommendedUsers, setRecommendedUsers] = useState(generateUsers);

  return (
    <div className="bg-white px-6 py-8 rounded-xl shadow">
      <h2 className="text-sm font-semibold mb-3 pb-4">Recommended Users</h2>
      <ul className="space-y-3">
        {recommendedUsers.map((user, index) => (
          <li key={user.id + '-' + index} className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-wrap">
              <Avatar sx={{ bgcolor: randomColor(), width: 32, height: 32, fontSize: 14 }}>
                {user.name.charAt(0)}
              </Avatar>
              <div className="text-xs">
                <p className="font-medium">{user.name}</p>
                <p className="text-[var(--colorPrimaryHover)]">{user.username}</p>
              </div>
              {user.dept === 'cse' && (
                <CustomChip
                  text="Your Dept"
                  bgcolor="var(--colorPrimaryTernary)"
                  color="white"
                />
              )}
            </div>
            <button className="text-xs bg-[var(--colorPrimary)] hover:bg-[var(--colorPrimaryHover)] text-white px-2 py-1 rounded-md">
              Follow
            </button>
          </li>
        ))}
        <div className="flex justify-between pt-3 text-xs">
          <Link to="/users" className="text-[var(--colorPrimary)]">See all</Link>
          <button
            onClick={() => setRecommendedUsers(generateUsers())}
            className="text-[var(--colorPrimary)] cursor-pointer"
          >
            Refresh
          </button>
        </div>
      </ul>
    </div>
  );
};

export default RecommendedUser;
