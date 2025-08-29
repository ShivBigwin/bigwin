import React from 'react';
import Image from 'next/image';
import { FaUserTie, FaStore, FaHandHoldingUsd, FaChartLine } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

const LoanTypes = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Marquee loop={1} speed={100}>
            <p className="text-2xl text-gray-600  mx-auto mb-8">
              Whether you're an individual with personal needs or a business owner looking to grow,
              we have the perfect loan option for you.
            </p>
          </Marquee>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Loan Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600">
              <Image
                src="/personal-loan.avif" // Replace with your actual image path
                alt="Personal Loan"
                layout="fill"
                objectFit="cover"
                className=""
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <FaUserTie className="text-white text-6xl" />
              </div> */}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Personal Loan</h3>
              <p className="text-gray-600 mb-4">
                Fulfill your personal dreams with our flexible personal loans. Quick approval,
                competitive rates, and no collateral required for eligible applicants.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaHandHoldingUsd className="text-indigo-500 mr-2" />
                  <span>Loan amounts up to ₹25 lakhs</span>
                </li>
                <li className="flex items-center">
                  <FaChartLine className="text-indigo-500 mr-2" />
                  <span>Interest rates starting at 10.5% p.a.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Flexible tenure: 1 to 5 years</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300">
                Apply Now
              </button>
            </div>
          </div>

          {/* Merchant Loan Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-48 bg-gradient-to-r from-green-500 to-teal-600">
              <Image
                src="/Business-Loan.jpg" // Replace with your actual image path
                alt="Merchant Loan"
                layout="fill"
                objectFit="cover"
                className=""
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <FaStore className="text-white text-6xl" />
              </div> */}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Merchant Loan</h3>
              <p className="text-gray-600 mb-4">
                Grow your business with our merchant loans. Designed for shop owners, retailers,
                and SMEs to meet working capital or expansion needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaHandHoldingUsd className="text-teal-500 mr-2" />
                  <span>Loan amounts up to ₹50 lakhs</span>
                </li>
                <li className="flex items-center">
                  <FaChartLine className="text-teal-500 mr-2" />
                  <span>Interest rates starting at 12% p.a.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Minimal documentation</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default LoanTypes;

