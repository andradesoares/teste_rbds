'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/queries/user';
import NavBar from '@/components/NavBar';
import Loading from '@/components/Loading';
import useAuth from '@/hooks/use-auth';

const Client = () => {
  const { loading, userId } = useAuth();

  useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const data = await getUserById(userId);
      console.log(data);
    },
  });

  return loading ? <Loading /> : <NavBar />;
};

export default Client;
