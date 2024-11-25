import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Dropdown from "~/components/Dropdown";
import Text from "~/components/Text";

const Step2 = ({ formData, onInputChange, handleContinue }) => {
  const [industry, setIndustry] = useState(formData.industry);
  const [description, setDescription] = useState(formData.description);

  const handleIndustryChange = (value) => {
    setIndustry(value);
    onInputChange({ target: { name: "industry", value } });
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    onInputChange(e);
  };

  return (
    <div>
      <div className="mt-4">
        <Text className="text-neutral-black" style="fs-400-16">
          Company Description
        </Text>
        <textarea
          className="w-full p-3 border border-neutral-light rounded-md mt-2 resize-none"
          rows={4}
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Provide a brief description of your company"
        />
      </div>

      <div className="flex flex-col w-full ">
        <Dropdown
          label="Industry"
          value={industry}
          onChange={handleIndustryChange}
          placeholder="Select industry"
          name="industry"
          description="What industry does your company operate ?"
          options={[
            { value: "technology", label: "Technology" },
            { value: "healthcare", label: "Healthcare" },
            { value: "finance", label: "Finance" },
          ]}
        />
        <Dropdown
          icon={<FaLocationArrow />}
          label="Location"
          value={industry}
          onChange={handleIndustryChange}
          placeholder="Select Location"
          name="location"
          options={[
            { value: "technology", label: "Technology" },
            { value: "healthcare", label: "Healthcare" },
            { value: "finance", label: "Finance" },
          ]}
        />
      </div>

      <button
        className="bg-primary-blue text-white px-6 py-3 rounded-md mt-6"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Step2;
