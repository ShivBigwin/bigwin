
import HomeDrop from "@/common/Dropdown/homedrop";
import { useEffect, useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimateText, setShouldAnimateText] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay text animation slightly after menu opens
      const timer = setTimeout(() => setShouldAnimateText(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimateText(false);
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none z-50 relative"
        aria-label="Menu"
      >
        <svg
          className={`w-8 h-8 text-rose-950 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-900/95 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div 
            className="bg-blue-900 rounded-lg shadow-xl max-w-md mx-auto p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <HomeDrop shouldAnimate={shouldAnimateText} />
          </div>
        </div>
      </div>
    </>
  );
}
<HomeDrop shouldAnimate={false}/>

// import HomeDrop from "@/common/Dropdown/homedrop";
// import { useState, useEffect } from "react";

// export default function Hamburger() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Prevent scrolling when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
    
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden focus:outline-none z-50 relative"
//         aria-label="Menu"
//       >
//         <svg
//           className="w-8 h-8 text-gray-800 dark:text-white transition-transform duration-300"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//           />
//         </svg>
//       </button>

//       {/* Full-screen Mobile Menu */}
//       <div
//         className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out ${
//           isOpen
//             ? 'opacity-100 pointer-events-auto'
//             : 'opacity-0 pointer-events-none'
//         }`}
//         onClick={() => setIsOpen(false)}
//       >
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
//           <div 
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md mx-auto p-6"
//             onClick={(e) => e.stopPropagation()} // Prevent click-through
//           >
//             <HomeDrop />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }