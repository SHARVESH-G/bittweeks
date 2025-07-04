import React from 'react';
import Clock from '../liveClock/liveClock';
import RecommendedUser from '../recomendedUser/recomendedUser';
import RecommendedGroup from '../recomendedGroup/recommendedGroup';
import UserIdCard from '../users/userIdCard/userIdCard';
import { useState } from 'react';

const RightBar = () => {
  const [isClock , setIsClock] = useState(true);
  return (
    <div className="w-full bg-slate-100 shadow-inner flex flex-col overflow-y-auto max-h-screen space-y-4 p-8">
      <div onClick={()=>setIsClock(!isClock)} className='cursor-pointer'>
        {isClock ? <UserIdCard/>
                 : <Clock />}
      </div>
      <RecommendedUser />
      <RecommendedGroup />
    </div>
  );
};

export default RightBar;
