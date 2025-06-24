'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { getUserById } from '@/api/user';
import NavBar from '@/components/NavBar';
import Loading from '@/components/Loading';
import useAuth from '@/hooks/use-auth';
import UserProfile from '@/components/UserProfile';

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
