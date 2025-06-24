'use client';
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { getUserById } from '@/api/user';
import NavBar from '@/components/NavBar';
import Loading from '@/components/Loading';
import useAuth from '@/hooks/use-auth';
import UserProfile from '@/components/UserProfile';

const Client = () => {
  const { userId, jwt } = useAuth();
  const router = useRouter();

  const { data, isPending, isError } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => await getUserById(userId, jwt),
  });

  useEffect(() => {
    if (isError) {
      localStorage.removeItem('jwt');
      sessionStorage.removeItem('jwt');
      router.push('/');
    }
  }, [isError]);

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className='h-screen flex flex-col gap-32'>
      <NavBar />
      {data && <UserProfile user={data.data} />}
    </div>
  );
};

export default Client;
