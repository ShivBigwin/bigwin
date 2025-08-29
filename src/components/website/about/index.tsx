"use client";

import Marquee from "react-fast-marquee";
import Footer from "../Home/footer/page";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-teal-50 items-center justify-center animate-pulse-1s-once">
        <div className=" relative overflow-hidden w-full">
          <h1 className="text-3xl md:text-4xl  text-center bg-white text-black drop-shadow-sm p-6 ">
            Driven by innovation
          </h1>
        </div>
    
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-center  gap-4 p-6 mb-4 mt-10">
          <div className="group relative overflow-hidden rounded-lg  hover:shadow-xl transition-shadow duration-300">
            <img
              src="aboutUs.jpg"
              alt=""
              className="border border-blue-300 rounded-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform group-hover:scale-110"
            />
          </div>
          <div className="">
            <h1 className=" text-black text-center text-3xl ">WHO ARE WE</h1>
            <p className="text-center text-gray-600 text-md p-8">
              Bigwin Infotech connects creditworthy borrowers with lenders
              looking for structured alternative financing opportunities. While
              many Indians remain underserved by traditional credit
              institutions, lenders are actively seeking to diversify their
              portfolios through alternative investments that offer compelling
              returns.
            </p>
            <p className="text-center text-gray-600 text-md p-8">
              At Bigwin Infotech, we unite lenders and borrowers to build an
              ecosystem that empowers individuals to reach their financial
              goals. As a market leader, we address critical gaps in the lending
              space and have emerged as the fastest-growing Peer-to-Peer lending
              platform in the country. Backed by a global community of lenders
              and driven by a passionate, solution-focused team, our mission is
              to become the most trusted platform for both borrowers and lenders
              alike.
            </p>
          </div>
        </div>
        {/* {Our vision and Our mission } */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center  gap-4 p-6 mb-4 mt-32">
            <div className=" flex flex-col items-center text-center h-fit p-4">
              <h1 className="text-3xl text-center text-black py-4">
                Our Vision
              </h1>
              <p className="text-gray-600 p-8 relative">
                Our vision is to create a financially inclusive world where
                access to credit is seamless, transparent, and fair. We aim to
                redefine lending by empowering individuals to support one
                another, building a trusted ecosystem that drives growth,
                opportunity, and financial well-being for all.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="vision.jpg"
                alt=""
                className="border border-blue-300 rounded-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 text-center  gap-4 p-6  ">
            <div className="group relative overflow-hidden rounded-lg  hover:shadow-xl transition-shadow duration-300">
              <img
                src="our-mission.jpg"
                alt=""
                className="border border-blue-300 rounded-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <div className=" flex flex-col items-center justify-center text-center h-fit p-4 mt-10">
              <h1 className="text-3xl text-center text-black py-4">
                Our Mission
              </h1>
              <p className="text-gray-600 p-8 relative">
                Our mission is to simplify borrowing and investing by directly
                connecting creditworthy borrowers with individual lenders.
                Through technology, transparency, and trust, we strive to offer
                a secure, efficient, and rewarding lending experience that
                empowers financial growth for both sides.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer1 */}
      <div>
        <Footer />
      </div>
    </>
  );
}
