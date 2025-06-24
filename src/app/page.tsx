import React from 'react';
import Client from './Client';

const Page = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-full max-w-md'>
        <Client />
      </div>
    </div>
  );
};

export default Page;
