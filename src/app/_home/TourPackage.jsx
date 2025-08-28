
"use client";
import { GoArrowUpRight } from "react-icons/go";
import React from "react";
import Link from "next/link";
import { data } from "@/store/Tourdata";
import TourPackagecard from "@/utilities/TourPackagecard";

const TourPackage = () => {
  return (
    <>
   
    <div className="container mx-auto px-3 mt-28 max-sm:mt-17">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 max-sm:items-start max-md:items-start max-md:mb-8">
        <div>
          <h2 className="text-[#121212] text-[16px] uppercase tracking-wide">
            Explore Travel Packages
          </h2>
          <h1 className="text-[32px] md:text-[43px] font-black text-[#1B1917] leading-tight max-md:text-[37px]">
            Find Your {" "}
            <span className="text-[#ff2525]"> Next Adventure</span>
          </h1>
        </div>

        <Link
          href="/car"
          className="hidden lg:flex max-lg:text-nowrap mt-6 md:mt-0 bg-[#ff2525] justify-center items-center gap-2 rounded-lg text-white px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-[#ff3232]"
        >
          Explore Now <GoArrowUpRight className="w-[18px] h-[18px]" />
        </Link>
      </div>

      <ul
        className="grid gap-4 
                   grid-cols-1       /* Default: 1 card */
                   sm:grid-cols-1    /* Small: 1 card */
                   md:grid-cols-2    /* Medium: 2 cards */
                   lg:grid-cols-3    /* Large: 3 cards */
                   xl:grid-cols-4    /* Extra Large: 4 cards */
                   w-full"
      >
        {data.slice(0, 8).map((item, index) => (
          <TourPackagecard key={index} item={item} />
        ))}
      </ul>

      <Link
        href="/car"
        className="flex lg:hidden mt-10 bg-[#ff2525] justify-center items-center gap-2 rounded-lg text-white px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-[#ff3232]"
      >
        Explore Now <GoArrowUpRight className="w-[18px] h-[18px]" />
      </Link>
    </div>
    
    </>
  );
};

export default TourPackage;
