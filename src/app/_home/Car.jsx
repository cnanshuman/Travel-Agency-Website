"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { data } from "../../store/Cardata";

// ✅ Lazy load react-icon to reduce bundle size
const GoArrowUpRight = dynamic(
  () => import("react-icons/go").then((mod) => mod.GoArrowUpRight),
  { ssr: false }
);

const CarCard = ({ item }) => {
  return (
    <li className="max-md:mb-[17px] group border border-[#e2e2e2] bg-white p-[18px] w-[24%] max-sm:justify-left max-sm:w-fit max-md:w-12/25 max-lg:w-[350px] max-sm:mb-[12px] rounded-2xl pb-8 overflow-hidden max-xl:w-[308px]">
      <Link href="/enquiry" target="_blank" className="block">
        <div className="overflow-hidden rounded-2xl">
          {/* ✅ Lazy load images by default, keeps hover animation */}
          <Image
            src={item.img}
            alt={item.head}
            width={336}
            height={261}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 336px"
            className="rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h1 className="text-[#1B1917] text-2xl font-medium mb-2 mt-4">
          {item.head}
        </h1>
        <h3 className="text-[14px] w-fit mb-3">{item.para}</h3>

        <h2 className="text-[#121212] text-sm transition-all duration-300 mb-6 underline group-hover:text-[#ff2525]">
          Put a Enquiry Now
        </h2>
      </Link>
    </li>
  );
};

const Car = () => {
  return (
    <section className="bg-[#f3f3f4] py-10 sm:py-16 md:py-20 lg:py-22 my-10 sm:my-14 md:my-16 lg:my-19 max-sm:py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-sm:gap-0 max-sm:items-start max-sm:mb-0 max-sm:justify-items-flex-start max-md:justify-items-flex-start max-md:items-start max-md:mb-0 max-md:gap-0">
          <div>
            <h2 className="text-[#121212] rounded-4xl w-fit text-base max-sm:text-base max-md:text-base uppercase">
              Our Car Offerings
            </h2>
            <h1 className="max-sm:text-4xl text-2xl sm:text-3xl max-md:text-[47px] lg:text-[43px] font-black text-[#1B1917] mb-4 md:mb-0">
              Every Ride,{" "}
              <span className="text-[#ff2525]">a Luxury Experience</span>
            </h1>
          </div>

          {/* Desktop Button */}
          <Link
            href="/vechicle"
            className="hidden lg:flex bg-[#ff2525] justify-center items-center gap-1 mx-1 rounded-lg text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base transition-all duration-300 hover:bg-[#ff3232]"
          >
            Explore Now{" "}
            <GoArrowUpRight className="w-4 sm:w-[18px] h-4 sm:h-[18px] rotate-0" />
          </Link>
        </div>

        {/* Cars List */}
        <ul className="flex flex-wrap w-full items-center mt-6 max-sm:flex-col max-md:gap-2 gap-4 max-md:justify-between max-xl:gap-4 max-sm:items-start">
          {data.map((item, index) => (
            <CarCard item={item} key={index} />
          ))}
        </ul>

        {/* Mobile Button */}
        <Link
          href="/vechicle"
          className="flex lg:hidden mt-7 bg-[#ff2525] justify-center items-center gap-2 rounded-lg text-white px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-[#ff3232]"
        >
          Explore Now <GoArrowUpRight className="w-[18px] h-[18px]" />
        </Link>
      </div>
    </section>
  );
};

export default Car;
