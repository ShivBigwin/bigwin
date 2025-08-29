import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FiHome, 
  FiUser, 
  FiFileText, 
  FiDollarSign, 
  FiSettings, 
  FiBell, 
  FiLogOut, 
  FiMenu,
  FiX
} from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

const UserDashboardLayout = ({ children, activeTab }:any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Your loan application has been approved",
      time: "2 hours ago",
      read: false,
    },
    { id: 2, text: "New message from lender", time: "1 day ago", read: true },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const markAsRead = (id:any) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="flex  w-full bg-white relative">
      {/* Hamburger Button for Mobile */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-3 left-3 z-50 rounded-md bg-white text-blue-900 shadow-md"
        >
          {isSidebarOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      )}

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0  bg-blue-900  "
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative h-screen w-64 bg-blue-900 text-white p-4 transition-transform duration-300 ease-in-out z-40 ${
          isMobile
            ? isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : ""
        }`}
      >
        <div className="flex items-center mt-2 mb-8 p-2">
          <div className="w-full h-fit rounded-full bg-blue-700 flex items-center justify-center mr-3">
            <span className="text-xl font-bold">U</span>
          </div>
          <div>
            <h2 className="font-bold">BIGWIN INFOTECH</h2>
            <p className="text-xs text-blue-200">INNOVATE|TRANSFORM|GROW</p>
          </div>
        </div>

        <nav>
          <Link
            href="/dash"
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${
              activeTab === "dashboard" ? "bg-blue-800" : "hover:bg-blue-800"
            }`}
            onClick={() => isMobile && setIsSidebarOpen(false)}
          >
            <FiHome className="mr-3" />
            Dashboard
          </Link>

          <Link
            href="/myprofile"
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${
              activeTab === "profile" ? "bg-blue-800" : "hover:bg-blue-800"
            }`}
            onClick={() => isMobile && setIsSidebarOpen(false)}
          >
            <FiUser className="mr-3" />
            My Profile
          </Link>

          <Link
            href="/myloan"
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${
              activeTab === "myloan" ? "bg-blue-800" : "hover:bg-blue-800"
            }`}
            onClick={() => isMobile && setIsSidebarOpen(false)}
          >
            <FiDollarSign className="mr-3" />
            My Loans
          </Link>

          <Link
            href="/liveloan"
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${
              activeTab === "liveloan" ? "bg-blue-800" : "hover:bg-blue-800"
            }`}
            onClick={() => isMobile && setIsSidebarOpen(false)}
          >
            <FaRupeeSign className="mr-3" />
            Live Loans
          </Link>
            
          <Link
            href="/documents"
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${
              activeTab === "documents" ? "bg-blue-800" : "hover:bg-blue-800"
            }`}
            onClick={() => isMobile && setIsSidebarOpen(false)}
          >
            <FiFileText className="mr-3" />
            Documents
          </Link>

          <Link
            href="/settings"
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${
              activeTab === "settings" ? "bg-blue-800" : "hover:bg-blue-800"
            }`}
            onClick={() => isMobile && setIsSidebarOpen(false)}
          >
            <FiSettings className="mr-3" />
            Settings
          </Link>

          <button
            onClick={() => {
              const confirmLogout = window.confirm(
                "Are you sure you want to logout?"
              );
              if (confirmLogout) {
                window.location.href = "/login";
              }
            }}
            className="flex items-center w-full p-3 rounded-lg text-red-300 hover:bg-blue-800 mt-8"
          >
            <FiLogOut className="mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content - Removed the ml-64 class that was shifting content */}
      <div className="flex-1 p-8 transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {activeTab === "dashboard" && "Welcome back!"}
            {activeTab === "profile" && "My Profile"}
            {activeTab === "myloan" && "My Loans"}
            {activeTab === "liveloan" && "Live Loans"}
            {activeTab === "documents" && "Documents"}
            {activeTab === "settings" && "Settings"}
          </h1>
          <div className="flex items-center">
            <button className="relative mr-4">
              <FiBell className="text-2xl text-gray-600" />
              {notifications.some((n) => !n.read) && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            <Link
              href="/myprofile"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white"
            >
              <span className="font-bold">U</span>
            </Link>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default UserDashboardLayout;