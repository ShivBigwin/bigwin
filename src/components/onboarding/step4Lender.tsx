import { OnboardingData } from "@/type";
import { useState } from "react";


interface StepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step4LenderDetails({ data, updateData, nextStep, prevStep }: StepProps) {
  const [lenderDetails, setLenderDetails] = useState(
    data.lenderDetails || { investmentAmount: 0, expectedGrowthRate: 0 }
  );
  const [errors, setErrors] = useState({
    investmentAmount: '',
    expectedGrowthRate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLenderDetails((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));

    // Validation
    if (name === 'investmentAmount' && parseFloat(value) < 1000) {
      setErrors((prev) => ({
        ...prev,
        investmentAmount: 'Minimum investment is ₹1000',
      }));
    } else if (name === 'expectedGrowthRate' && (parseFloat(value) < 1 || parseFloat(value) > 30)) {
      setErrors((prev) => ({
        ...prev,
        expectedGrowthRate: 'Growth rate must be between 1% and 30%',
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!errors.investmentAmount && !errors.expectedGrowthRate) {
      updateData({ lenderDetails });
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Lender Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-2">
            How much do you want to invest? (₹)
          </label>
          <input
            type="number"
            id="investmentAmount"
            name="investmentAmount"
            min="1000"
            step="1000"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount in INR"
            value={lenderDetails.investmentAmount || ''}
            onChange={handleChange}
            required
          />
          {errors.investmentAmount && (
            <p className="mt-1 text-sm text-red-600">{errors.investmentAmount}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="expectedGrowthRate" className="block text-sm font-medium text-gray-700 mb-2">
            Expected Annual Growth Rate (%)
          </label>
          <input
            type="number"
            id="expectedGrowthRate"
            name="expectedGrowthRate"
            min="1"
            max="30"
            step="0.1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter expected growth rate"
            value={lenderDetails.expectedGrowthRate || ''}
            onChange={handleChange}
            required
          />
          {errors.expectedGrowthRate && (
            <p className="mt-1 text-sm text-red-600">{errors.expectedGrowthRate}</p>
          )}
          <p className="mt-2 text-sm text-gray-500">
            Typical growth rates range from 5% to 15% annually
          </p>
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
            disabled={!!errors.investmentAmount || !!errors.expectedGrowthRate}
            className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              !errors.investmentAmount && !errors.expectedGrowthRate
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