"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10 py-4">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex-col">
            <Link href="/" className="flex-col">
              <Image src="/assets/images/Logo.png" alt="Logo" width={100} height={40} />
              <h className="text-lg font-bold text-black font-size-42  drop-shadow-lg" >Route Shapers</h>
            </Link>
          </div>

          {/* Main Menu - Hidden on Mobile */}
          <div className="hidden md:flex space-x-8 font-bold ">
            <Link href="/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
            <Link href="/driver" className="text-gray-700 hover:text-gray-900 ">
              Driver
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 ">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 ">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <Link href="/" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link href="/login" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium">
              login
            </Link>
            <Link href="/driver" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium">
              Driver
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default header;