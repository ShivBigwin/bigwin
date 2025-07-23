import { OnboardingData } from '@/type';
import { useState } from 'react';


interface StepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step4BorrowerDetails({ data, updateData, nextStep, prevStep }: StepProps) {
  const [borrowerDetails, setBorrowerDetails] = useState(
    data.borrowerDetails || { cbilScore: 0, loanAmount: 0 }
  );
  const [isFetching, setIsFetching] = useState(false);
  const [errors, setErrors] = useState({
    cbilScore: '',
    loanAmount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBorrowerDetails((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));

    // Validation
    if (name === 'cbilScore' && (parseFloat(value) < 300 || parseFloat(value) > 900)) {
      setErrors((prev) => ({
        ...prev,
        cbilScore: 'CBIL score must be between 300 and 900',
      }));
    } else if (name === 'loanAmount' && parseFloat(value) < 1000) {
      setErrors((prev) => ({
        ...prev,
        loanAmount: 'Minimum loan amount is ₹1000',
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const fetchCBILScore = async () => {
    setIsFetching(true);
    try {
      // Simulate API call to fetch CBIL score
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const mockScore = Math.floor(Math.random() * 600) + 300; // Random score between 300-900
      setBorrowerDetails((prev) => ({ ...prev, cbilScore: mockScore }));
      setErrors((prev) => ({ ...prev, cbilScore: '' }));
    } catch (error) {
      console.error('Error fetching CBIL score:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!errors.cbilScore && !errors.loanAmount) {
      updateData({ borrowerDetails });
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Borrower Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cbilScore" className="block text-sm font-medium text-gray-700 mb-2">
            CBIL Score
          </label>
          <div className="flex">
            <input
              type="number"
              id="cbilScore"
              name="cbilScore"
              min="300"
              max="900"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your CBIL score"
              value={borrowerDetails.cbilScore || ''}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={fetchCBILScore}
              disabled={isFetching}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
            >
              {isFetching ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                  Fetching...
                </>
              ) : (
                'Fetch Score'
              )}
            </button>
          </div>
          {errors.cbilScore && (
            <p className="mt-1 text-sm text-red-600">{errors.cbilScore}</p>
          )}
          <p className="mt-2 text-sm text-gray-500">
            A score above 700 is considered good
          </p>
        </div>
        <div className="mb-6">
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
            Desired Loan Amount (₹)
          </label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            min="1000"
            step="1000"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount in INR"
            value={borrowerDetails.loanAmount || ''}
            onChange={handleChange}
            required
          />
          {errors.loanAmount && (
            <p className="mt-1 text-sm text-red-600">{errors.loanAmount}</p>
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
            disabled={!!errors.cbilScore || !!errors.loanAmount}
            className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              !errors.cbilScore && !errors.loanAmount
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}