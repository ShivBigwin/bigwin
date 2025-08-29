import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Procedure() {
  const [showLender, setShowLender] = useState(true);
  const [radius, setRadius] = useState(200);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lender steps data
  const lenderSteps = [
    { id: 1, title: "Registration", icon: "registration.png", number: "1" },
    { id: 2, title: "Lender Profile Approval", icon: "profileapproval.png", number: "2" },
    { id: 3, title: "View Loan Listing", icon: "listing1.png", number: "3" },
    { id: 4, title: "Fund Loans", icon: "funding.png", number: "4" },
    { id: 5, title: "Sign Agreement", icon: "sign-agreement1.png", number: "5" },
    { id: 6, title: "Disbursement", icon: "disbursment.png", number: "6" },
    { id: 7, title: "EMI Profit", icon: "graph.png", number: "7" },
    { id: 8, title: "Re-lending", icon: "re-lending.png", number: "8" }
  ];

  // Borrower steps data
  const borrowerSteps = [
    { id: 1, title: "Registration", icon: "profile-evaluation.png", number: "1" },
    { id: 2, title: "Profile Evaluation", icon: "evaluation.png", number: "2" },
    { id: 3, title: "Listing", icon: "listing.png", number: "3" },
    { id: 4, title: "Funding", icon: "fund-loans.png", number: "4" },
    { id: 5, title: "Sign Agreement", icon: "sign-agreement.png", number: "5" },
    { id: 6, title: "Disbursement", icon: "br-disbursement.png", number: "6" },
    { id: 7, title: "EMI Repayment", icon: "emi-repayment.png", number: "7" },
    { id: 8, title: "Loan Closure", icon: "loan-closure.png", number: "8" }
  ];

  const currentSteps = showLender ? lenderSteps : borrowerSteps;

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(120);
      } else if (window.innerWidth < 1024) {
        setRadius(160);
      } else {
        setRadius(200);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const rotateCarousel = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  const nextStep = () => {
    setActiveIndex((prev) => (prev + 1) % currentSteps.length);
  };

  const prevStep = () => {
    setActiveIndex((prev) => (prev - 1 + currentSteps.length) % currentSteps.length);
  };

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentSteps.length]);

  return (
    <div className="h-fit p-8 relative  w-full overflow-hidden">
     <Image
             src="/procedurebg.jpg" // Replace with your image path
             alt=" "
             fill
             className="object-cover"
             quality={100}
             priority
             /> 
      <div className="max-w-7xl mx-auto">
        <h1 className="relative text-3xl text-center text-black font-bold mb-8">
          Steps To Start
        </h1>
        
        <div className="relative flex gap-4 mb-8 items-center justify-center">
          <button
            className={`px-4 py-2 sm:w-fit sm:h-fit rounded-md font-semibold text-lg transition-all duration-300 ${
              showLender
                ? "bg-gradient-to-br from-blue-950 to-darkBlue text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => {
              setShowLender(true);
              setActiveIndex(0);
            }}
          >
            Start as a Lender
          </button>
          <button
            className={`px-6 py-2 rounded-md font-semibold text-lg transition-all duration-300 ${
              !showLender
                ? "bg-gradient-to-br from-blue-950 to-darkBlue text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => {
              setShowLender(false);
              setActiveIndex(0);
            }}
          >
            Start as a Borrower
          </button>
        </div>

        {/* Circular Carousel */}
        <div className="relative h-[500px] w-full" ref={containerRef}>
          {/* Center display */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 sm:w-48 sm:h-48 rounded-full bg-blue-100 flex flex-col items-center justify-center shadow-lg z-10 p-4 border-2 border-blue-300">
            <img 
              src={currentSteps[activeIndex].icon} 
              alt="" 
              className="w-12 h-12 md:w-16 md:h-16 mb-3" 
            />
            <h2 className="text-lg md:text-xl font-bold text-center mb-2">
              {currentSteps[activeIndex].title}
            </h2>
            <div className="w-10 h-10 bg-white text-2xl font-bold text-blue-800 rounded-full border-2 border-blue-300 flex items-center justify-center">
              {currentSteps[activeIndex].number}
            </div>
          </div>

          {/* Rotating items */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            {currentSteps.map((step, index) => {
              const angle = (index * (360 / currentSteps.length) - activeIndex * (360 / currentSteps.length)) * (Math.PI / 180);
              const x = Math.sin(angle) * radius;
              const y = -Math.cos(angle) * radius;
              const scale = index === activeIndex ? 1.2 : 0.9;
              const opacity = Math.abs(index - activeIndex) > 2 ? 0.6 : 1;

              return (
                <div
                  key={step.id}
                  className={`absolute w-20 h-20 md:w-24 md:h-24 rounded-lg bg-blue-300 flex flex-col items-center justify-center shadow-md cursor-pointer transition-all duration-500 border border-blue-500 ${
                    index === activeIndex ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity: opacity
                  }}
                  onClick={() => rotateCarousel(index)}
                >
                  <img src={step.icon} alt="" className="w-6 h-6  md:w-8 mb-1" />
                  <div className="text-xs md:text-sm font-semibold text-center">{step.title}</div>
                </div>
              );
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevStep}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-30 hover:bg-blue-100 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextStep}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-30 hover:bg-blue-100 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

//Type 2 

// import { useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay';

// export default function Procedure() {
//   const [showLender, setShowLender] = useState(true);

//   // Lender steps data
//   const lenderSteps = [
//     {
//       id: 1,
//       title: "Registration",
//       icon: "registration.png",
//       number: "1"
//     },
//     {
//       id: 2,
//       title: "Lender Profile Approval",
//       icon: "profileapproval.png",
//       number: "2"
//     },
//     {
//       id: 3,
//       title: "View Loan Listing",
//       icon: "listing1.png",
//       number: "3"
//     },
//     {
//       id: 4,
//       title: "Fund Loans",
//       icon: "funding.png",
//       number: "4"
//     },
//     {
//       id: 5,
//       title: "Sign Agreement With Borrower",
//       icon: "sign-agreement1.png",
//       number: "5"
//     },
//     {
//       id: 6,
//       title: "Disbursement",
//       icon: "disbursment.png",
//       number: "6"
//     },
//     {
//       id: 7,
//       title: "EMI Profit Realization",
//       icon: "graph.png",
//       number: "7"
//     },
//     {
//       id: 8,
//       title: "Further Re-lending",
//       icon: "re-lending.png",
//       number: "8"
//     }
//   ];

//   // Borrower steps data
//   const borrowerSteps = [
//     {
//       id: 1,
//       title: "Registration",
//       icon: "profile-evaluation.png",
//       number: "1"
//     },
//     {
//       id: 2,
//       title: "Profile Evaluation",
//       icon: "evaluation.png",
//       number: "2"
//     },
//     {
//       id: 3,
//       title: "Listing On Platform",
//       icon: "listing.png",
//       number: "3"
//     },
//     {
//       id: 4,
//       title: "Funding",
//       icon: "fund-loans.png",
//       number: "4"
//     },
//     {
//       id: 5,
//       title: "Sign Agreement With Lender",
//       icon: "sign-agreement.png",
//       number: "5"
//     },
//     {
//       id: 6,
//       title: "Disbursement",
//       icon: "br-disbursement.png",
//       number: "6"
//     },
//     {
//       id: 7,
//       title: "EMI Repayment",
//       icon: "emi-repayment.png",
//       number: "7"
//     },
//     {
//       id: 8,
//       title: "Loan Closure",
//       icon: "loan-closure.png",
//       number: "8"
//     }
//   ];

//   return (
//     <div className="mt-14 bg-blue-50 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl text-center text-black font-bold mb-8">
//           Steps To Start
//         </h1>
        
//         <div className="flex gap-4 mb-8 items-center justify-center">
//           <button
//             className={`px-6 py-2 rounded-md font-semibold text-lg transition-all duration-300 ${
//               showLender
//                 ? "bg-gradient-to-br from-blue-950 to-darkBlue text-white shadow-lg"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setShowLender(true)}
//           >
//             Start as a Lender
//           </button>
//           <button
//             className={`px-6 py-2 rounded-md font-semibold text-lg transition-all duration-300 ${
//               !showLender
//                 ? "bg-gradient-to-br from-blue-950 to-darkBlue text-white shadow-lg"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setShowLender(false)}
//           >
//             Start as a Borrower
//           </button>
//         </div>

//         {/* Lender Carousel */}
//         {showLender && (
//           <div className="px-2">
//             <Swiper
//               modules={[Autoplay]}
//               spaceBetween={20}
//               slidesPerView={2}
//               autoplay={{
//                 delay: 1500,
//                 disableOnInteraction: false,
//               }}
//               loop={true}
//               breakpoints={{
//                 640: {
//                   slidesPerView: 2,
//                 },
//                 768: {
//                   slidesPerView: 3,
//                 },
//                 1024: {
//                   slidesPerView: 4,
//                 },
//               }}
//             >
//               {lenderSteps.map((step) => (
//                 <SwiperSlide key={step.id}>
//                   <div className="flex flex-col items-center mb-10">
//                     <div className="items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-40 w-full p-4 rounded-lg border border-black transition-all duration-300 hover:scale-105">
//                       <img src={step.icon} alt="" className="w-8 h-8 mx-auto mb-3" />
//                       <h1 className="text-sm font-semibold">{step.title}</h1>
//                     </div>
//                     <div className="mt-4 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black flex items-center justify-center">
//                       {step.number}
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         {/* Borrower Carousel */}
//         {!showLender && (
//           <div className="px-2">
//             <Swiper
//               modules={[Autoplay]}
//               spaceBetween={20}
//               slidesPerView={2}
//               autoplay={{
//                 delay: 2500,
//                 disableOnInteraction: false,
//               }}
//               loop={true}
//               breakpoints={{
//                 640: {
//                   slidesPerView: 2,
//                 },
//                 768: {
//                   slidesPerView: 3,
//                 },
//                 1024: {
//                   slidesPerView: 4,
//                 },
//               }}
//             >
//               {borrowerSteps.map((step) => (
//                 <SwiperSlide key={step.id}>
//                   <div className="flex flex-col items-center mb-10">
//                     <div className="items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-40 w-full p-4 rounded-lg border border-black transition-all duration-300 hover:scale-105">
//                       <img src={step.icon} alt="" className="w-8 h-8 mx-auto mb-3" />
//                       <h1 className="text-sm font-semibold">{step.title}</h1>
//                     </div>
//                     <div className="mt-4 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black flex items-center justify-center">
//                       {step.number}
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// Type 3

// import { useState } from "react";

// export default function Procedure() {
//   const [showLender, setShowLender] = useState(true);
//   return (
//     <>
//       <div className="mt-14 items-center justify-center bg-blue-50">
//         <h1 className="text-3xl text-center text-black ">
//           Steps To Start
//         </h1>
//         <div className="flex gap-4 mt-8 items-center justify-center ">
//           <button
//             className=" flex hover:shadow-2xl  w-fit bg-gradient-to-br from-blue-950 to-darkBlue rounded-md"
//             onClick={() => {
//               setShowLender(true);
//             }}
//           >
//             <h1 className="ml-6 mr-6 p-2 text-white font-semibold text-lg">
//               Start as a Lender
//             </h1>
//           </button>
//           <button className="flex hover:shadow-2xl  w-fit bg-gradient-to-br from-blue-950 to-darkBlue  rounded-md"
//            onClick={() => {
//               setShowLender(false);
//             }}>
//             <h1 className="ml-6 mr-6 p-2 text-white font-semibold text-lg">
//               Start as a Borrow
//             </h1>
//           </button>
//         </div>


//             {/* Lender */}
//         {showLender && (
//           <div className="text-sm flex items-center justify-center p-8 gap-6">
//             <div >
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 rounded-lg border border-black">            
//               <h1 className="text-sm mt-5 font-semibold mb-3">
//                 <img src="registration.png" alt="" className="w-8 h-8 ml-12 mb-3"/>
//                 <span className="text-sm "> Registration</span>
//               </h1>
//             </div>
//             <div className="ml-8 mt-5 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black">
//                 1
//               </div>
//             </div>

//              <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm  font-semibold">
//                 <img src="profileapproval.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm"> Lender Profile Approval</span>
//               </h1>
               
//             </div> 
//             <div className=" text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 2
//               </div>  
//              </div>
            
//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                 <img src="listing1.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm" > View Loan Listing</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 3
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                 <img src="funding.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm"> Fund Loans</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 4
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                  <img src="sign-agreement1.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm"> Sign Agreement With Borrower</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 5
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl  bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                  <img src="disbursment.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm"> Disbursement</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 6
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl  bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                 <img src="graph.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm"> EMI Profit Realization</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 7
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                 <img src="re-lending.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm"> Further <br /> Re-lending</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 8
//               </div>
//             </div>
            
//           </div>
//         )}
//             {/* Borrower */}
//         {!showLender && (
//             <div className="text-sm flex items-center justify-center p-8 gap-6 ">
//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 rounded-lg border border-black">            
//               <h1 className="text-sm mt-5 font-semibold">
//                 <img src="profile-evaluation.png" alt="" className="w-8 h-8 ml-12 mb-3"/>
//                 <span className="text-sm"> Registration</span>
//               </h1>
//             </div>
//             <div className="ml-8 mt-5 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black">
//                 1
//               </div>
//             </div>

//              <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 rounded-lg border border-black">            
//               <h1 className="text-sm mt-4 font-semibold">
//                 <img src="evaluation.png" alt="" className="w-8 h-8 ml-12 mb-3"/>
//                 <span className="text-sm"> Profile Evaluation</span>
//               </h1>
               
//             </div> 
//             <div className=" text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 2
//               </div>  
//              </div>
            
//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                <img src="listing.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm" > Listing On Platform</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 3
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                 <img src="fund-loans.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm"> Funding</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 4
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                 <img src="sign-agreement.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm "> Sign Agreement With Lender</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 5
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                 <img src="br-disbursement.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm"> Disbursement</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 6
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                 <img src="emi-repayment.png" alt="" className="w-8 h-8 mb-3 ml-8"/>
//                 <span className="text-sm"> EMI Repayment</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 7
//               </div>
//             </div>

//             <div>
//                 <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
//               <h1 className="text-sm top-5 font-semibold">
//                 <img src="loan-closure.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
//                 <span className="text-sm"> Loan Closure</span>
//               </h1>
               
//             </div>
//             <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
//                 8
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
