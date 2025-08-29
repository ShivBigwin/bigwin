"use client";
import Link from "next/link";
import UserDashboardLayout from "../userDashboardLayout";


const MyLoans = () => {
  const loans = [
    {
      id: 1,
      name: "Home Renovation",
      amount: "₹500,000",
      interestRate: "8.5%",
      tenure: "5 years",
      status: "Active",
      nextPayment: "15 Aug 2023",
      remainingAmount: "₹385,000"
    },
    {
      id: 2,
      name: "Car Loan",
      amount: "₹800,000",
      interestRate: "7.2%",
      tenure: "4 years",
      status: "Active",
      nextPayment: "22 Aug 2023",
      remainingAmount: "₹520,000"
    },
    {
      id: 3,
      name: "Education Loan",
      amount: "₹300,000",
      interestRate: "6.8%",
      tenure: "3 years",
      status: "Closed",
      nextPayment: "N/A",
      remainingAmount: "₹0"
    }
  ];

  return (
    <UserDashboardLayout activeTab="myloan">
      <div className="bg-white rounded-lg shadow p-6">
        


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loan) => (
            <div key={loan.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">{loan.name}</h3>
              <div className="mb-4">
                <p className="text-gray-600">Amount: <span className="font-medium">{loan.amount}</span></p>
                <p className="text-gray-600">Interest: <span className="font-medium">{loan.interestRate}</span></p>
                <p className="text-gray-600">Tenure: <span className="font-medium">{loan.tenure}</span></p>
                 <p className="text-gray-600">Status: <span className="font-medium">{loan.status}</span></p>
                 <p className="text-gray-600">Next Payment: <span className="font-medium">{loan.nextPayment}</span></p>
                 <p className="text-gray-600">Remaining Amount: <span className="font-medium">{loan.remainingAmount}</span></p>
              </div>
              
              {/* <div className="mb-4">
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
              </div> */}
            </div>
          ))}
        </div>
        
        {/* <div className="">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Loan Name</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Interest Rate</th>
                <th className="text-left py-3 px-4">Tenure</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Next Payment</th>
                <th className="text-left py-3 px-4">Remaining</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{loan.name}</td>
                  <td className="py-3 px-4">{loan.amount}</td>
                  <td className="py-3 px-4">{loan.interestRate}</td>
                  <td className="py-3 px-4">{loan.tenure}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      loan.status === "Active" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {loan.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{loan.nextPayment}</td>
                  <td className="py-3 px-4">{loan.remainingAmount}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:underline mr-4">
                      View
                    </button>
                    {loan.status === "Active" && (
                      <button className="text-green hover:underline">
                        Pay
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
      <div className="flex items-center justify-end mt-6 mb-6">
          {/* <h2 className="text-2xl font-bold">My Loans</h2> */}
          <Link 
          href="liveloan"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Apply for New Loan
          </Link>
        </div>
    </UserDashboardLayout>
  );
};

export default MyLoans;