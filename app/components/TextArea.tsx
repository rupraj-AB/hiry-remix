import React, { useState } from "react";
import XCircleIcon from "~/assets/icons/XCircleIcon";

interface TextAreaWithCounterProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxCharacters?: number;
  className?: string;
  minRows?: number;
  maxRows?: number;
  error?: string;
}

const TextArea: React.FC<TextAreaWithCounterProps> = ({
  label,
  value,
  onChange,
  placeholder = "Enter text",
  maxCharacters = 100,
  className = "",
  minRows = 6,
  maxRows = 10,
  error,
}) => {
  const [rows, setRows] = useState(minRows);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const currentRows = Math.min(
      Math.max(Math.ceil(inputValue.split("\n").length), minRows),
      maxRows
    );
    setRows(currentRows);
    if (inputValue.length <= maxCharacters) {
      onChange(inputValue);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label className="text-neutral-black  mb-2 block fs-500-14">
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          className={`w-full p-3 border rounded-md focus:ring-neutral-primary focus:border-neutral-primary 
            ${error ? "border-red-500" : "border-neutral-light"}
            ${className}`}
          rows={rows}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxCharacters}
        />
        <div className="absolute bottom-2 right-2 text-xs text-neutral-500">
          {value.length}/{maxCharacters}
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-destructive-800 fs-400-12 flex items-center">
          <span className="mr-1">
            <XCircleIcon />
          </span>{" "}
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
