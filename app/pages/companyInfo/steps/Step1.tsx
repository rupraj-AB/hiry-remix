import React, { useState } from "react";
import LinkIcon from "~/assets/icons/LinkIcon";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Text from "~/components/Text";
import { Step1Props } from "~/types/company";



const Step1: React.FC<Step1Props> = ({
  formData,
  onInputChange,
  onLogoChange,
  currentStep,
  handleContinue,
  errors,
}) => {
  const [isLogoUploaded, setIsLogoUploaded] = useState(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      onLogoChange(file);
      setIsLogoUploaded(true);
    } else {
      alert("File size exceeds 10MB");
    }
  };

  const handleLogoRemove = () => {
    onLogoChange(null);
    setIsLogoUploaded(false);
  };
  return (
    <div>
      {/* Logo Upload Section */}
      <div className="my-10">
        <div className="flex items-center space-x-4">
          <div className="md:w-32 md:h-32 h-20 w-20  min-w-20 bg-lime-light rounded-full flex items-center justify-center text-xl">
            {formData.logo ? (
              <img
                src={URL.createObjectURL(formData.logo)}
                alt="Company Logo"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <Text className="text-lime-primary" style="fs-500-28">
                {formData?.companyName?formData.companyName.slice(0,1):"A"}
              </Text>
            )}
          </div>
          <div className="">
            <label className="block fs-500-14 text-neutral-black">
              Upload your company logo
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
              className="bg-blue-secondary  fs-500-14 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 inline-block transition-colors"
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
      <div className="flex flex-col w-full gap-6">
        <Input
          label="Company name"
          name="companyName"
          error={errors.companyName}
          value={formData.companyName}
          onChange={onInputChange}
          placeholder="Acme Inc."
          required
        />

        <Input
          label="Website"
          name="website"
          value={formData.website}
          error={errors.website}
          onChange={onInputChange}
          placeholder="acme.inc"
          icon={<LinkIcon />}
          required
        />

        <Input
          label="LinkedIn profile"
          name="linkedinProfile"
          error={errors.linkedinProfile}
          value={formData.linkedinProfile}
          onChange={onInputChange}
          placeholder="linkedin.com/username"
          required
        />
      </div>
    </div>
  );
};

export default Step1;
