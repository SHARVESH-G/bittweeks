import React from 'react';
import Clock from '../liveClock/liveClock';
import RecommendedUser from '../recomendedUser/recomendedUser';
import RecommendedGroup from '../recomendedGroup/recommendedGroup';

const RightBar = () => {
  return (
    <div className="w-full bg-slate-100 shadow-inner flex flex-col overflow-y-auto max-h-screen space-y-4 p-8">
      <Clock />
      <RecommendedUser />
      <RecommendedGroup />
    </div>
  );
};

export default RightBar;
