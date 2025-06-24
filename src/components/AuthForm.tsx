'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';

import { login } from '@/api/auth';
import { useFormStore } from '@/store';

const AuthForm = () => {
  const email = useFormStore((state) => state.email);
  const password = useFormStore((state) => state.password);
  const updateEmail = useFormStore((state) => state.updateEmail);
  const updatePassword = useFormStore((state) => state.updatePassword);

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      return await login({ email, password });
    },
    onSuccess: (response) => {
      if (remember) {
        localStorage.setItem('jwt', response.data.account.jwt);
      } else {
        sessionStorage.setItem('jwt', response.data.account.jwt);
      }
      updateEmail('');
      updatePassword('');

      router.push('/dashboard');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  const disabled = () => {
    return email == '' || password == '' || mutation.isPending;
  };

  return (
    <div className='bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Welcome Back</h1>
        <p className='text-gray-600'>Sign in to continue</p>
      </div>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='space-y-2'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <div className='relative'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
              required
              className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg '
              placeholder='Enter your email'
            />
          </div>
        </div>
        <div className='space-y-2'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
            Password
          </label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              required
              className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg'
              placeholder='Enter your password'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer'
            >
              {showPassword ? <EyeOff className='w-5 h-5' /> : <Eye className='w-5 h-5' />}
            </button>
          </div>
        </div>
        <div className='flex items-center h-5'>
          <input
            id='remember'
            type='checkbox'
            checked={remember}
            className='w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 '
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label
            htmlFor='remember'
            className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Remember me
          </label>
        </div>
        <button
          type='submit'
          disabled={disabled()}
          className='w-full bg-blue-600 hover:bg-blue-400 px-6 py-2 rounded-xl hover:cursor-pointer text-white disabled:opacity-50 disabled:hover:bg-blue-600'
        >
          {mutation.isPending ? 'Signing In...' : 'Sign In'}
        </button>
        {mutation.isError && (
          <p className='block text-sm font-medium text-red-700'>{mutation.error.message}</p>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
