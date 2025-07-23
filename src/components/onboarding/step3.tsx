import { OnboardingData } from "@/type";
import { useState } from "react";


interface StepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step3KYC({ data, updateData, nextStep, prevStep }: StepProps) {
  const [kycDetails, setKycDetails] = useState(data.kycDetails);
  const [errors, setErrors] = useState({
    panNumber: '',
    aadhaarNumber: '',
  });

  const validatePan = (pan: string) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
  const validateAadhaar = (aadhaar: string) => /^[0-9]{12}$/.test(aadhaar);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setKycDetails((prev) => ({ ...prev, [name]: value }));

    if (name === 'panNumber') {
      setErrors((prev) => ({
        ...prev,
        panNumber: value && !validatePan(value) ? 'Invalid PAN format' : '',
      }));
    } else if (name === 'aadhaarNumber') {
      setErrors((prev) => ({
        ...prev,
        aadhaarNumber: value && !validateAadhaar(value) ? 'Invalid Aadhaar format' : '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValidPan = validatePan(kycDetails.panNumber);
    const isValidAadhaar = validateAadhaar(kycDetails.aadhaarNumber);

    if (isValidPan && isValidAadhaar) {
      updateData({ kycDetails });
      nextStep();
    } else {
      setErrors({
        panNumber: !isValidPan ? 'Invalid PAN format' : '',
        aadhaarNumber: !isValidAadhaar ? 'Invalid Aadhaar format' : '',
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">KYC Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700 mb-2">
            PAN Number
          </label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter PAN (e.g., ABCDE1234F)"
            value={kycDetails.panNumber}
            onChange={handleChange}
            required
          />
          {errors.panNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.panNumber}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Aadhaar Number
          </label>
          <input
            type="text"
            id="aadhaarNumber"
            name="aadhaarNumber"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter 12-digit Aadhaar"
            value={kycDetails.aadhaarNumber}
            onChange={handleChange}
            required
          />
          {errors.aadhaarNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.aadhaarNumber}</p>
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
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}