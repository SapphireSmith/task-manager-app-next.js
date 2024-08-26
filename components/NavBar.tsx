import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {


  return (
    <header className="bg-white sticky top-0">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a className="-m-1.5 p-1.5">
            <span className="sr-only">Task Manager</span>
            <Image
              alt=""
              src="https://img.icons8.com/?size=100&id=n00JZq9gR57A&format=png&color=000000"
              height={40}
              width={40}
              className="h-8 sm:h-10 w-auto"
            />
          </a>
        </div>
        <Link href="/login" className="text-sm sm:text-lg font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      </nav>
    </header>
  )
}

export default NavBar