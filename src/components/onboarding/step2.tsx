import { USER_TYPES } from "@/constants";
import { OnboardingData } from "@/type";
import { useState } from "react";


interface StepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step2UserType({ data, updateData, nextStep, prevStep }: StepProps) {
  const [selectedType, setSelectedType] = useState<any>(data.userType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType) {
      updateData({ userType: selectedType });
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Who Are You?</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              selectedType === USER_TYPES.LENDER
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300'
            }`}
            onClick={() => setSelectedType(USER_TYPES.LENDER)}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id="lender"
                name="userType"
                checked={selectedType === USER_TYPES.LENDER}
                onChange={() => setSelectedType(USER_TYPES.LENDER)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="lender" className="ml-3 block text-sm font-medium text-gray-700">
                <span className="text-lg">Lender</span>
                <p className="text-sm text-gray-500 mt-1">
                  I want to invest money and earn returns
                </p>
              </label>
            </div>
          </div>
          <div
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              selectedType === USER_TYPES.BORROWER
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300'
            }`}
            onClick={() => setSelectedType(USER_TYPES.BORROWER)}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id="borrower"
                name="userType"
                checked={selectedType === USER_TYPES.BORROWER}
                onChange={() => setSelectedType(USER_TYPES.BORROWER)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="borrower" className="ml-3 block text-sm font-medium text-gray-700">
                <span className="text-lg">Borrower</span>
                <p className="text-sm text-gray-500 mt-1">
                  I need to borrow money for my needs
                </p>
              </label>
            </div>
          </div>
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
            disabled={!selectedType}
            className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              selectedType ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}