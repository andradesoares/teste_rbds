'use client';
import React, { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/queries/user';

interface JwtPayload {
  id: string;
  email: string;
  fullname: string;
  active: boolean;
  role: string;
  iat: number;
  exp: number;
}

const Client = () => {
  const router = useRouter();
  const [user, setUser] = useState();
  const [jwt, setJwt] = useState<JwtPayload>();

  useEffect(() => {
    const authToken = localStorage.getItem('jwt');

    if (!authToken) {
      redirect('/');
    }

    const decoded = jwtDecode<JwtPayload>(authToken);
    setJwt(decoded);
  }, []);

  useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const data = await getUserById(jwt.id);
      console.log(data);
    },
  });

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    router.push('/');
  };

  return (
    <div className='flex'>
      Dashboard
      <button
        onClick={handleLogout}
        className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:cursor-pointer hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
      >
        Logout
      </button>
    </div>
  );
};

export default Client;
