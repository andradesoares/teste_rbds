'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

import { getUserById } from '@/queries/user';
import NavBar from '@/components/NavBar';
import Loading from '@/components/Loading';
import useAuth from '@/hooks/use-auth';
import UserProfile from '@/components/UserProfile';

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
  const { userId, jwt } = useAuth();

  const { data, isPending } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => await getUserById(userId, jwt),
  });

  return isPending ? (
    <Loading />
  ) : (
    <div className='h-screen flex flex-col gap-32'>
      <NavBar />
      {data && <UserProfile user={data.data} />}
    </div>
  );
};

export default Client;
