import React, { useState } from "react";
import LinkIcon from "~/assets/icons/LinkIcon";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Text from "~/components/Text";

interface Step1Props {
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

const Step3: React.FC<Step1Props> = ({
  formData,
  onInputChange,
  onDpChange,
  currentStep,
  handleContinue,
  errors,
}) => {
  const [isLogoUploaded, setIsLogoUploaded] = useState(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      onDpChange(file);
      setIsLogoUploaded(true);
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
          <div className="md:w-32 md:h-32 h-20 w-20  min-w-20 bg-lime-light rounded-full flex items-center justify-center text-xl overflow-hidden">
            {formData.profilePicture ? (
              <img
                src={URL.createObjectURL(formData.profilePicture)}
                alt="Company Logo"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div>
                <img src="/logo/dp.png" alt="" className="mt-8 " />
              </div>
            )}
          </div>
          <div className="">
            <label className="block fs-500-14 text-neutral-black">
              Upload your profile picture
            </label>
            <Text style="fs-400-12" className="text-neutral-secondary">
              Add a picture to foster trust with potential hires.
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
            />
            <label
              htmlFor="logo-upload"
              className="bg-blue-secondary text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 inline-block text-sm font-medium transition-colors"
            >
              Upload
            </label>

            {isLogoUploaded && (
              <div
                onClick={handleLogoRemove}
                className="ml-2 bg-white text-destructive-500 border-destructive-500 border px-4 py-2 rounded-full cursor-pointer hover:bg-destructive-100 inline-block text-sm font-medium transition-colors "
              >
                Remove
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col md:flex-row  gap-2">
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
