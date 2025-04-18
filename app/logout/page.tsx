'use client';

import { useAuth } from '@/app/context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LogoutPage() {
  const { dispatch } = useAuth();
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('auth');
    dispatch({ type: 'LOGOUT' });
    router.replace('/');
  }, [router, dispatch]);

  return null;
}
