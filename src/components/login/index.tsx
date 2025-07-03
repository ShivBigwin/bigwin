"use Client";

import { useRouter } from "next/navigation";
import Navbar from "../navbar";
import React from "react";
import { link } from "fs";
import Link from "next/link";

export default function Login() {
   
const [isSubmitting, setIsSubmitting] = React.useState(false);

  return (
    <>
    
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
     
      {/* Left section */}
      <div className="md:w-1/2 bg-gradient-to-r from-indigo-900 to-blue-700 p-10 flex flex-col justify-between">
        <div>
          
          <h1 className="text-2xl font-semibold text-white mb-4">
            Welcome to BIGWIN
          </h1>
          <p className="text-sm text-gray-50 mb-4">
            P2P lending offers quick access to loans and investment options.
            BIGWIN is a top player in India’s P2P lending, linking lenders
            and borrowers efficiently. Borrowers find vital financial aid
            through our platform. Lenders diversify portfolios and benefit from
            lending to trustworthy borrowers.
          </p>
          <p className="text-sm text-teal-50 font-medium">
            Join BIGWIN today to discover the convenience and potential
            rewards of peer-to-peer lending firsthand.
          </p>
        </div>
        <div className="mt-8">
          <img src="/nbfc.png" alt="NBFC-P2P Registered" className="h-20" />
        </div>
      </div>

      {/* Right section */}
      <div className="md:w-1/2 flex flex-col justify-center items-center px-8 py-16">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Welcome back!
          </h2>
          <p className="text-sm text-teal-700 font-medium mb-6">
            Please enter your mobile number or email to log in
          </p>

          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Enter Email/Mobile number"
              maxLength={10}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <p className="text-xs te xt-gray-500 mb-4">
            By creating an account or logging in, you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Terms and conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy policy
            </a>
            .
          </p>

          <button
            disabled
            className="w-full py-3 bg-gray-200 text-gray-600 rounded-md font-semibold "
          >
            Continue →
          </button>

          <p className="text-sm text-center mt-4 ">
            Not a member?{" "}
            <a href="/auth" className="text-green-600 font-medium">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
