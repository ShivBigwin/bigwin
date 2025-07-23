export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-blue-950  z-50 space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-2 border-4 border-blue-300 rounded-full animate-spin border-t-transparent animation-delay-200"></div>
      </div>
      {/* <img src="bigwin-logo.jpg" alt="" /> */}
      <div className="text-blue-600 font-semibold text-lg">Loading...</div>
    </div>
  );
}



// export default function Loader() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
//       <div className="relative w-16 h-16">
//         <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
//         <div className="absolute inset-2 border-4 border-blue-300 rounded-full animate-spin border-t-transparent animation-delay-200"></div>
//       </div>
//     </div>
//   );
// }