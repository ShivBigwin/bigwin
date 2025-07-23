import { USER_TYPES } from "@/constants";

interface StepperProps {
  currentStep: number;
  userType: 'lender' | 'borrower' | null;
}

export default function Stepper({ currentStep, userType }: StepperProps) {
  const getSteps = () => {
    const baseSteps = [
      { id: 1, name: 'Mobile Number', description: 'Verify your phone' },
      { id: 2, name: 'User Type', description: 'Lender or Borrower' },
      { id: 3, name: 'KYC Details', description: 'PAN & Aadhaar' },
    ];

    if (userType === USER_TYPES.LENDER) {
      return [
        ...baseSteps,
        { id: 4, name: 'Lender Details', description: 'Investment info' },
        { id: 5, name: 'Bank Details', description: 'Account verification' },
        { id: 6, name: 'Review & Complete', description: 'Confirm details' },
      ];
    } else if (userType === USER_TYPES.BORROWER) {
      return [
        ...baseSteps,
        { id: 4, name: 'CBIL Fetch', description: 'Credit score' },
        { id: 5, name: 'Bank Details', description: 'Account info' },
        { id: 6, name: 'Review & Complete', description: 'Final step' },
      ];
    }

    return [...baseSteps, { id: 4, name: 'Details' }, { id: 5, name: 'Bank' }, { id: 6, name: 'Review' }];
  };

  const steps = getSteps();

  return (
    <div className="hidden md:block w-64 pr-8">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {steps.map((step: any) => (
          // Only render steps that are completed or current
          step.id <= currentStep ? (
            <li key={step.id} className="mb-10 ml-6">
              <span
                className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                  step.id < currentStep
                    ? 'bg-green text-white'
                    : step.id === currentStep
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.id < currentStep ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step.id
                )}
              </span>
              <h3
                className={`flex items-center mb-1 text-lg font-semibold ${
                  step.id <= currentStep ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                {step.name}
                {step.id === currentStep && (
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                    Current
                  </span>
                )}
              </h3>
              <p
                className={`text-sm ${
                  step.id <= currentStep ? 'text-gray-500' : 'text-gray-300'
                }`}
              >
                {step.description}
              </p>
            </li>
          ) : null
        ))}
      </ol>
    </div>
  );
}