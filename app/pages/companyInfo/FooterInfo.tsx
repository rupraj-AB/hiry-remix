import { useNavigate } from "@remix-run/react";
import React from "react";
import ArrowBack from "~/assets/icons/ArrowBack";

const FooterInfo = ({ currentStep, setCurrentStep }) => {
  const navigate =useNavigate()
  const skipForNow =()=>{
   navigate('/complete')
  }
  return (
    <div>
      {" "}
      {currentStep > 0 && (
        <div className="flex justify-between items-center">
          <div
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="flex items-center justify-start  mt-4 fs-500-16 text-neutral-secondary cursor-pointer"
          >
            <ArrowBack /> <span className="ml-2"> Back </span>
          </div>

          {currentStep == 3 && (
            <div
              onClick={skipForNow}
              className="flex items-center justify-start  mt-4 fs-500-16 text-neutral-secondary cursor-pointer"
            >
              <span className="mr-2"> Skip for now </span>{" "}
              <div className="rotate-180">
                {" "}
                <ArrowBack />{" "}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FooterInfo;
