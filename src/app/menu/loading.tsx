import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='container mx-auto mt-10 grid grid-cols-1 gap-14 md:grid-cols-2'>
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
