import React, { useState, useCallback, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import LanguageIcon from "~/assets/icons/LanguageIcon";
import LocationIcon from "~/assets/icons/LocationIcon";
import TimeIcon from "~/assets/icons/TimeIcon";
import Dropdown from "~/components/Dropdown";
import Text from "~/components/Text";
import TextArea from "~/components/TextArea";

const Step2 = ({ formData, onInputChange, handleContinue, errors }) => {
  const MAX_CHARACTERS = 100;
  const [state, setState] = useState({
    industry: formData.industry,
    description: formData.description,
    location: formData.location,
    language: formData.language,
    timezone: formData.timezone,
  });

  const [rows, setRows] = useState(6);

  const handleChange = (name, value) => {
    if (name === "description") {
      const textareaLineHeight = 24;
      const currentRows = Math.min(
        Math.max(Math.ceil(value.split("\n").length), 6),
        10
      );
      setRows(currentRows);

      if (value.length <= MAX_CHARACTERS) {
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        onInputChange({ target: { name, value } });
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      onInputChange({ target: { name, value } });
    }
  };

  return (
    <div>
      <div className="mt-4 relative">
        
        <div className="relative">
          <TextArea
            label="Company Description"
            value={state.description}
            onChange={(value) => handleChange("description", value)}
            placeholder="Provide a brief description of your company"
            maxCharacters={100}
            error={errors.description}
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-6 mt-6">
        <Dropdown
          label="Industry"
          value={state.industry.value}
          onChange={(value) => handleChange("industry", value)}
          placeholder="Select industry"
          name="industry"
          error={errors.industry}
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
          error={errors.location}
          value={state.location.value}
          onChange={(value) => handleChange("location", value)}
          placeholder="Select location"
          name="location"
          options={[
            { value: "usa", label: "United States" },
            { value: "canada", label: "Canada" },
            { value: "uk", label: "United Kingdom" },
          ]}
        />
        <Dropdown
          icon={<LanguageIcon />}
          label="Languages"
          error={errors.language}
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
          error={errors.timezone}
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
