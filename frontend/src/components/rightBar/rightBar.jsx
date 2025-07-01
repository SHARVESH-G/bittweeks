import React from 'react'
import Clock from '../liveClock/liveClock'
import RecommendedUser from '../recomendedUser/recomendedUser'
import RecommendedGroup from '../recomendedGroup/recommendedGroup'


const RightBar = () => {
  return (
    <div className="w-150 h-screen bg-slate-100 shadow-md flex flex-col">
      <Clock />
      <RecommendedUser />
      <RecommendedGroup />
    </div>
  )
}

export default RightBar