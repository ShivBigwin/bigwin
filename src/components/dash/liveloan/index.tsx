import React from 'react';

const LiveLoans = () => {
  const loans = [
    {
      id: 1,
      name: "MADEM PRAVEEN KUL",
      repayment: "Instantment: Month...",
      amount: "¥2000",
      tenure: "3 Month(s)",
      interestRate: "45.60%",
      score: "720",
    },
    {
      id: 2,
      name: "GREESHMAK O",
      repayment: "Instantment: Month...",
      amount: "¥9000",
      tenure: "4 Month(s)",
      interestRate: "35.88%",
      score: "771",
    },
    {
      id: 3,
      name: "MR RAJESHKUMAR",
      repayment: "Instantment: Month...",
      amount: "¥5000",
      tenure: "2 Month(s)",
      interestRate: "40.25%",
      score: "690",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Live Loans</h1>
      
      <div className="mb-4 flex items-center">
        <input 
          type="checkbox" 
          id="selectAll" 
          className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="selectAll" className="text-sm font-medium text-gray-700">
          Select all
        </label>
      </div>
      
      <div className="space-y-6">
        {loans.map((loan) => (
          <div key={loan.id} className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-3">
              <h2 className="font-semibold text-lg">{loan.name}</h2>
              <p className="text-gray-500 text-sm">{loan.repayment}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4  text-sm">
              <div>
                <p className="text-gray-500">Loan Amt</p>
                <p className="font-medium">{loan.amount}</p>
              </div>
              <div>
                <p className="text-gray-500">Tenure</p>
                <p className="font-medium">{loan.tenure}</p>
              </div>
              <div>
                <p className="text-gray-500">Interest Rate</p>
                <p className="font-medium">{loan.interestRate}</p>
              </div>
              <div>
                <p className="text-gray-500">Credit Score</p>
                <p className="font-medium">{loan.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveLoans;