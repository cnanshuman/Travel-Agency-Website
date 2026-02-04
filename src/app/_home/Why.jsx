import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const steps = [
  { id: "01", text: "Booking A Taxi" },
  { id: "02", text: "Get a Driver" },
  { id: "03", text: "Pay Your Taxi" },
  { id: "04", text: "Enjoy Your Ride" },
];

const Why = () => {
  return (
    <div className="mt-23 max-sm:mt-30">
      <div className="container mx-auto p-4">
        {/* Heading */}
        <h1 className="text-[#090909] text-[3rem] font-bold leading-tight max-sm:text-3xl max-md:text-3xl max-lg:text-4xl">
          Your dream trip, planned in days and weeks
          <br className="max-sm:hidden" />
          <span className="text-[#ff2525]"> —not months.</span>
        </h1>

        {/* Content Section */}
        <div className="flex justify-between items-center mt-13 max-sm:flex-col max-sm:items-start max-md:mt-10">
          {/* Left Side (Steps) */}
          <div className="lft bg-[#ededed] basis-[60%] max-sm:w-full">
            <ul>
              {steps.map((step, index) => (
                <li
                  key={step.id}
                  className={`border-dashed border-[#d3d3d3] ${
                    index !== steps.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex justify-between items-center px-14 py-6 max-sm:px-4 max-md:px-5">
                    <div className="flex items-center">
                      <span className="text-[#7e7e81] font-medium text-[18px] mr-3.5">
                        {step.id}
                      </span>
                      <p className="text-[1.5rem] font-medium text-[#090909] max-sm:text-[15px] max-md:text-[15px]">
                        {step.text}
                      </p>
                    </div>
                    <MdArrowOutward
                      className="text-[#090909]"
                      aria-label={`Go to ${step.text}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="rgt basis-[30%] max-sm:w-full max-sm:mt-5">
            <p className="text-[#121212] text-[16px] italic mb-4">
              "Kulbir Travel is an exceptional travel team, with the perfect mix
              of planning expertise and personalized experiences. Highly
              recommended!"
            </p>

            {/* Button (hidden on small) */}
            <div className="rgt max-sm:hidden w-fit">
              <div className="bg-[#ff2525] rounded-[8px]">
                <Link
                  href="/enquiry"
                  aria-label="Go to enquiry page"
                  className="flex items-center gap-2 btn font-normal bg-[#ff2525] group p-2 get-in-touch-button relative text-white text-[15px] overflow-hidden z-10 rounded-2xl"
                >
                  Enquiry Now
                  <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
