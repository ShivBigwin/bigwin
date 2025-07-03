"use client";

import Hamburger from "@/common/Button/hamburger";
import HomeDrop from "@/common/Dropdown/homedrop";
import Link from "next/link";
import React from "react";

type NavbarProps = {
  children: React.ReactNode;
};

export default function Navbar({ children }: NavbarProps) {
    
  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 rounded-b-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link href="/home" className="text-xl font-bold text-gray-800">
                <img src="bigwin-logo.jpg" alt="" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-5 items-center">
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/Lenders" className="text-gray-700 hover:text-blue-600">
                Lenders
              </Link>
              <Link href="/Borrowers" className="text-gray-700 hover:text-blue-600">
                Borrowers
              </Link>
              <a
                href="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md"
              >
                SignUp
              </a>
              <a
                href="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md"
              >
                Login
              </a>
            </div>

            <Hamburger/>

          </div>
        </div>
      </nav>
      {/* Render the page content below navbar */}
      <main>{children}</main>
    </>
  );
}
