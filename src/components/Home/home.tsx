"use client";

import Footer from "./footer/page";
import Sample from "./samplelist";
import JoinUs from "./joinUs";
import Model from "./model";
import Procedure from "./procedure";
import Disclaimer from "./disclaimer";

import SpecialFeatures from "./specialFeatures";
import GoToTopButton from "@/common/Button/goToTop";

export default function Home(){
    return(
        <>
          <div className="h-fit bg-gradient-to-r from-blue-950 to-darkBlue text-white">
           
      <div className="max-w-7xl mx-auto  p-6">
        {/* Heading */}
        {/* Phone Mockup Image */}
        <div className="   group relative  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300  ">
          <img
            src="/phone-mockup.png"
            alt="App Screenshot"
            className="w-[150px]  md:w-[200px] lg:w-[300px] hidden md:block rounded-lg absolute top-0 right-0 transition-all duration-500 ease-in-out transform group-hover:scale-110"           
          />
        </div>


        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Experience smart investing <br/>by lending to reliable, <br />  creditworthy borrowers through <br/>peer-to-peer lending in India.<br />          
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl ">
          With a historical <span className="font-semibold">XIRR 11.28% p.a. <span className="font-semibold">Bigwin Infotech</span> offers lenders a rewarding opportunity.{' '}
          </span> Don’t miss the opportunity. Diversify your
          Join the <span className="font-semibold"> India's largest peer to peer lending platform</span>{' '}
          and start earning consistent returns daily or monthly from borrowers repayments.
        </p>        

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 px-20 py-10 items-center justify-center">
          <a href="/login" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-800 transition hover:shadow-xl">
            Start Now
          </a>
          <a href="/about" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-800 transition">
            About Us
          </a>
        </div>
        <div className=" fixed bottom-2 left-2 overflow-auto  ">
          <div className="flex  items-center justify-center border border-black bg-darkBlue w-fit rounded-full p-2">
          <img src="/approved.svg" alt="NBFC P-2-P" /><span className="text-white">RBI Certified NBFC P-2-P</span>
        </div>
        </div>
      </div>
    </div> 
     
    <div className=" py-16 bg-gray-50">
      <div className=" max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold mb-12">
          Why join the largest P2P lending platform in India?
        </h2>

        {/* Features Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col place-items-center y-2 text-center">
            <div className=" bg-darkBlue rounded-full p-4 mb-4 hover:bg-white">
              <img src="/portfolio.png" alt="Portfolio Diversification" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Portfolio Diversification</h3>
            <p className="text-gray-600">Think beyond the traditional market-linked instruments.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center  text-center">
            <div className="bg-darkBlue rounded-full p-4 mb-4  hover:bg-white">
              <img src="/rupee.png" alt="Minimum Lending Amount" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Minimum Lending Amount</h3>
            <p className="text-gray-600">Start your lumpsum lending journey with ₹25,000</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-darkBlue rounded-full p-4 mb-4 hover:bg-white ">
              <img src="/interest-rate.png" alt="Attractive Simple Interest" className="w-12 h-12 " />
            </div>
            <h3 className="text-xl font-semibold mb-2">Attractive Simple Interest</h3>
            <p className="text-gray-600">Grow your wealth by earning interest from loans.</p>
          </div>
        </div>
        <div className="p-8"><JoinUs/></div>
        
        </div>
        </div>

        {/* Sample List */}
        <Sample/>

        <div><Model/></div>
          {/* Procedure */}
        <div><Procedure/></div>

        {/* Special Features */}
        <div><SpecialFeatures/></div>

        {/* Footer */}
        <div className="mt-6"><Footer/></div>
        {/* Go To Top */}
        <div>
          <GoToTopButton/>
        </div>
        
        <div><Disclaimer/></div>
        </>
      )
}