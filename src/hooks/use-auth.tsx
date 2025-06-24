'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '@/lib/types';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [jwt, setjwt] = useState('');
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('jwt') || sessionStorage.getItem('jwt');

    if (!authToken) {
      setLoading(false);

      router.push('/');
      return;
    }

    setjwt(authToken);
    const decoded = jwtDecode<JwtPayload>(authToken);

    setUserId(decoded.id);

    setLoading(false);

    router.push('/dashboard');
  }, []);

  return { loading, userId, jwt };
};

export default useAuth;
