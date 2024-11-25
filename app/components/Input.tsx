import React from "react";
import { BiX, BiXCircle } from "react-icons/bi";

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
  onIconClick,
  clearable = false,
  ...props
}: any) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block fs-500-14 text-neutral-black font-medium mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500
              ${onIconClick ? "cursor-pointer hover:text-gray-700" : ""}`}
            onClick={onIconClick}
          >
            {icon}
          </div>
        )}
        <input
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
            ${icon ? "pl-10" : ""}
            ${clearable && value ? "pr-10" : ""}
            ${
              error
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
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
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
