"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import logo from '../../public/nav-logo.png'
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function Navbar(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = () => {
    router.push('/signIn');
  };
  const goToTeams = () => {
    router.push('/teams');
  };

  return (
    <>
      <div className="flex bg-black w-full justify-between p-5 sticky top-0 z-10">
        <Link href={"/"} className='mx-6'>
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>
        <div className="hidden md:flex flex-row gap-16 items-center">
          <Link href="/#home" className='text-2xl font-serif'>
              Home
          </Link>
          <Link href={"/#achievements"}>
            <h1 className='text-2xl font-serif'>
              Achievements
            </h1>
          </Link>
          <Link href={"/teams"}>
            <h1 className='text-2xl font-serif'>
              Teams
            </h1>
          </Link>
          <Link href="/events" className='text-2xl font-serif'>
            Events
          </Link>
          <Link href={"/#contact"}>
            <h1 className='text-2xl font-serif'>
              Contact
            </h1>
          </Link>
          <Link href={"/signIn"}
            className="px-6 py-2 bg-white text-black hover:bg-gray-300 rounded-3xl "
          >
            Sign&nbsp;In
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden flex flex-col gap-4 p-5 bg-black`}>
        <p>Home</p>
        <p>Achievements</p>
        <Link href="/teams"><p className='cursor-pointer text-center' >Team</p></Link>
        <button  onClick={() => handleScroll('contact')}>
        Contact
        </button>
        <button
          onClick={handleSignIn}
          className="px-4 py-2 bg-[#0F2819] text-gtext rounded hover:bg-[#000F0A]"
        >
          Sign In
        </button>
      </div>
    </>
  );
}

export default Navbar;