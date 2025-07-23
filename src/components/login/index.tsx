"use Client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { link } from "fs";
import Link from "next/link";
import OtpInput from "./loginOtpInput";


export default function Login() {
  const [mobileNo, setmobileNo] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();


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

  const handleSendOtp = (e: any) => {
    e.preventDefault();

    if (!validateMobile()) return;

    setIsSubmitting(true);
    //api

    setShowOtp(true);
    setIsSubmitting(false);
  };
  const handleOtpSubmit = async (otp: string) => {
     push("/dashboard");
  };

  const handleResendOtp = async () => {};

  return (
    <>
      <form onSubmit={handleSendOtp} className="space-y-4">
        <div className="h-screen flex flex-col md:flex-row bg-white">
          {/* Left section */}

          <div className="md:w-1/2 bg-gradient-to-r from-blue-950 to-darkBlue p-10 flex flex-col justify-between">
            <div className="items-center justify-center">
              {/* <Link href="/home" className="text-xl font-bold text-gray-800 ">
                <img src="bigwin-logo.jpg" alt="" />
              </Link> */}
              <h1 className="text-2xl font-semibold text-white mb-4 mt-14">
                Welcome to BIGWIN
              </h1>
              <p className="text-sm text-gray-50 mb-4">
                P2P lending offers quick access to loans and investment options.
                BIGWIN is a top player in India’s P2P lending, linking lenders
                and borrowers efficiently. Borrowers find vital financial aid
                through our platform. Lenders diversify portfolios and benefit
                from lending to trustworthy borrowers.
              </p>
              <p className="text-sm text-teal-50 font-medium">
                Join BIGWIN today to discover the convenience and potential
                rewards of peer-to-peer lending firsthand.
              </p>
            </div>

            <div className="flex items-center justify-center border border-black w-fit rounded-full p-2">
              <img src="/approved.svg" alt="NBFC P-2-P" />
              <span>RBI Certified NBFC P-2-P</span>
            </div>
          </div>

          {/* Right section */}
          {!showOtp ? (
            <div className="md:w-1/2 flex flex-col justify-center items-center px-8 py-16">
              <div className="max-w-md w-full">
                <h2 className="text-2xl font-semibold text-blue-950 mb-2">
                  Welcome back!
                </h2>
                <p className="text-sm text-teal-700 font-medium mb-6">
                  Please enter your mobile number or email to log in
                </p>

                <div className="relative mb-4">
                  <input
                    id="phone"
                    value={mobileNo}
                    type="tel"
                    onChange={handleChange}
                    maxLength={10}
                    required
                    placeholder="Enter Email/Mobile number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <p className="text-xs te xt-gray-500 mb-4">
                  By creating an account or logging in, you agree to our{" "}
                  <a
                    href="/termsAndCondition"
                    className="text-blue-950 underline"
                  >
                    Terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="/policy" className="text-blue-950 underline">
                    Privacy policy
                  </a>
                </p>

                <button
                  disabled={isSubmitting}
                  className="w-full py-3 text-white bg-blue-950 rounded-md font-semibold hover:shadow-2xl hover:translate-y-[-2px]  "
                >
                  Continue →
                </button>

                <p className="text-sm text-center mt-4 ">
                  Not a member?{" "}
                  <a href="/onboarding" className="text-green-600 font-medium">
                    Signup
                  </a>
                </p>
              </div>
            </div>
          ) : (
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
