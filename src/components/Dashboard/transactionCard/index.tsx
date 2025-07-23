// components/TransactionCard.jsx
"use client";
export default function TransactionCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Transactions</h3>
      
      
      
      <div className="grid grid-cols-3 gap-4 mb-6 text-sm font-medium text-gray-500">
        <div>Transaction ID</div>
        <div>Transaction Date</div>
        <div>Transaction Type</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4 items-center">
        <div className="font-medium">Q2</div>
        <div>2025-05-14</div>
        <div>Platform Deposit</div>
      </div>
      
      <div className="flex items-center justify-between mt-6 pt-6 border-t">
        <span className="text-2xl font-bold">+ ₹100</span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Success</span>
      </div>
    </div>
  );
}