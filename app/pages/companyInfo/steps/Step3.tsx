import React, { useState } from "react";
import LinkIcon from "~/assets/icons/LinkIcon";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Text from "~/components/Text";
import { Step3Props } from "~/types/company";

// Spinner Component
const Spinner = () => (
  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white inline-block mr-2"></div>
);

const Step3: React.FC<Step3Props> = ({
  formData,
  onInputChange,
  onDpChange,
  currentStep,
  handleContinue,
  errors,
}) => {
  const [isLogoUploaded, setIsLogoUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        onDpChange(file);
        setIsLogoUploaded(true);
        setIsUploading(false);
      }, 1500); // Simulated 1.5 second upload time
    } else {
      alert("File size exceeds 10MB");
    }
  };

  const handleLogoRemove = () => {
    onDpChange(null);
    setIsLogoUploaded(false);
  };

  return (
    <div>
      <div className="my-10">
        <div className="flex items-center space-x-4">
          <div className="md:w-32 md:h-32 h-20 w-20 min-w-20 bg-lime-light rounded-full flex items-center justify-center text-xl overflow-hidden">
            {formData.profilePicture ? (
              <img
                src={URL.createObjectURL(formData.profilePicture)}
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div>
                <img src="/logo/dp.png" alt="" className="mt-8" />
              </div>
            )}
          </div>
          <div className="">
            <label className="block fs-500-14 text-neutral-black">
              {isUploading 
                ? "Uploading" 
                : (isLogoUploaded ? "Profile Picture" : "Upload your profile picture")
              }
            </label>
            <Text style="fs-400-12" className="text-neutral-secondary">
              {isUploading 
                ? "Please wait while your profile picture is being uploaded" 
                : (isLogoUploaded
                    ? "Profile picture uploaded successfully"
                    : "Add a picture to foster trust with potential hires.")
              }
            </Text>
            <Text style="fs-400-12" className="text-neutral-secondary mb-3">
              Maximum size 10MB.
            </Text>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
              id="logo-upload"
              disabled={isUploading}
            />
            <label
              htmlFor="logo-upload"
              className={`
                fs-500-14 px-4 py-2 rounded-full cursor-pointer inline-block transition-colors
                ${isUploading 
                  ? "bg-neutral-300 text-neutral-600 cursor-not-allowed" 
                  : (isLogoUploaded
                    ? "bg-white text-neutral-black border border-neutral-primary hover:bg-blue-50"
                    : "bg-blue-secondary text-white hover:bg-blue-700")
                }
              `}
            >
              {isUploading ? (
                <span className="flex items-center justify-center">
                 
                  Uploading...
                  <Spinner />
                </span>
              ) : (isLogoUploaded ? "Replace" : "Upload")}
            </label>

            {isLogoUploaded && !isUploading && (
              <div
                onClick={handleLogoRemove}
                className="ml-2 bg-white text-destructive-500 border-destructive-500 border px-4 py-2 rounded-full cursor-pointer hover:bg-destructive-100 inline-block text-sm font-medium transition-colors"
              >
                Remove
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={onInputChange}
            error={errors.firstName}
            placeholder="Jane"
            required
          />

          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={onInputChange}
            error={errors.lastName}
            placeholder="Doe"
            required
          />
        </div>

        <Input
          label="What do you do at DevStudio?"
          name="position"
          value={formData.position}
          onChange={onInputChange}
          error={errors.position}
          placeholder="Your Position"
          required
        />
      </div>
    </div>
  );
};

export default Step3;