"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import useAuthStore from '@/store/store';
import Image from 'next/image';

const NavLogin = () => {
    const { token, setToken } = useAuthStore(state => ({
        token: state.token,
        setToken: state.setToken,
    }));

    useEffect(() => {
        // Retrieve the token from cookies and set it in Zustand state
        const tokenFromCookie = Cookies.get('authToken');
        if (tokenFromCookie) {
            setToken(tokenFromCookie);
        }
    }, [setToken]);

    // Render UI based on the token from Zustand state
    return (
        <div>
            {!token ? (
                <Link href="/login" className="text-sm sm:text-lg font-semibold leading-6 text-gray-900">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
            ) : (
                <button
                    className="flex text-sm rounded-full md:me-0 hover:border-gray-500 border-[2px]"
                    type="button"
                >
                    <span className="sr-only">Open user menu</span>
                    <Image
                        className="w-12 h-12 rounded-full"
                        src="https://avatar.iran.liara.run/public/boy"
                        alt="user photo"
                        width={12}
                        height={12}
                    />
                </button>
            )}
        </div>
    );
};

export default NavLogin;




{/* <Image
className="w-12 h-12 rounded-full"
src="https://avatar.iran.liara.run/public/boy"
alt="user photo"
width={12}
height={12}
/> */}