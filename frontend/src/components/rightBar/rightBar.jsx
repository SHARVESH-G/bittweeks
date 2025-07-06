import React from 'react';
import Clock from '../liveClock/liveClock';
import RecommendedUser from '../recomendedUser/recomendedUser';
import RecommendedEvent from '../recomendedEvent/recommendedEvent';
import UserIdCard from '../users/userIdCard/userIdCard';
import { useState } from 'react';
import QuoteCard from '../quoteCard/quoteCard';

const RightBar = () => {
  const [isClock , setIsClock] = useState(true);
  return (
    <div className="w-full bg-slate-100 shadow-inner flex flex-col overflow-y-auto h-full space-y-4 p-8">
      <div onClick={()=>setIsClock(!isClock)} className='cursor-pointer'>
        {isClock ? <UserIdCard/>
                 : <Clock />}
      </div>
      <RecommendedUser />
      <RecommendedEvent />
      <QuoteCard />
    </div>
  );
};

export default RightBar;
