"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Footer from "../Home/footer/page";
export default function Resources() {
  return (
    <>
      <div className=" ">
        <div className="h-fit w-full group relative overflow-hidden rounded-md p-8 transition-shadow duration-300">
          <Image
            src="/resource2.jpg" // Replace with your image path
            alt=" "
            fill
            className="object-cover border  border-blue-300 rounded-lg  transition-all duration-500 ease-in-out transform group-hover:scale-110"
            quality={100}
            priority
          />
          <div className="relative mx-6">
            <Marquee loop={1} speed={90}>
              <p className="mb-10 text-white  ">
                Take control of your financial future with our peer-to-peer
                lending platform—where opportunities meet smart decisions.{" "}
              </p>
            </Marquee>
            <p className="text-white font-semibold text-lg mt-10">
              We stand for more than just lending-we are committed to doing it
              in the right way. <br /> Discover how our poilicies,principles,and
              practicles deliver safe and dependable financial services.
            </p>
          </div>
          {/* <div className="flex bg-gradient-to-br from-blue-950 to-darkBlue mb-8 items-center justify-center text-4xl font-semibold text-white mt-8 p-2">
          <h1>Resources</h1>
        </div> */}
        </div>
        <div>
          <h1 className="text-center text-black text-3xl font-semibold mt-8 ">
            Resources
          </h1>
          <h1 className="text-center text-black text-2xl font-semibold mt-8">
            Ensuring Full Compliance with All Regulations
          </h1>
          <div className="flex items-center justify-center">
            <div className=" grid place-items-center grid-cols-1 md:grid-cols-3  mt-6 gap-4">
              <a
                href="#"
                className="  w-fit text-black border border-darkBlue  relative overflow-hidden px-8 py-2 text-lg font-bold rounded-xl group "
              >
                <span className="relative z-10">
                  Grievance Redressal Policy
                </span>
                <span className="absolute inset-0 h-0 w-full bg-gradient-to-r from-blue-600 to-blue-950 transition-all duration-500 ease-in-out group-hover:h-full -top-full group-hover:top-0"></span>
              </a>
              <a
                href="#"
                className=" w-fit text-black border border-darkBlue  relative overflow-hidden px-8 py-2 text-lg font-bold rounded-xl group "
              >
                <span className="relative z-10">Interest Rate Policy</span>
                <span className="absolute inset-0 h-0 w-full bg-gradient-to-r from-blue-600 to-blue-950 transition-all duration-500 ease-in-out group-hover:h-full -top-full group-hover:top-0"></span>
              </a>
              <a
                href="#"
                className=" w-fit text-black border border-darkBlue  relative overflow-hidden px-8 py-2 text-lg font-bold rounded-xl group "
              >
                <span className="relative z-10">
                  Anti Money Laundering Policy
                </span>
                <span className="absolute inset-0 h-0 w-full bg-gradient-to-r from-blue-600 to-blue-950 transition-all duration-500 ease-in-out group-hover:h-full -top-full group-hover:top-0"></span>
              </a>
            </div>
          </div>
          {/* Content */}
          <div className=" p-12">
            <p className="text-gray-600  ">
              At Bigwin Infotech Private Limited, we uphold the highest
              standards of business ethics, operating with complete transparency
              and integrity in strict compliance with the regulations set forth
              by the Reserve Bank of India (RBI) and other governing
              authorities. This section details our core policies, which are
              designed to ensure:
            </p>
            <p className="font-semibold ">
              • Fair and ethical lending practices <br />
              • Robust customer protection measures <br />
              • Stringent data privacy and security protocols <br />
              • Responsible and compliant financial operations <br />
            </p>
            <p className="text-gray-600  ">
              Our commitment to regulatory adherence and principled conduct
              remains unwavering as we strive to maintain trust and
              accountability in all our dealings.
            </p>
            <br />
            <span className="text-gray-600 ">
              These policies are implemented to:
            </span>
            <p className="font-semibold ">
              • Protect customer interests <br />
              • Encourage responsible borrowing and lending practices <br />•
              Foster an ethical, compliant, and customer-focused financial
              ecosystem
            </p>
            <br />
            <p className="text-gray-600 ">
              We urge our borrowers, partners, and stakeholders to carefully
              review these policies to fully understand our commitments as well
              as their rights and protections.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
