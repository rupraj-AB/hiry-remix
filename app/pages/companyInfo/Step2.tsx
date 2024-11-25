import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import LanguageIcon from "~/assets/icons/LanguageIcon";
import LocationIcon from "~/assets/icons/LocationIcon";
import TimeIcon from "~/assets/icons/TimeIcon";
import Dropdown from "~/components/Dropdown";
import Text from "~/components/Text";

const Step2 = ({ formData, onInputChange, handleContinue }) => {
  const [state, setState] = useState({
    industry: formData.industry,
    description: formData.description,
    location: formData.location,
    language: formData.language,
    timezone: formData.timezone,
  });

  const handleChange = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    onInputChange({ target: { name, value } });
  };

  console.log(state, "states");

  return (
    <div>
      <div className="mt-4">
        <Text className="text-neutral-black" style="fs-500-14">
          Company Description
        </Text>
        <textarea
          className="w-full p-3 border border-neutral-light rounded-md mt-2 resize-none  focus:ring-neutral-primary
            focus:border-neutral-primary
            disabled:bg-gray-100"
          rows={6}
          name="description"
          value={state.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Provide a brief description of your company"
        />
      </div>

      <div className="flex flex-col w-full gap-6 mt-6">
        <Dropdown
          label="Industry"
          value={state.industry.value}
          onChange={(value) => handleChange("industry", value)}
          placeholder="Select industry"
          name="industry"
          error=""
          description="What industry does your company operate in?"
          options={[
            { value: "technology", label: "Technology" },
            { value: "healthcare", label: "Healthcare" },
            { value: "finance", label: "Finance" },
          ]}
        />
        <Dropdown
          icon={<LocationIcon />}
          label="Location"
          value={state.location.value}
          onChange={(value) => handleChange("location", value)}
          placeholder="Select location"
          name="location"
          description="Where is your company based?"
          options={[
            { value: "usa", label: "United States" },
            { value: "canada", label: "Canada" },
            { value: "uk", label: "United Kingdom" },
          ]}
        />
        <Dropdown
          icon={<LanguageIcon />}
          label="Languages"
          value={state.language.value}
          onChange={(value) => handleChange("language", value)}
          placeholder="Select languages"
          name="language"
          description="Select languages that you speak professionally"
          isMulti
          options={[
            { value: "en", label: "English" },
            { value: "es", label: "Spanish" },
            { value: "fr", label: "French" },
          ]}
        />
        <Dropdown
          icon={<TimeIcon />}
          label="Timezone"
          value={state.timezone.value}
          onChange={(value) => handleChange("timezone", value)}
          placeholder="Select timezone"
          name="timezone"
          description="Select your company's primary timezone"
          options={[
            { value: "utc-5", label: "UTC-5 (Eastern Time)" },
            { value: "utc-8", label: "UTC-8 (Pacific Time)" },
            { value: "utc+1", label: "UTC+1 (Central European Time)" },
          ]}
        />
      </div>
    </div>
  );
};

export default Step2;
