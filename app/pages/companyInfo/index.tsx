// CompanyInfo.tsx
import React, { useState } from "react";
import BuildingIcon from "~/assets/icons/BuildngIcon";
import PencilIcon from "~/assets/icons/PencilIcon";
import UserIcon from "~/assets/icons/UserIcon";
import UsersIcon from "~/assets/icons/UsersIcon";
import Stepper from "~/components/Stepper";
import Step1 from "./Step1";
import Text from "~/components/Text";
import { stepDetailsHeader } from "./data";
import Step2 from "./Step2";

const CompanyInfo = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    linkedinProfile: "",
    logo: null,
  });

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      text: "Company info",
      icon: <BuildingIcon />,
    },
    {
      text: "Details",
      icon: <PencilIcon />,
    },
    {
      text: "Your profile",
      icon: <UserIcon />,
    },
    {
      text: "Invite team",
      icon: <UsersIcon />,
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogoChange = (file: File | null) => {
    setFormData({
      ...formData,
      logo: file,
    });
  };

  const handleContinue = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Step1
            formData={formData}
            onInputChange={handleInputChange}
            currentStep={currentStep}
            onLogoChange={handleLogoChange}
            handleContinue={handleContinue}
          />
        );

      case 1:
        return (
          <Step2
            formData={formData}
            onInputChange={handleInputChange}
            handleContinue={handleContinue}
          />
        );
      // Add more cases for other steps
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto container w-full px-10 mt-4 flex">
      {/* Stepper */}
      <div className="mb-8 w-4/12">
        <Stepper steps={steps} activeStep={currentStep} />
      </div>

      <div className="w-4/12">
        <Text className="text-neutral-tertiary" style="fs-400-14">
          Step {currentStep + 1} / {steps.length}
        </Text>
        <div className="my-3">
          <Text className="text-neutral-black" variant="h1" style="fs-550-32">
            {stepDetailsHeader[currentStep].title}
          </Text>
          <Text style="fs-400-16" className="text-neutral-secondary my-3">
            {stepDetailsHeader[currentStep].description}
          </Text>
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default CompanyInfo;
