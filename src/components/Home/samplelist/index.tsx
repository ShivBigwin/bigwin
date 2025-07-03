export default function Sample() {
  const loans = [
    { name: "Yogendra...", rate: "36.00% p.a.", tenure: " 3 Month(s)", amount: "₹ 10,000" },
    { name: "Prateek...", rate: "25.20% p.a.", tenure: " 6 Month(s)", amount: "₹ 45,000" },
    { name: "Pankaj...", rate: "35.88% p.a.", tenure: " 3 Month(s)", amount: "₹ 13,700" },
    { name: "Mustafa...", rate: "15.85% p.a.", tenure: " 3 Month(s)", amount: "₹ 4,600" },
    { name: "Ayush...", rate: "18.50% p.a.", tenure: " 4 Month(s)", amount: "₹ 7,500" },
    { name: "Kumar...", rate: "21.50% p.a.", tenure: " 4 Month(s)", amount: "₹ 37,500" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Diversify your portfolio in loans</h1>
        <p className="text-gray-500 mt-2">
          Here's a sample list of loans. You will get to lend in thousands of such loans. Get started now.
        </p>
      </div>

      {/* Loan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto rounded-xl">
        {loans.map((loan, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-lg p-4 shadow-md transition transform hover:translate-y-2">
            <div className=" flex justify-between items-center mb-2 text-white">
              <div className="flex flex-col">
                 <span className="font-semibold">Borrower Name</span>
                 <span className="text-lg font-semibold mb-4 ">{loan.name}</span>
              </div>
              <button className="text-sm underline flex items-center gap-1">View Details</button>
              
            </div>
            
            <div className="bg-slate-50 rounded-lg flex text-gray-950  text-sm px-2 py-1">
              <div>Interest Rate:<strong> {loan.rate}</strong></div>
              <div>Loan Tenure:<strong> {loan.tenure}</strong></div>
              <div>Loan Amount:<strong> {loan.amount}</strong></div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-8">
        <a href="/auth" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-lg">
          Sign Up or Login to View all Loans
        </a>
      </div>
    </main>
  );
}