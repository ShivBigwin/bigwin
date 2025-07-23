// "use client";
// import Sidebar from '@/components/dashboard/sidebar';
// import TopNavbar from '@/components/dashboard/topbar';
// import TransactionCard from '@/components/dashboard/transactionCard';
// import { useState } from 'react';


// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <TopNavbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} /> 


// {/* hiiiii */}
//       <div className="flex">
//         <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block fixed md:static z-20`}>
//           <Sidebar />
//         </div>
        
//         <main className="flex-1 p-8 mt-16 md:mt-0">
//           <div className={`${isSidebarOpen ? 'opacity-50 md:opacity-100' : ''} transition-opacity`}>
//             <TransactionCard />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }