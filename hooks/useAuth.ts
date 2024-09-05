// /hooks/useAuth.ts
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import useAuthStore from '@/store/store';

const useAuth = () => {
  const router = useRouter();


  useEffect(() => {
    const token = Cookies.get('authToken');
    const currentPath = window.location.pathname;
    console.log('Token Collected');

    if (token) {
      try {
        const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
        if (!secret) {
          console.error('JWT_SECRET is not defined');
          return;
        }

        const decoded = jwt.verify(token, secret);
        console.log('Token is valid:');

        if (currentPath === '/login' || currentPath === '/register') {
          router.push('/');
        }

        return;
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }

    // Redirect to login if token is missing or invalid and current page is not login/register
    if (currentPath !== '/login' && currentPath !== '/register') {

      router.push('/login');
    }
  }, [router]);
};

export default useAuth;
