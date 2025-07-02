import React from 'react';
import PostTweek from '../../components/postTweek/postTweek';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <PostTweek />
      </div>
    </div>
  );
};

export default Home;
