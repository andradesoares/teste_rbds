'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/queries/user';
import NavBar from '@/components/NavBar';
import Loading from '@/components/Loading';

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
  const [user, setUser] = useState();
  const [jwt, setJwt] = useState<JwtPayload>();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('jwt');

    if (!authToken) {
      router.push('/');
      return;
    }

    const decoded = jwtDecode<JwtPayload>(authToken);
    setJwt(decoded);
    setLoading(false);
  }, []);

  useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const data = await getUserById(jwt.id);
      console.log(data);
    },
  });

  return loading ? <Loading /> : <NavBar />;
};

export default Client;
