"use Client";

import Router from "next/router";
import { useState } from "react";
import OtpInput from "./OtpInput";
import Link from "next/link";
export default function Signup() {
  const [showOtp, setShowOtp] = useState(false);

  const [mobileNo, setmobileNo] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
     const [error, setError] = useState("");


     const validateMobile = () => {
    if (!mobileNo.trim()) {
      setError("Mobile number is required");
      return false;
    }
    if (!/^\d{10}$/.test(mobileNo)) {
      setError("Mobile number must be 10 digits");
      return false;
    }
    setError("");
    return true;
  };

   const handleChange = (e: any) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setmobileNo(value);
    
  };

  const handleSendOtp =(e:any)=>{
     e.preventDefault();

      if (!validateMobile()) return;



    setIsSubmitting(true);
    //api 

    setShowOtp(true);
    setIsSubmitting(false);

  }

  const handleOtpSubmit = async (otp: string) => {

    Router.push("");
  };

  const handleResendOtp = async () => {};
  return (
    <>
    
    <form onSubmit={handleSendOtp} className="space-y-4">
      
        <div className="min-h-screen flex flex-col md:flex-row bg-white">
           
          {/* Left section */}
          <div className="md:w-1/2 bg-gradient-to-r from-indigo-900 to-blue-700 p-10 flex flex-col justify-between">
            <div>
              <Link href="/home" className="text-xl font-bold text-gray-800">
                <img src="bigwin-logo.jpg" alt="" />
              </Link>
              <h1 className="text-2xl font-semibold text-white mb-4 mt-6">
                Welcome to BIGWIN
              </h1>
              <p className="text-sm text-gray-50 mb-4">
                P2P lending offers quick access to loans and investment options.
                BIGWIN is a top player in India’s P2P lending, linking
                lenders and borrowers efficiently. Borrowers find vital
                financial aid through our platform. Lenders diversify portfolios
                and benefit from lending to trustworthy borrowers.
              </p>
              <p className="text-sm text-teal-50 font-medium">
                Join BIGWIN today to discover the convenience and potential
                rewards of peer-to-peer lending firsthand.
              </p>
            </div>
            <div className="flex items-center justify-center border border-black w-fit rounded-full p-2">
          <img src="/approved.svg" alt="NBFC P-2-P" /><span className="text-black">RBI Certified NBFC P-2-P</span>
        </div>
            {/* <div className="mt-8">
              <img src="/nbfc.png" alt="NBFC-P2P Registered" className="h-20" />
            </div> */}
          </div>

          {/* Right section */}
           {!showOtp ? (
          <div className="md:w-1/2 flex flex-col justify-center items-center px-8 py-16">
            <div className="max-w-md w-full">
              <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                Create account to get started
              </h2>
              <label
                htmlFor="phone"
                className="text-sm text-teal-700 font-medium mb-2 block"
              >
                Enter your mobile number
              </label>
              <div className="relative mb-4">
                <input
                  id="phone"
                  value={mobileNo}
                  type="tel"
                  onChange={handleChange}
                   maxLength={10}
                   required
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 pl-14 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span className="absolute left-4 top-3.5 text-gray-500">
                  +91
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                By creating an account or logging in, you agree to{" "}
                <a href="/termsAndCondition" className="text-blue-500 underline">
                  Terms and conditions
                </a>{" "}
                and{" "}
                <a href="/policy" className="text-blue-500 underline">
                  Privacy policy
                </a>
              </p>
              <button
                 disabled={isSubmitting}
                className="w-full py-3 bg-blue-500  rounded-md font-semibold hover:shadow-md hover:bg-blue-800"
              >
                Continue →
              </button>
              <p className="text-sm text-center mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-green-600 font-medium">
                  Login Now
                </a>
              </p>
            </div>
          </div>):(
             <OtpInput
          onOtpSubmit={handleOtpSubmit}
          resendOtp={handleResendOtp}
          phoneNumber={mobileNo}
        />
          )}
        </div>
    
       
      
    </form>
    </>
  );
}