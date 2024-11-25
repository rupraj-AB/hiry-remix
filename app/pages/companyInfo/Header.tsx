import React from "react";
import Text from "~/components/Text";
import { stepDetailsHeader } from "./data";

const Header = ({currentStep,steps}) => {
  return (
    <div>
      {" "}
      <Text className="text-neutral-tertiary" style="fs-400-14">
        Step {currentStep + 1} / {steps.length}
      </Text>
      <div className="my-3">
        <Text className="text-neutral-black" variant="h1" style="fs-550-32">
          {stepDetailsHeader[currentStep].title}
        </Text>
        <Text style="fs-400-16" className="text-neutral-secondary my-3">
          {stepDetailsHeader[currentStep].description}
        </Text>
      </div>
    </div>
  );
};

export default Header;
