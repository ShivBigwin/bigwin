import Link from 'next/link';
import { useState } from 'react';
import { FaHubspot, FaRupeeSign } from 'react-icons/fa';
import { FiHome, FiUser, FiFileText, FiDollarSign, FiSettings, FiBell, FiLogOut, FiUnderline, FiServer, FiWifi, FiPhone } from 'react-icons/fi';
import LiveLoans from './liveloan';
import MyProfile from './myprofile';
import MyLoans from './myloan';
const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Your loan application has been approved', time: '2 hours ago', read: false },
    { id: 2, text: 'New message from lender', time: '1 day ago', read: true },
    { id: 3, text: 'Payment received for loan #12345', time: '3 days ago', read: true }
  ]);

  const recentTransactions = [
    { id: 1, type: 'Deposit', amount: '₹25,000', date: '25 Jul 2025', status: 'Completed' },
    { id: 2, type: 'Withdrawal', amount: '₹10,000', date: '23 Jul 2025', status: 'Completed' },
    { id: 3, type: 'Loan Payment', amount: '₹5,200', date: '20 Jul 2025', status: 'Pending' }
  ];

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? {...notification, read: true} : notification
    ));
  };
  const loans = [
    {
      id: 1,
      name: "MADEM PRAVEEN KUL",
      repayment: "Instantment: Month...",
      amount: "¥2000",
      tenure: "3 Month(s)",
      interestRate: "45.60%",
      score: "720",
    }
  ];

  return (
     <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
        <div className="w-64 bg-blue-900 text-white p-4">
                <div className="flex items-center mb-8 p-2">
                  <div className="w-full h-fit rounded-full bg-blue-700 flex items-center justify-center mr-3">
                    <span className="text-xl font-bold">U</span>
                  </div>
                  <div>
                    <h2 className="font-bold">BIGWIN INFOTECH</h2>
                    <p className="text-xs text-blue-200">INNOVATE|TRANSFORM|GROW</p>
                  </div>
                </div>
        
                <nav>
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className={`flex items-center w-full p-3 rounded-lg mb-2 ${activeTab === 'dashboard' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                  >
                    <FiHome className="mr-3" />
                    Dashboard
                  </button>
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center w-full p-3 rounded-lg mb-2 ${activeTab === 'profile' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                  >
                    <FiUser className="mr-3" />
                    My Profile
                  </button>
                  <button 
                    onClick={() => setActiveTab('myloan')}
                    className={`flex items-center w-full p-3 rounded-lg mb-2 ${activeTab === 'myloan' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                  >
                    <FiDollarSign className="mr-3" />
                    My Loans
                  </button>
        
                  
                  <button
                    onClick={() => setActiveTab('liveloan')}
                    className={`flex items-center w-full p-3 rounded-lg mb-2 ${activeTab === 'liveloan' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                  >
                    <FaRupeeSign className="mr-3" />
                    Live Loans
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('documents')}
                    className={`flex items-center w-full p-3 rounded-lg mb-2 ${activeTab === 'documents' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                  >
                    <FiFileText className="mr-3" />
                    Documents
                  </button>
        
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center w-full p-3 rounded-lg mb-2 ${activeTab === 'settings' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                  >
                    <FiSettings className="mr-3" />
                    Settings
                  </button>
        
                  <button className="flex items-center w-full p-3 rounded-lg text-red-300 hover:bg-blue-800 mt-8">
                    <FiLogOut className="mr-3" />
                    Logout
                  </button>
                </nav>
              </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome back!</h1>
          <div className="flex items-center">
            <div className='flex mr-5'>
            </div>
            <div className="relative mr-4">
              <FiBell className="text-2xl text-gray-600" />
              {notifications.some(n => !n.read) && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </div>
            <button  
            onClick={() => setActiveTab('profile')}
            className={`w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white p-3 mb-2 ${activeTab === 'profile' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}>
              <span className="font-bold">U</span>
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 mb-2">Available Balance</h3>
                <p className="text-2xl font-bold">₹1,25,000</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 mb-2">Active Loans</h3>
                <p className="text-2xl font-bold">2</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 mb-2">Credit Score</h3>
                <p className="text-2xl font-bold">785</p>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Transactions</h2>
                <button className="text-blue-600 hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map(transaction => (
                      <tr key={transaction.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{transaction.type}</td>
                        <td className="py-3 px-4">{transaction.amount}</td>
                        <td className="py-3 px-4">{transaction.date}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            transaction.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-blue-100 text-blue-800 p-4 rounded-lg hover:bg-blue-200 transition">
                  <FiDollarSign className="inline-block mr-2" />
                  Apply for Loan
                </button>
                <button className="bg-emerald-100 text-green-800 p-4 rounded-lg hover:bg-green-200 transition">
                  <FiUser className="inline-block mr-2" />
                  Become a Lender
                </button>
                <button className="bg-purple-100 text-purple-800 p-4 rounded-lg hover:bg-purple-200 transition">
                  <FiFileText className="inline-block mr-2" />
                  Upload Documents
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow p-6">
            {/* Profile content would go here */}
            <MyProfile/>
          </div>
        )}
         
         {/* Live Loan */}

        {activeTab === 'liveloan' && (
          <div className="bg-white rounded-lg shadow p-6">
            {/* Profile content would go here */}
            <LiveLoans/>
          </div>
        )}

        {/* My Loan */}

        {activeTab === 'myloan' && (
          <div className="bg-white rounded-lg shadow p-6">
            {/* Profile content would go here */}
            <MyLoans/>
          </div>
        )}

          {/* Notification */}

        {activeTab === 'notifications' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Notifications</h2>
            <div className="space-y-4">
              {notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={`p-4 border rounded-lg ${!notification.read ? 'bg-blue-50 border-blue-200' : 'bg-white'}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <p className="font-medium">{notification.text}</p>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;