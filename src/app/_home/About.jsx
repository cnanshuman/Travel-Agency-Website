"use client";
import React from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { Cookie } from "next/font/google";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import img4 from "../../assests/images/img4.jpg";
const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  return (
    <section className="relative  w-full bg-white py-6 mt-17 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col gap-12">
       
        

      
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        
          <div className="lg:w-7/12">
          <div className="flex items-center gap-3 mb-5 max-sm:mb-1">
          <HiOutlineBars3BottomLeft className="text-gray-600 size-6" />
          <h1 className="text-lg font-medium text-gray-600 tracking-wide">
            INTRODUCTION
          </h1>
        </div>
            <p className="text-[20px] max-sm:mb-3 max-sm:text-2xl max-sm:font-semibold md:text-xl lg:text-2xl leading-relaxed text-[#121212] mb-2">
              With over{" "}
              <span
                className={`max-sm:text-[58px] text-5xl md:text-5xl text-red-500/85 font-black ${cookie.className}`}
              >
                25 years
              </span>{" "}
              in the travel industry, our agency is renowned for excellence and
              reliability. We ensure a comfortable journey with our fleet of
              meticulously clean and well-maintained vehicles.
            </p>

            <p className="text-[18px] md:text-[16px] lg:text-[17px] leading-8 text-[#121212]">
              Kulbir Traveller is dedicated to providing safe, reliable, and
              comfortable travel experiences. With a fleet of well-maintained
              vehicles and experienced drivers, we ensure every journey—local or
              long-distance—is smooth and secure. Our focus on personalized
              service and customer satisfaction makes every trip pleasant and
              worry-free. We go beyond just transportation, offering a travel
              experience built on care, comfort, and attention to detail—so
              every ride feels effortless and enjoyable.
            </p>

            <Link
            href="/about"
            className="mt-4 w-fit hidden  lg:flex bg-[#ff2525] justify-center items-center gap-1 mx-1 rounded-lg text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base transition-all duration-300 hover:bg-[#ff3232]"
          >
            Explore Now{" "}
            <GoArrowUpRight className="w-4 sm:w-[18px] h-4 sm:h-[18px] rotate-0" />
          </Link>
          </div>

        
          <div className="lg:w-5/12 flex flex-col gap-6 max-sm:w-full ">
            <Image
              src={img4}
              alt="img4"
              className="rounded-lg w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
