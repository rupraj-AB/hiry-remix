import React from "react";
import CheckIcon from "~/assets/icons/CheckIcon";

const Stepper = ({ steps, activeStep = 0 }) => {
  const getIconColor = (isActive, isCompleted) => {
    if (isActive) return "#0E0CFF";
    return "";
  };
  return (
    <div className="flex flex-col space-y-1">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        const iconColor = getIconColor(isActive, isCompleted);
        return (
          <div key={index} className="flex items-start">
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center -mt-[0.25rem]
                  ${
                    isActive
                      ? "border-neutral-primary border-[1px] shadow-custom-md bg-white"
                      : isCompleted
                      ? "bg-lime-light"
                      : "bg-purple-soft"
                  }
                `}
              >
                <div>
                  {isCompleted ? (
                    <CheckIcon />
                  ) : (
                    React.cloneElement(
                      step.icon,
                      iconColor ? { color: iconColor } : {}
                    )
                  )}
                </div>
              </div>
              {index !== steps.length - 1 && (
                <div className="relative w-[2px] h-8">
                  {/* Background line (dashed) */}
                  <div
                    className={`
                      absolute inset-0 
                      ${
                        isCompleted
                          ? "bg-lime-border"
                          : "bg-transparent border-l-2 border-dashed border-gray-200"
                      }
                    `}
                  />
                </div>
              )}
            </div>
            <div className="ml-3 pt-1 -mt-[0.25rem]">
              <span
                className={`
                text-sm font-medium
                ${isActive ? "text-neutral-black" : "text-neutral-tertiary"}
                ${isCompleted ? "text-neutral-black" : ""}
              `}
              >
                {step.text}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
