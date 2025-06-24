'use client';
import React from 'react';

interface User {
  active: boolean;
  email: string;
  externalUserId: string | null;
  fullname: string;
  id: string;
  role: string;
}

const UserProfile = ({ user }: { user: User }) => {
  return (
    <div className='w-1/3 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 self-center'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>User Details</h1>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h4 className='mb-0 block text-sm font-medium text-gray-700'>Name</h4>
          <p>{user.fullname}</p>
        </div>
        <div className='flex items-center justify-between'>
          <h4 className='mb-0 block text-sm font-medium text-gray-700'>Email</h4>
          <p>{user.email}</p>
        </div>
        <div className='flex items-center justify-between space-y-2'>
          <h4 className='mb-0 block text-sm font-medium text-gray-700'>Role</h4>
          <p>{user.role}</p>
        </div>
        <div className='flex items-center justify-between'>
          <h4 className='mb-0 block text-sm font-medium text-gray-700'>Status</h4>
          <p>{user.active ? 'Active' : 'Inactive'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
