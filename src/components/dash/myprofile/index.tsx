import { useState } from 'react';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [balance, setBalance] = useState({
    total: 500000,
    available: 125000,
    reserved: 75000
  });

  const userData = {
    name: "SACHIN",
    lenderId: "HRHCLU9R3PV",
    mobile: "78XXXXXX44",
    pan: "ABCD1654N",
    dob: "05/05/1995",
    gender: "Male",
    email: "ashdb574@gmail.com",
    bank: {
      name: "STATE BANK OF INDIA",
      account: "446XXXXXXXX4322",
      ifsc: "SBIN0000155"
    }
  };

  const transactions = [
    { id: 1, date: "2025-07-30", amount: 5000, type: "credit", description: "Investment Return" },
    { id: 2, date: "2025-07-28", amount: 10000, type: "debit", description: "Loan Funding" },
    { id: 3, date: "2025-07-25", amount: 15000, type: "credit", description: "Wallet Top-up" }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (

    <div className="flex w-full min-h-screen bg-gray-50">
      <div className='w-full min-h-screen'>
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
            <p className="text-sm text-gray-500">Lender ID: {userData.lenderId}</p>
          </div>
          {/* <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <a href='dash' className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
              {userData.name.charAt(0)}
            </a>
          </div> */}
        </div>
      </header>
        
        

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'personal'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Personal Details
                </button>
                <button
                  onClick={() => setActiveTab('bank')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'bank'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Bank Account
                </button>
                <button
                  onClick={() => setActiveTab('balance')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'balance'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Balance
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'documents'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Documents
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
              {activeTab === 'personal' && (
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Mobile Number</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.mobile}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">PAN Number</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.pan}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Date of Birth</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.dob}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.gender}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.email}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'bank' && (
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Bank Account Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Bank Name</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.bank.name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Account Number</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.bank.account}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">IFSC Code</h3>
                      <p className="mt-1 text-sm text-gray-900">{userData.bank.ifsc}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Update Bank Details
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'balance' && (
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Account Balance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-500">Total Balance</h3>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">{formatCurrency(balance.total)}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-500">Available Balance</h3>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">{formatCurrency(balance.available)}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-500">Reserved Balance</h3>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">{formatCurrency(balance.reserved)}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Add Funds
                    </button>
                    <button className="flex-1 inline-flex justify-center items-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Withdraw
                    </button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      *Reserved balance is the amount kept to allow a lumpsum lending as per loans availability based on your request. These funds are automatically unblocked within 24 hours of the lumpsum lending request date. You can withdraw available balance anytime.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Documents</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Net Worth Certificate</h3>
                        <p className="text-sm text-gray-500">Uploaded on 15/07/2025</p>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        View
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">PAN Card</h3>
                        <p className="text-sm text-gray-500">Verified</p>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        View
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Upload New Document
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Recent Transactions Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Transactions</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <li key={transaction.id} className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        ) : (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{new Date(transaction.date).toLocaleDateString()}</p>
                      </div>
                      <div className={`ml-4 text-right ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <p className="text-sm font-medium">
                          {transaction.type === 'credit' ? '+' : '-'}
                          {formatCurrency(transaction.amount)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-6 py-4 border-t border-gray-200">
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all transactions
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default MyProfile;