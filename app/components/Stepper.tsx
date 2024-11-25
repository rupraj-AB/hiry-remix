import React from "react";
import CheckIcon from "~/assets/icons/CheckIcon";
import useWindowSize from "~/hooks/useWindowSize";

const Stepper = ({ steps, activeStep = 0 }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const getIconColor = (isActive, isCompleted) => {
    if (isActive) return "#0E0CFF";
    return "";
  };
  return isMobile ? (
    <div className="flex items-center w-full justify-between">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        const iconColor = getIconColor(isActive, isCompleted);
        const isLastStep = index === steps.length - 1;
        const stepWidth = isLastStep
          ? isActive
            ? "10%"
            : "3%"
          : `${125 / steps.length}%`;

        return (
          <React.Fragment key={index}>
            <div
              className="flex items-center relative"
              style={{ width: stepWidth }}
            >
              <div
                className={`
              rounded-full flex items-center justify-center z-10
              ${
                isActive
                  ? "border-neutral-primary border-[1px] shadow-custom-md  w-8 h-8 bg-white"
                  : isCompleted
                  ? "bg-lime-light  w-6 h-6"
                  : "bg-purple-surface  w-3 h-3"
              }
            `}
              >
                {isCompleted ? (
                  <CheckIcon />
                ) : isActive ? (
                  React.cloneElement(
                    step.icon,
                    iconColor ? { color: iconColor } : {}
                  )
                ) : (
                  <div></div>
                )}
              </div>

              {!isLastStep && (
                <div className="absolute left-0 right-0 h-[2px] top-1/2 transform -translate-y-1/2">
                  <div
                    className={`
                  absolute inset-0 
                  ${
                    isCompleted
                      ? "bg-lime-border"
                      : "bg-transparent border-t-2 border-dashed border-gray-200"
                  }
                `}
                  />
                </div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  ) : (
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
