import React from 'react';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    router.push('/');
  };
  return (
    <div className='flex justify-between items-center px-12 py-4 bg-gray-200'>
      <span className='font-bold text-4xl'> Dashboard</span>
      <button
        onClick={handleLogout}
        className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:cursor-pointer hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
