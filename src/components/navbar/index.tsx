"use client";

import DarkModeToggle from "@/common/Button/darkMode";
import Hamburger from "@/common/Button/hamburger";
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
            <div className="hidden md:flex space-x-10 items-center mr-10 font-semibold">
              <Link href="/home" className="text-gray-700 hover:underline">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:underline">
                About
              </Link>
              {/* <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                Services
              </Link> */}
              <a href="/lender" className=" text-gray-700 hover:underline">
                Lender
              </a>
              <a href="/borrower" className="text-gray-700 hover:underline">
                Borrowers
              </a>
              <a href="/resources" className="text-gray-700 hover:underline">
                Resources
              </a>
              <a
                href="/login"
                className="bg-blue-950 hover:bg-darkBlue text-white font-semibold py-2 px-4 rounded-md shadow-md"
              >
                Login
              </a>
            </div>

            <Hamburger />
          </div>
        </div>
      </nav>
      {/* Render the page content below navbar */}
      <main>{children}</main>
    </>
  );
}
