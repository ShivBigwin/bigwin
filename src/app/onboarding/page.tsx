'use client';

import { Suspense, useState } from 'react';
import Stepper from '@/components/onboarding/steeper';
import Step1MobileNumber from '@/components/onboarding/step1';
import Step2UserType from '@/components/onboarding/step2';
import Step3KYC from '@/components/onboarding/step3';
import Step4BorrowerDetails from '@/components/onboarding/step4Borrower';
import Step4LenderDetails from '@/components/onboarding/step4Lender';
import Step5BankDetails from '@/components/onboarding/step5Bank';
import Step6Review from '@/components/onboarding/step6Review';
import { ONBOARDING_STEPS } from '@/constants';
import { OnboardingData } from '@/type';
import Navbar from '@/components/navbar';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(ONBOARDING_STEPS.MOBILE_NUMBER);
  const [formData, setFormData] = useState<OnboardingData>({
    mobileNumber: '',
    userType: null,
    kycDetails: {
      panNumber: '',
      aadhaarNumber: '',
    },
    bankDetails: {
      accountNumber: '',
      ifscCode: '',
      accountHolderName: '',
    },
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const updateFormData = (newData: Partial<OnboardingData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = async () => {
    try {
      console.log('Submitting form data:', formData);
      // await submitOnboardingData(formData); // Replace with actual API call
      alert('Onboarding completed successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your data. Please try again.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case ONBOARDING_STEPS.MOBILE_NUMBER:
        return (
          <Step1MobileNumber
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
          />
        );
      case ONBOARDING_STEPS.USER_TYPE:
        return (
          <Step2UserType
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case ONBOARDING_STEPS.KYC:
        return (
          <Step3KYC
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case ONBOARDING_STEPS.CONDITIONAL:
        return formData.userType === 'lender' ? (
          <Step4LenderDetails
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        ) : (
          <Step4BorrowerDetails
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case ONBOARDING_STEPS.BANK_DETAILS:
        return (
          <Step5BankDetails
            data={formData}
            updateData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            userType={formData.userType}
          />
        );
      case ONBOARDING_STEPS.REVIEW:
        return (
          <Step6Review
            data={formData}
            prevStep={prevStep}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Navbar>
        <Suspense fallback={<div>Loading...</div>}>
    <div className="min-h-screen bg-gradient-to-r from-blue-950 to-darkBlue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
        {/* Stepper - Left (hidden on mobile) */}
        <div className="hidden md:block md:w-1/4 border-r p-6 bg-gray-100">
          <Stepper currentStep={currentStep} userType={formData.userType} />
        </div>

        {/* Content - Right */}
        <div className="w-full md:w-3/4 p-6">
          {/* Mobile Stepper (optional) */}
          <div className="md:hidden mb-6">
            <Stepper currentStep={currentStep} userType={formData.userType} />
          </div>

          {/* Step Content */}
          {renderStep()}
        </div>
      </div>
    </div>
    </Suspense>
     </Navbar>
  );
}
