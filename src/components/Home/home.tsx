"use client";

import Footer from "./footer/page";
import Sample from "./samplelist";

export default function Home(){
    return(
        <>
          <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-700 text-white">
           
      <div className="max-w-7xl mx-auto px-4 p-4">
        {/* Heading */}
        {/* Phone Mockup Image */}
        <div className="relative ">
          <img
            src="/phone-mockup.png"
            alt="App Screenshot"
            className="w-[200px]  md:w-[300px] lg:w-[400px] hidden md:block rounded-lg absolute top-0 right-0"           
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
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="/auth" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-800 transition">
            Start Now
          </a>
          <a href="/about" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-800 transition">
            About Us
          </a>
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
            <div className="bg-blue-800 rounded-full p-4 mb-4 hover:bg-white">
              <img src="/portfolio-icon1.png" alt="Portfolio Diversification" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Portfolio Diversification</h3>
            <p className="text-gray-600">Think beyond the traditional market-linked instruments.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center  text-center">
            <div className="bg-blue-800 rounded-full p-4 mb-4  hover:bg-white">
              <img src="/rupee-icon.jpg" alt="Minimum Lending Amount" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Minimum Lending Amount</h3>
            <p className="text-gray-600">Start your lumpsum lending journey with ₹25,000</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-800 rounded-full p-4 mb-4 hover:bg-white ">
              <img src="/interest-icon.png" alt="Attractive Simple Interest" className="w-12 h-12 " />
            </div>
            <h3 className="text-xl font-semibold mb-2">Attractive Simple Interest</h3>
            <p className="text-gray-600">Grow your wealth by earning interest from loans.</p>
          </div>
        </div>
        </div>
        </div>

        {/* Sample List */}
        <Sample/>

        {/* {P-2-P Lending } */}
        {/* <Peer/> */}

        {/* Footer */}
        <Footer/>
        </>
      )
}