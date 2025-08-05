"use client";
import React, { useState } from "react";

const MyLoanPage = () => {
  const [activeTab, setActiveTab] = useState("activeLoans");
  const loanData = {
    name: "Amit",
    amount: "50000",
    EMI: "2500",
    ROI: "10",
    date: "12/05/25",
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
        {/* Header */}
        <div className="border-b border-gray-200">
            <h2 className="text-xl font-semibold text-black">Products</h2>
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("activeloans")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "activeloans"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Active Loans
            </button>
            <button
              onClick={() => setActiveTab("closedloans")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "closedloans"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Closed Loans
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
          {activeTab === "activeloans" && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Active Loans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Full Name
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">{loanData.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Amount</h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {loanData.amount}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">EMI</h3>
                  <p className="mt-1 text-sm text-gray-900">{loanData.EMI}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Rate Of Interest
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">{loanData.ROI}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date</h3>
                  <p className="mt-1 text-sm text-gray-900">{loanData.date}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLoanPage;
