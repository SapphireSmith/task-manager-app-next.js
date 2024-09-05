import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import NavLogin from './NavLogin';
import Link from 'next/link';

const NavBar = () => {

  return (
    <header className="bg-white sticky top-0">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={'/'} className="-m-1.5 p-1.5">
            <span className="sr-only">Task Manager</span>
            <Image
              alt=""
              src="https://img.icons8.com/?size=100&id=n00JZq9gR57A&format=png&color=000000"
              height={40}
              width={40}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>
        <NavLogin />
      </nav>
    </header>
  )
}

export default NavBar