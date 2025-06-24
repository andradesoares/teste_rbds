import React from 'react';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    sessionStorage.removeItem('jwt');
    router.push('/');
  };

  return (
    <div className='flex justify-between items-center px-12 py-4'>
      <span className='font-bold text-4xl text-blue-600'> Dashboard</span>
      <button
        onClick={handleLogout}
        className='bg-blue-600 hover:bg-blue-400 px-6 py-2 rounded-xl hover:cursor-pointer text-white'
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
