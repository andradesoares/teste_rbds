'use client';
import AuthForm from '@/components/AuthForm';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

const Client = () => {
  useEffect(() => {
    const authToken = localStorage.getItem('jwt');

    if (authToken) {
      redirect('/dashboard');
    }
  }, []);

  return <AuthForm />;
};

export default Client;
