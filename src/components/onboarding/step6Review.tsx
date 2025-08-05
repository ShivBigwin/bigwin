import { OnboardingData } from "@/type";


interface StepProps {
  data: OnboardingData;
  prevStep: () => void;
  onSubmit: () => void;
}

export default function Step6Review({ data, prevStep, onSubmit }: StepProps) {
  const renderUserSpecificDetails = () => {
    if (data.userType === 'lender' && data.lenderDetails) {
      return (
        <>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h3 className="text-lg font-medium text-gray-900">Lender Information</h3>
            <dl className="mt-2 divide-y divide-gray-200">
              <div className="py-2 flex justify-between text-sm">
                <dt className="font-medium text-gray-500">Investment Amount</dt>
                <dd className="text-gray-900">₹{data.lenderDetails.investmentAmount.toLocaleString()}</dd>
              </div>
              <div className="py-2 flex justify-between text-sm">
                <dt className="font-medium text-gray-500">Expected Growth Rate</dt>
                <dd className="text-gray-900">{data.lenderDetails.expectedGrowthRate}%</dd>
              </div>
            </dl>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              Your initial deposit of ₹100 has been successfully processed.
            </p>
          </div>
        </>
      );
    } else if (data.userType === 'borrower' && data.borrowerDetails) {
      return (
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-lg font-medium text-gray-900">Borrower Information</h3>
          <dl className="mt-2 divide-y divide-gray-200">
            <div className="py-2 flex justify-between text-sm">
              <dt className="font-medium text-gray-500">CBIL Score</dt>
              <dd className="text-gray-900">{data.borrowerDetails.cbilScore}</dd>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <dt className="font-medium text-gray-500">Loan Amount Requested</dt>
              <dd className="text-gray-900">₹{data.borrowerDetails.loanAmount.toLocaleString()}</dd>
            </div>
          </dl>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Your Information</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Mobile Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.mobileNumber}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">User Type</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                {data.userType}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">PAN Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.kycDetails.panNumber}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Aadhaar Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.kycDetails.aadhaarNumber}
              </dd>
            </div>
          </dl>
        </div>

        {renderUserSpecificDetails()}

        <div className="border-t border-gray-200 pt-4 mt-4 px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">Bank Information</h3>
          <dl className="mt-2 divide-y divide-gray-200">
            <div className="py-2 flex justify-between text-sm">
              <dt className="font-medium text-gray-500">Account Holder Name</dt>
              <dd className="text-gray-900">{data.bankDetails.accountHolderName}</dd>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <dt className="font-medium text-gray-500">Account Number</dt>
              <dd className="text-gray-900">{data.bankDetails.accountNumber}</dd>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <dt className="font-medium text-gray-500">IFSC Code</dt>
              <dd className="text-gray-900">{data.bankDetails.ifscCode}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back
        </button>
        <a
          href="dash"
          type="button"
          onClick={onSubmit}
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Complete Onboarding
        </a>
      </div>
    </div>
  );
}