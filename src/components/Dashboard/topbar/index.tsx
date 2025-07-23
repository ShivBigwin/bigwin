// // components/TopNavbar.tsx
// "use client";
// import Link from 'next/link';
// import { FiMenu, FiX, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
// import { useState, useRef, useEffect } from 'react';

// interface TopNavbarProps {
//   toggleSidebar: () => void;
//   isSidebarOpen: boolean;
// }

// export default function TopNavbar({ toggleSidebar, isSidebarOpen }: TopNavbarProps) {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsProfileOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
//       <div className="flex items-center">
//         <button 
//           onClick={toggleSidebar}
//           className="mr-4 text-gray-500 focus:outline-none md:hidden"
//         >
//           {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//         <h1 className="text-xl font-bold text-gray-800  text-center">BIGWIN
//         <p className="text-sm ">Innovate|Transform|Grow</p>
//         </h1>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="relative" ref={dropdownRef}>
//           <button 
//             onClick={() => setIsProfileOpen(!isProfileOpen)}
//             className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none transition-colors"
//           >
//             <FiUser size={20} />
//           </button>
          
//           {isProfileOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//               <Link href="/profile" className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
//                 <FiUser className="mr-2" /> Profile
//               </Link>
//               <Link href="/settings" className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
//                 <FiSettings className="mr-2" /> Settings
//               </Link>
//               <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
//                 <FiLogOut className="mr-2" /> Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


// // // components/TopNavbar.tsx
// // "use client";
// // import Link from 'next/link';
// // import { FiMenu, FiX } from 'react-icons/fi';

// // interface TopNavbarProps {
// //   toggleSidebar: () => void;
// //   isSidebarOpen: boolean;
// // }

// // export default function TopNavbar({ toggleSidebar, isSidebarOpen }: TopNavbarProps) {
// //   return (
// //     <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
// //       <div className="flex items-center">
// //         <button 
// //           onClick={toggleSidebar}
// //           className="mr-4 text-gray-500 focus:outline-none md:hidden"
// //         >
// //           {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// //         </button>
// //         <h1 className="text-xl font-bold text-gray-800">BIGWIN</h1>
// //       </div>
// //       <div>
// //         <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
// //           Logout
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // }