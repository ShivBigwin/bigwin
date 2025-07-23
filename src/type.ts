export type OnboardingData = {
  mobileNumber: string;
  userType: 'lender' | 'borrower' | null;
  kycDetails: {
    panNumber: string;
    aadhaarNumber: string;
  };
  lenderDetails?: {
    investmentAmount: number;
    expectedGrowthRate: number;
  };
  borrowerDetails?: {
    cbilScore: number;
    loanAmount: number;
  };
  bankDetails: {
    accountNumber: string;
    ifscCode: string;
    accountHolderName: string;
  };
};