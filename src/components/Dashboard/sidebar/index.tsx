// components/Sidebar.jsx
"use client";
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-50 h-screen p-4 border-r">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2 mt-6">1. Data acquisition data</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded">Dashboard</Link>
          </li>
          <li>
            <Link href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded">New Opportunities</Link>
          </li>
          <li>
            <Link href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded">All Investments</Link>
          </li>
          {/* <li className="mt-4">
            <Link href="#" className="block px-3 py-2 font-medium text-gray-700 bg-gray-100 rounded">Transaction</Link>
            <ul className="ml-4 mt-2 space-y-1">
              <li className="text-sm text-gray-500">Filter by</li>
              <li>
                <Link href="#" className="block px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">Date</Link>
              </li>
              <li>
                <Link href="#" className="block px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">Transaction ID</Link>
              </li>
              <li>
                <Link href="#" className="block px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">Transaction Date</Link>
              </li>
              <li>
                <Link href="#" className="block px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">Transaction Type</Link>
              </li>
              <li>
                <Link href="#" className="block px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">Amount</Link>
              </li>
              <li>
                <Link href="#" className="block px-3 py-1 text-gray-600 hover:bg-gray-100 rounded text-sm">Status</Link>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  );
}