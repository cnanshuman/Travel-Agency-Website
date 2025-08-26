import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
const Why = () => {
  return (
    <>
    <div className=" mt-23 max-sm:mt-30 ">
      <div className="container mx-auto p-4 ">
        <h1 className="text-[#090909] text-[3rem] font-bold leading-tight max-sm:text-3xl max-md:text-3xl max-lg:text-4xl">
        Your dream trip, planned in days and weeks
          <br className=" max-sm:hidden" /> <span className="text-[#ff2525]">—not months.</span>
        </h1>
        <div className="flex justify-between items-center mt-13 max-sm:flex-col max-sm:items-start max-md:mt-10">
          <div className="lft bg-[#ededed] w-6/10 max-sm:w-full">
            <ul>
              <li className=" border-b-1 border-dashed border-[#d3d3d3]">
                <div className="flex justify-between items-center px-14 py-6 max-sm:px-4 max-md:px-5">
                  <div className="flex items-center">
                    <span className="text-[#7e7e81] font-medium text-[18px] mr-3.5">
                      01
                    </span>
                    <p className=" text-[1.5rem] font-medium text-[#090909] max-sm:text-[15px] max-md:text-[15px]">
                    Booking A Taxi
                    </p>
                  </div>
                  <div>
                    <MdArrowOutward className="text-[090909]" />
                  </div>
                </div>
              </li>

              <li className=" border-b-1 border-dashed border-[#d3d3d3]">
                <div className="flex justify-between items-center px-14 py-5 max-sm:px-4 max-md:px-5">
                  <div className="flex items-center">
                    <span className="text-[#7e7e81] font-medium text-[18px] mr-3.5">
                      02
                    </span>
                    <p className="text-[1.5rem] font-medium text-[#090909] max-sm:text-[18px] max-md:text-[19px]">
                    Get a Driver
                    </p>
                  </div>
                  <div>
                    <MdArrowOutward className="text-[090909]" />
                  </div>
                </div>
              </li>

              <li className="border-b-1  border-dashed border-[#d3d3d3]">
                <div className="flex justify-between items-center px-14 py-5 max-sm:px-4 max-md:px-5">
                  <div className="flex items-center">
                    <span className="text-[#7e7e81] font-medium text-[18px] mr-3.5">
                      03
                    </span>
                    <p className="text-[1.5rem] font-medium text-[#090909] max-sm:text-[18px] max-md:text-[19px]">
                    Pay Your Taxi
                    </p>
                  </div>
                  <div>
                    <MdArrowOutward className="text-[090909]" />
                  </div>
                </div>
              </li>

           

              <li className=" ">
                <div className="flex justify-between items-center px-14 py-5 max-sm:px-4 max-md:px-5">
                  <div className="flex items-center">
                    <span className="text-[#7e7e81] font-medium text-[18px] mr-3.5">
                      04
                    </span>
                    <p className="text-[1.5rem] font-medium text-[#090909] max-sm:text-[18px] max-md:text-[19px]">
                    Enjoy Your Ride
                    </p>
                  </div>
                  <div>
                    <MdArrowOutward className="text-[090909]" />
                  </div>
                </div>
              </li>

            </ul>
          </div>
          <div className="rgt w-3/10 max-sm:w-full max-sm:mt-5 max-sm:">
            <p className="text-[#121212] text-[16px] italic mb-4">
           "Kulbir Travel is an exceptional travel team, with the perfect mix of planning expertise and personalized experiences. Highly recommended!"
            </p>
            <div className="rgt max-sm:hidden w-fit">
  <div className="bg-[#ff2525] rounded-[8px]">
    <Link
      href="/enquiry"
      className="flex items-center gap-2 btn font-normal bg-[#ff2525] group p-2 get-in-touch-button relative text-white text-[15px] overflow-hidden z-10 rounded-2xl"
    >
      Enquiry Now{" "}
      <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
    </Link>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Why