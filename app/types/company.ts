export interface Step1Props {
  formData: {
    companyName: string;
    website: string;
    linkedinProfile: string;
    logo: File | null;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContinue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogoChange: (file: File | null) => void;
  currentStep: number;
  errors: any;
}

export interface Step3Props {
  formData: {
    companyName: string;
    website: string;
    linkedinProfile: string;
    firstName: string;
    lastName: string;
    position: string;
    logo: File | null;
    profilePicture: File | null;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContinue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDpChange: (file: File | null) => void;
  currentStep: number;
  errors: any;
}
