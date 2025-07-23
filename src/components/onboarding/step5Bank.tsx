import { OnboardingData } from '@/type';
import { useState } from 'react';


interface StepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  userType: 'lender' | 'borrower' | null;
}

export default function Step5BankDetails({
  data,
  updateData,
  nextStep,
  prevStep,
  userType,
}: StepProps) {
  const [bankDetails, setBankDetails] = useState(data.bankDetails);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails((prev) => ({ ...prev, [name]: value }));

    // Basic validation
    if (name === 'accountNumber' && !/^[0-9]{9,18}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        accountNumber: 'Account number must be 9-18 digits',
      }));
    } else if (name === 'ifscCode' && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        ifscCode: 'Invalid IFSC format (e.g., ABCD0123456)',
      }));
    } else if (name === 'accountHolderName' && value.length < 3) {
      setErrors((prev) => ({
        ...prev,
        accountHolderName: 'Name must be at least 3 characters',
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are valid
    const isValid = Object.values(errors).every((error) => !error) &&
      bankDetails.accountNumber &&
      bankDetails.ifscCode &&
      bankDetails.accountHolderName;

    if (!isValid) return;

    if (userType === 'lender') {
      setIsSubmitting(true);
      try {
        // Simulate payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000));
        updateData({ bankDetails });
        nextStep();
      } catch (error) {
        console.error('Payment error:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      updateData({ bankDetails });
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Bank Details</h2>
      {userType === 'lender' && (
        <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                As a lender, you need to make an initial deposit of ₹100 to verify your bank account.
              </p>
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700 mb-2">
            Account Holder Name
          </label>
          <input
            type="text"
            id="accountHolderName"
            name="accountHolderName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="As per bank records"
            value={bankDetails.accountHolderName}
            onChange={handleChange}
            required
          />
          {errors.accountHolderName && (
            <p className="mt-1 text-sm text-red-600">{errors.accountHolderName}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter account number"
            value={bankDetails.accountNumber}
            onChange={handleChange}
            required
          />
          {errors.accountNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.accountNumber}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700 mb-2">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifscCode"
            name="ifscCode"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter IFSC code"
            value={bankDetails.ifscCode}
            onChange={handleChange}
            required
          />
          {errors.ifscCode && (
            <p className="mt-1 text-sm text-red-600">{errors.ifscCode}</p>
          )}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={
              isSubmitting ||
              !bankDetails.accountNumber ||
              !bankDetails.ifscCode ||
              !bankDetails.accountHolderName ||
              Object.values(errors).some(Boolean)
            }
            className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              !isSubmitting &&
              bankDetails.accountNumber &&
              bankDetails.ifscCode &&
              bankDetails.accountHolderName &&
              !Object.values(errors).some(Boolean)
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {userType === 'lender' ? 'Processing Payment...' : 'Continue'}
              </>
            ) : userType === 'lender' ? (
              'Submit ₹100 and Continue'
            ) : (
              'Continue'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}