import { OnboardingData } from '@/type';
import { useState } from 'react';


interface StepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
}

export default function Step1MobileNumber({ data, updateData, nextStep }: StepProps) {
  const [mobileNumber, setMobileNumber] = useState(data.mobileNumber);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobileNumber(value);
    setIsValid(/^[0-9]{10}$/.test(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      updateData({ mobileNumber });
      nextStep();
    }
  };

  return (
      <div className="">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Enter Your Mobile Number</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter 10-digit mobile number"
            value={mobileNumber}
            onChange={handleChange}
            maxLength={10}
            pattern="[0-9]{10}"
            required
          />
          {!isValid && mobileNumber && (
            <p className="mt-1 text-sm text-red-600">Please enter a valid 10-digit mobile number</p>
          )}
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          Continue
        </button>
      </form>
    </div>
    
  );
}