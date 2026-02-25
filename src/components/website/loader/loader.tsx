"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 z-50">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + i * 2}s infinite ease-in-out`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main loader container */}
      <div className="relative flex flex-col items-center space-y-8">
        {/* Animated logo/circle container */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-[3px] animate-pulse">
            <div className="w-full h-full rounded-full bg-blue-950 flex items-center justify-center">
              {/* Inner rotating spinner */}
              <div className="relative w-16 h-16">
                {/* Multiple spinning rings */}
                <div className="absolute inset-0 border-4 border-blue-400/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></div>
                <div className="absolute inset-2 border-4 border-blue-300 rounded-full animate-spin-slow border-b-transparent"></div>
                <div className="absolute inset-4 border-2 border-blue-200 rounded-full animate-pulse"></div>

                {/* Center dot */}
                <div className="absolute inset-[1.85rem] bg-gradient-to-br from-blue-300 to-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
              </div>
            </div>
          </div>

          {/* Orbiting rings */}
          <div className="absolute -inset-4">
            <div className="w-full h-full rounded-full border border-blue-400/20 animate-spin-slower"></div>
          </div>
          <div className="absolute -inset-6">
            <div className="w-full h-full rounded-full border border-blue-400/10 animate-spin-slower animation-delay-1000"></div>
          </div>
        </div>

        {/* Loading text with modern typography */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-light tracking-[0.3em] text-blue-200/90">
            LOADING
          </h2>

          {/* Animated dots */}
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '0.8s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 relative">
          <div className="h-1 bg-blue-800/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full transition-all duration-200 relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
            </div>
          </div>

          {/* Percentage with glow */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2">
            <span className="text-xs font-mono text-blue-300/80">{progress}%</span>
          </div>
        </div>

        {/* Brand name with fade-in */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity">
          <p className="text-sm text-blue-300/40 tracking-widest">BIGWIN</p>
        </div>
      </div>

      {/* Custom animations style */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin 6s linear infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: -1s;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// "use client";
// export default function Loader() {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-blue-950  z-50 space-y-4">
//       <div className="relative w-16 h-16">
//         <div className="absolute inset-0 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
//         <div className="absolute inset-2 border-4 border-blue-300 rounded-full animate-spin border-t-transparent animation-delay-200"></div>
//       </div>
//       {/* <img src="bigwin-logo.jpg" alt="" /> */}
//       <div className="text-blue-600 font-semibold text-lg">Loading...</div>
//     </div>
//   );
// }



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