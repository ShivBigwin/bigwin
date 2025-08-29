"use Client"

import { FiDollarSign, FiFileText, FiUser } from "react-icons/fi";
import UserDashboardLayout from "./userDashboardLayout";

const Dashboard = () => {
  const recentTransactions = [
    {
      id: 1,
      type: "Deposit",
      amount: "₹25,000",
      date: "25 Jul 2023",
      status: "Completed",
    },
    {
      id: 2,
      type: "Withdrawal",
      amount: "₹10,000",
      date: "23 Jul 2023",
      status: "Completed",
    },
    {
      id: 3,
      type: "Loan Payment",
      amount: "₹5,200",
      date: "20 Jul 2023",
      status: "Pending",
    },
  ];

  return (
    <UserDashboardLayout activeTab="dashboard">
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
            <button className="text-blue-600 hover:underline">
              View All
            </button>
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
                {recentTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">{transaction.type}</td>
                    <td className="py-3 px-4">{transaction.amount}</td>
                    <td className="py-3 px-4">{transaction.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          transaction.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
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
    </UserDashboardLayout>
  );
};

export default Dashboard;