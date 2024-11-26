import React, { useRef } from "react";
import { BiXCircle } from "react-icons/bi";
import XCircleIcon from "~/assets/icons/XCircleIcon";

const Input = ({
  label,
  value,
  onChange,
  placeholder = "",
  name = "",
  type = "text",
  required = false,
  error = "",
  icon,
  leftPadding = "pl-10",
  clearable = false,
  ...props
}: any) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block fs-500-14 text-neutral-black font-medium mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer`}
            onClick={handleIconClick}
          >
            {icon}
          </div>
        )}
        <input
          ref={inputRef}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            h-10 
            w-full
            px-3
            py-1.5
            bg-white
            border
            border-neutral-primary
            rounded-lg
            fs-400-16
            text-neutral-defaultBlack
            placeholder:text-neutral-tertiary
            focus:outline-none
            focus:ring-1
            focus:ring-neutral-primary
            focus:border-neutral-primary
            disabled:bg-gray-100
            disabled:cursor-not-allowed
            ${icon ? `${leftPadding}` : ""}
            ${clearable && value ? "pr-10" : ""}
            ${
              error
                ? "!border-destructive-500 focus:ring-destructive-500 focus:border-destructive-500"
                : ""
            }
          `}
          {...props}
        />
        {clearable && value && (
          <button
            type="button"
            onClick={() => onChange({ target: { value: "", name } })}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <BiXCircle size={18} />
          </button>
        )}
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

export default Input;