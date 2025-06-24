'use client';
import React from 'react';
import AuthForm from '@/components/AuthForm';
import Loading from '@/components/Loading';
import useAuth from '@/hooks/use-auth';

const Client = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return <AuthForm />;
};

export default Client;
