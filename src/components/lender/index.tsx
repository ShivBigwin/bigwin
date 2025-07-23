"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
export default function Lender() {
  return (
    <>
      <div className="">
        <div className="flex rounded-lg items-center justify-center mb-8 bg-gradient-to-br from-blue-950 to-darkBlue  text-4xl font-semibold text-white mt-8 p-2">
          <h1 className="">Lender</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center">
          <div className=" group  overflow-hidden rounded-md p-8 transition-shadow duration-300">
            <img
              src="Lender.jpg"
              alt=""
              className=" border border-blue-300 rounded-lg  transition-all duration-500 ease-in-out transform group-hover:scale-110"
            />
          </div>
          <div className="items-center  p-4  ">
            <h1 className="text-center text-xl font-semibold">
              Lend Smarter, Earn More
            </h1>

            <p className="mt-10 p-4 text-gray-600">
              We lets you grow your wealth while helping others achieve their
              financial goals. By lending directly to creditworthy borrowers,
              you earn attractive interest rates—often better than traditional
              banks. Diversify your portfolio, enjoy passive income, and take
              control of your investments—all with a secure, transparent
              platform.{" "}
            </p>

            <div className=" items-center ">
              <div className="text-center ">
                <p className="font-semibold text-gray-700 ">
                  "Start lending today and turn your capital into consistent
                  returns!"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="  ">
          <h1 className=" rounded-lg bg-gradient-to-br from-blue-950 to-darkBlue p-4 ml-4 text-2xl text-white font-semibold">
            Step By Step Process :
          </h1>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center p-4">
          <div className="grid grid-cols-1 md:grid-cols-8 text-sm  p-10 gap-6">
            <div className="">
              <div className=" items-center justify-center text-center hover:shadow-2xl  bg-blue-300 text-black h-32 w-32 rounded-lg border border-black">
                <h1 className="text-xl mt-5 font-semibold">
                  👤 <br />
                  <span className="text-sm"> Registration</span>
                </h1>
              </div>
              <div className="ml-8 mt-5 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black">
                1
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-xl  font-semibold">
                  <img
                    src="profileapproval.png"
                    alt=""
                    className="w-8 h-8 ml-8"
                  />
                  <span className="text-sm"> Lender Profile Approval</span>
                </h1>
              </div>
              <div className=" text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                2
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-xl top-5 font-semibold">
                  🧾 <br />
                  <span className="text-sm"> View Loan Listing</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                3
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-xl top-5 font-semibold">
                  💵 <br />
                  <span className="text-sm"> Fund Loans</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                4
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-xl top-5 font-semibold">
                  ✍️ <br />
                  <span className="text-sm"> Sign Agreement With Borrower</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                5
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-xl top-5 font-semibold">
                  <img src="disbursment.png" alt="" className="w-8 h-8 ml-8" />
                  <span className="text-sm"> Disbursement</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                6
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-xl top-5 font-semibold">
                  📈 <br />
                  <span className="text-sm"> EMI Profit Realization</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                7
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-xl top-5 font-semibold">
                  <img src="re-lending.png" alt="" className="w-8 h-8 ml-8" />
                  <span className="text-sm">
                    {" "}
                    Further <br /> Re-lending
                  </span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                8
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center mt-10">
          <div className="bg-gradient-to-br from-blue-950 to-darkBlue rounded-lg w-fit p-4  mb-10 hover:shadow-2xl ">
            <a
              href="login"
              className="text-sm font-semibold text-white ml-10 mr-10 p-2"
            >
              {" "}
              START LENDING{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
