"use client";

import UserDashboardLayout from "../userDashboardLayout";


const LiveLoans = () => {
  const liveLoans = [
    {
      id: 1,
      borrower: "Rajesh Kumar",
      amount: "₹200,000",
      interestRate: "12%",
      purpose: "Business Expansion",
      progress: 65,
      timeLeft: "3 days"
    },
    {
      id: 2,
      borrower: "Sunita Patel",
      amount: "₹150,000",
      interestRate: "11.5%",
      purpose: "Education",
      progress: 40,
      timeLeft: "7 days"
    },
    {
      id: 3,
      borrower: "Vikram Singh",
      amount: "₹300,000",
      interestRate: "10.8%",
      purpose: "Home Renovation",
      progress: 85,
      timeLeft: "1 day"
    }
  ];

  return (
    <UserDashboardLayout activeTab="liveloan">
      <div className="bg-white rounded-lg shadow p-6">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveLoans.map((loan) => (
            <div key={loan.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">{loan.borrower}</h3>
              <div className="mb-4">
                <p className="text-gray-600">Amount: <span className="font-medium">{loan.amount}</span></p>
                <p className="text-gray-600">Interest: <span className="font-medium">{loan.interestRate}</span></p>
                <p className="text-gray-600">Purpose: <span className="font-medium">{loan.purpose}</span></p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Funding Progress</span>
                  <span>{loan.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${loan.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Time left: {loan.timeLeft}</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  Invest
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default LiveLoans;