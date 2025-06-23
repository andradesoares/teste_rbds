'use client';
import React from 'react';
import AuthForm from '@/components/AuthForm';
import Loading from '@/components/Loading';
import useAuth from '@/hooks/use-auth';

const Client = () => {
  const { loading } = useAuth();
  return <div className='w-full max-w-md'>{loading ? <Loading /> : <AuthForm />}</div>;
};

export default Client;
