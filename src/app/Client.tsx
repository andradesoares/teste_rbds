'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AuthForm from '@/components/AuthForm';
import Loading from '@/components/Loading';

const Client = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('jwt') || sessionStorage.getItem('jwt');

    if (authToken) {
      router.push('/dashboard');
      return;
    }
    setLoading(false);
  }, []);

  return loading ? <Loading /> : <AuthForm />;
};

export default Client;
