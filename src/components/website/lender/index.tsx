"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Footer from "../Home/footer/page";
export default function Lender() {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center mb-8 bg-gradient-to-br from-blue-950 to-darkBlue  text-4xl font-semibold text-white mt-8 p-2">
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

      <Footer />
    </>
  );
}

// import Image from "next/image";
// import { ArrowRight, TrendingUp, Shield, Users, Clock, CheckCircle, DollarSign, Repeat } from "lucide-react";

// export default function Lender() {
//   const steps = [
//     { number: 1, icon: "👤", title: "Registration", description: "Create your lender account in minutes" },
//     { number: 2, icon: <Shield className="w-6 h-6" />, title: "Profile Approval", description: "Quick verification process" },
//     { number: 3, icon: <Users className="w-6 h-6" />, title: "View Loan Listings", description: "Browse curated loan opportunities" },
//     { number: 4, icon: <DollarSign className="w-6 h-6" />, title: "Fund Loans", description: "Select and fund loans easily" },
//     { number: 5, icon: <CheckCircle className="w-6 h-6" />, title: "Sign Agreement", description: "Secure digital documentation" },
//     { number: 6, icon: "🚀", title: "Disbursement", description: "Fast fund transfer to borrowers" },
//     { number: 7, icon: <TrendingUp className="w-6 h-6" />, title: "EMI Profit", description: "Regular returns on investment" },
//     { number: 8, icon: <Repeat className="w-6 h-6" />, title: "Re-lending", description: "Reinvest returns for compound growth" }
//   ];

//   const features = [
//     { title: "High Returns", value: "Up to 15%", description: "Annual returns", highlight: true },
//     { title: "Diversified Portfolio", value: "1000+", description: "Loan opportunities" },
//     { title: "Low Risk", value: "A+", description: "Credit rated borrowers" },
//     { title: "Instant", value: "24h", description: "Funds transfer" }
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-20 pb-16">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
//               Lend Smarter,
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
//                 Earn More
//               </span>
//             </h1>
//             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
//               Transform your capital into consistent returns with our secure, transparent lending platform
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="group bg-white text-blue-900 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
//                 Start Lending Now
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
//                 View Returns Calculator
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border ${feature.highlight ? 'border-cyan-400/30' : 'border-white/20'} hover:bg-white/15 transition-all duration-300`}
//               >
//                 <div className="text-2xl md:text-3xl font-bold text-white mb-1">{feature.value}</div>
//                 <div className="text-sm md:text-base text-blue-100 font-medium">{feature.title}</div>
//                 <div className="text-xs text-blue-200/80">{feature.description}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* How It Works */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             <Clock className="w-4 h-4" />
//             Step-by-Step Process
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             Start Earning in <span className="text-blue-600">8 Simple Steps</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our streamlined process ensures you can start earning attractive returns quickly and securely
//           </p>
//         </div>

//         {/* Steps Grid - Responsive Design */}
//         <div className="relative">
//           {/* Desktop Timeline */}
//           <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-indigo-300 transform -translate-x-1/2"></div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className={`relative ${index >= 4 ? 'md:mt-8' : ''} ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-16'}`}
//               >
//                 {/* Step Card */}
//                 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100">
//                   {/* Step Number */}
//                   <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                     {step.number}
//                   </div>

//                   {/* Icon */}
//                   <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <span className="text-2xl">
//                       {typeof step.icon === 'string' ? step.icon : step.icon}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
//                   <p className="text-gray-600 text-sm">{step.description}</p>
//                 </div>

//                 {/* Connector for Mobile/Tablet */}
//                 {index < steps.length - 1 && (
//                   <>
//                     <div className="md:hidden flex justify-center my-4">
//                       <div className="w-0.5 h-6 bg-gradient-to-b from-blue-300 to-indigo-300"></div>
//                     </div>
//                     <div className="hidden md:block lg:hidden">
//                       {index % 2 === 0 ? (
//                         <div className="absolute right-0 top-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
//                       ) : (
//                         <div className="absolute left-0 top-1/2 w-6 h-0.5 bg-gradient-to-l from-blue-300 to-indigo-300"></div>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-300 rounded-full blur-3xl"></div>
//               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
//             </div>

//             <div className="relative z-10">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                 Ready to Start Your Lending Journey?
//               </h3>
//               <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//                 Join thousands of smart investors who are earning attractive returns with our secure platform
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Get Started Free
//                 </button>
//                 <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
//                   Schedule a Demo
//                 </button>
//               </div>
//               <p className="text-blue-200/80 text-sm mt-6">
//                 No hidden fees • 24/7 Support • Bank-level Security
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Trust Badges */}
//       <div className="bg-gray-50 py-12">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Trusted by Smart Investors
//             </h3>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our platform is built with security and transparency at its core
//             </p>
//           </div>

//           {/* Trust Features */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//             <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-6 h-6 text-green-600" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-2">Bank-Level Security</h4>
//               <p className="text-gray-600 text-sm">256-bit encryption and secure transactions</p>
//             </div>

//             <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <TrendingUp className="w-6 h-6 text-blue-600" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-2">Consistent Returns</h4>
//               <p className="text-gray-600 text-sm">Average 12-15% annual returns for lenders</p>
//             </div>

//             <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-6 h-6 text-purple-600" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-2">Diversified Risk</h4>
//               <p className="text-gray-600 text-sm">Spread investments across multiple loans</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }