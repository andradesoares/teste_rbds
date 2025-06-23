'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  id: string;
  email: string;
  fullname: string;
  active: boolean;
  role: string;
  iat: number;
  exp: number;
}

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');

  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('jwt') || sessionStorage.getItem('jwt');

    if (!authToken) {
      setLoading(false);

      router.push('/');
      return;
    }

    const decoded = jwtDecode<JwtPayload>(authToken);
    setUserId(decoded.id);
    setLoading(false);

    router.push('/dashboard');
  }, []);

  return { loading, userId };
};

export default useAuth;
