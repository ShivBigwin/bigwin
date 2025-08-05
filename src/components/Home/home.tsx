"use client";

import Footer from "./footer/page";
import Sample from "./samplelist";
import JoinUs from "./joinUs";
import Model from "./model";
import Procedure from "./procedure";
import Disclaimer from "./disclaimer";
import SpecialFeatures from "./specialFeatures";
import GoToTopButton from "@/common/Button/goToTop";

export default function Home() {
  return (
    <>
      <div className="h-fit bg-gradient-to-r from-blue-950 to-darkBlue text-white">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          {/* Phone Mockup Image */}
          <div className="group relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="/phone-mockup.png"
              alt="App Screenshot"
              className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] hidden md:block rounded-lg absolute top-0 right-0 transition-all duration-500 ease-in-out transform group-hover:scale-110"           
            />
          </div>

          {/* Main Heading - Improved for mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight mb-4 sm:mb-6 max-w-2xl">
            Experience smart investing by lending to reliable, creditworthy borrowers through peer-to-peer lending in India.
          </h1>

          {/* Description - Improved spacing and line breaks */}
          <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-8 max-w-2xl">
            With a historical <span className="font-semibold">XIRR 11.28% p.a.</span>{' '}
            <span className="font-semibold">Bigwin Infotech</span> offers lenders a rewarding opportunity.
            Don't miss the opportunity to diversify your portfolio.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-8 max-w-2xl">
            Join <span className="font-semibold">India's largest peer to peer lending platform</span>{' '}
            and start earning consistent returns daily or monthly from borrowers' repayments.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12 px-0 sm:px-20 py-6 sm:py-10 items-center justify-center sm:justify-start">
            <a href="/login" className="border border-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-800 transition hover:shadow-xl text-sm sm:text-base">
              Start Now
            </a>
            <a href="/about" className="border border-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-800 transition text-sm sm:text-base">
              About Us
            </a>
          </div>
          
          {/* Fixed badge */}
          <div className="fixed bottom-2 left-2 overflow-auto z-50">
            <div className="flex items-center justify-center border border-black bg-darkBlue w-fit rounded-full p-1 sm:p-2">
              <img src="/approved.svg" alt="NBFC P-2-P" className="w-6 h-6 sm:w-8 sm:h-8"/>
              <span className="text-white text-xs sm:text-sm">RBI Certified NBFC P-2-P</span>
            </div>
          </div>
        </div>
      </div>
     
      <div className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Features Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8 sm:mb-12 px-2">
            Why join the largest P2P lending platform in India?
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-4 text-center">
              <div className="bg-darkBlue rounded-full p-3 sm:p-4 mb-3 sm:mb-4 hover:bg-white">
                <img src="/portfolio.png" alt="Portfolio Diversification" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Portfolio Diversification</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Think beyond the traditional market-linked instruments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-4 text-center">
              <div className="bg-darkBlue rounded-full p-3 sm:p-4 mb-3 sm:mb-4 hover:bg-white">
                <img src="/rupee.png" alt="Minimum Lending Amount" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Minimum Lending Amount</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Start your lumpsum lending journey with ₹25,000
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-4 text-center">
              <div className="bg-darkBlue rounded-full p-3 sm:p-4 mb-3 sm:mb-4 hover:bg-white">
                <img src="/interest-rate.png" alt="Attractive Simple Interest" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Attractive Simple Interest</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Grow your wealth by earning interest from loans.
              </p>
            </div>
          </div>
          <div className="p-4 sm:p-8"><JoinUs/></div>
        </div>
      </div>

      {/* Rest of your components */}
      <Sample/>
      <Model/>
      <Procedure/>
      <SpecialFeatures/>
      <Footer/>
      <GoToTopButton/>
      <Disclaimer/>
    </>
  )
}