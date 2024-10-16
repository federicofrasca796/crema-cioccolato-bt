import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='container mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14'>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
      <div className='skeleton h-16 rounded-full'></div>
    </div>
  );
};

export default Loading;
