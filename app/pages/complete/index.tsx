import React from "react";
import Text from "~/components/Text";

const CompletedScreen = () => {
  return (
    <div className="p-4 md:mt-0 mt-16">
      <div className="my-3 text-center">
        <Text
          textAlign="center"
          className="text-neutral-black"
          variant="h1"
          style="fs-550-32"
        >
          Welcome to Hiry 👋
        </Text>
        <Text
          textAlign="center"
          style="fs-400-16"
          className="text-neutral-secondary my-3"
        >
          You have successfully created your company’s account!{" "}
          <span className="md:block inline"> What’s next? </span>
        </Text>
      </div>

      <div className="flex gap-4 mt-8 md:flex-row flex-col">
        <div className="border rounded-2xl  border-neutral-primary w-full h-full bg-white overflow-hidden ">
          <div className="relative">
            <img src="/assets/browse.png" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/0"></div>
          </div>

          <Text
            style="fs-550-20 "
            className="text-center  bg-white mx-6 mb-6  z-[100] bottom-0 "
          >
            Browse Freelancers
          </Text>
        </div>

        <div className="border rounded-2xl relative border-neutral-primary w-full h-full bg-white  overflow-hidden">
          <div className="relative">
            <img src="/assets/create.png" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/0"></div>
          </div>
          <Text style="fs-550-20 " className="text-center  bg-white  mx-6 mb-6">
            Create a job
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CompletedScreen;
