

interface HomedropProps{
  shouldAnimate:boolean
}
export default function HomeDrop({ shouldAnimate }:HomedropProps) {
  const menuItems = [
    { name: "Dashboard", icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" },
    { name: "Active Loans", icon: "M12 8v5m0 0v5m0-5h5m-5 0H7m5-10v1m0 0v1m0-1h1m0-1h-1m5 13h3a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h3m5-7a2 2 0 100-4 2 2 0 000 4z" },
    { name: "My Loans", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Portfolio", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { name: "Setting", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
  ];

  return (
    <div className="w-full">
      {/* Menu Items */}
      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <a
            key={item.name}
            href={item.name.toLowerCase()}
            className={`block px-4 py-3 rounded-lg transition-all duration-500 ease-out ${shouldAnimate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center text-white hover:text-blue-200">
              <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-xl font-medium">{item.name}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Login Button */}
      <a
        href="login"
        className={`block mt-8 py-3 px-6 bg-white text-blue-900 font-bold rounded-full text-center transition-all duration-500 ease-out ${shouldAnimate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        style={{ transitionDelay: `${menuItems.length * 100}ms` }}
      >
        Login / Register
      </a>
    </div>
  );
}