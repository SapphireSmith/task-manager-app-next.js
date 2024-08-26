"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useAuthStore } from "@/store/store";


const NavLogin = () => {

    const token = useAuthStore((state) => state.token);
    const setToken = useAuthStore((state) => state.setToken);
    const clearToken = useAuthStore((state) => state.clearToken);

    return (
        <div>
            <Link href="/login" className="text-sm sm:text-lg font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
            </Link>
            {/* <div>{token ? `Logged in with token: ${token}` : "Not logged in"}</div>
            <button onClick={() => setToken("new-token")}>Set Token</button>
            <button onClick={clearToken}>Logout</button> */}
        </div>
    )
}

export default NavLogin