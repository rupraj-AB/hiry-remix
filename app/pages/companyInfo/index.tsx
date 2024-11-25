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
import Button from "~/components/Button";
import Step3 from "./Step3";
import { IoIosArrowRoundBack } from "react-icons/io";
import { colors } from "~/constants/colors";
import ArrowBack from "~/assets/icons/ArrowBack";
import Step4 from "./Step4";
import Header from "./Header";
import { validateStep } from "./Validator";

const CompanyInfo = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    linkedinProfile: "",
    description: "",
    logo: null,
    industry: "",
    firstName: "",
    lastName: "",
    position: "",
    location: "",
    language: "",
    timezone: "",
    profilePicture: null,
    invites: [{ inviteEmail: "", inviteRole: "" }],
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});
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
  console.log(formData, "formdata");

  const clearErrorByKey = (errors, key) => {
    const { [key]: removedError, ...remainingErrors } = errors;
    return remainingErrors;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => clearErrorByKey(prev, e.target.name));
  };
  const handleLogoChange = (file: File | null) => {
    setFormData({
      ...formData,
      logo: file,
    });
  };

  const handleProfilePictureChange = (file: File | null) => {
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };

  console.log(errors, "errors");

  const handleContinue = () => {
    const stepErrors = validateStep(currentStep, formData);

    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prev) => prev + 1);
      setErrors({});
    } else {
      setErrors(stepErrors);
    }
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
            errors={errors}
          />
        );

      case 1:
        return (
          <Step2
            formData={formData}
            onInputChange={handleInputChange}
            handleContinue={handleContinue}
            // errors={errors}
          />
        );

      case 2:
        return (
          <Step3
            formData={formData}
            onInputChange={handleInputChange}
            currentStep={currentStep}
            onDpChange={handleProfilePictureChange}
            handleContinue={handleContinue}
            // errors={errors}
          />
        );

      case 3:
        return (
          <Step4
            formData={formData}
            onInputChange={handleInputChange}
            handleContinue={handleContinue}
            // errors={errors}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="mx-auto container w-full px-10 mt-4 flex mb-10">
      <div className="mb-8 w-4/12">
        <Stepper steps={steps} activeStep={currentStep} />
      </div>

      <div className="w-4/12">
        <Header currentStep={currentStep} steps={steps} />
        {renderStep()}
        <div className="mt-10">
          <Button onClick={handleContinue} fullWidth={true}>
            Continue
          </Button>
        </div>
        {currentStep > 0 && (
          <div className="flex justify-between items-center">
            <div
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="flex items-center justify-start  mt-4 fs-500-16 text-neutral-secondary cursor-pointer"
            >
              <ArrowBack /> <span className="ml-2"> Back </span>
            </div>

            {currentStep == 3 && (
              <div
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="flex items-center justify-start  mt-4 fs-500-16 text-neutral-secondary cursor-pointer"
              >
                <span className="mr-2"> Skip for now </span>{" "}
                <div className="rotate-180">
                  {" "}
                  <ArrowBack />{" "}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyInfo;
