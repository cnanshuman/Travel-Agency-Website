"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "../../../store/Cardata";
// import Carcard from "@/utilities/Carcard";
import { GoArrowUpRight } from "react-icons/go";
// import Choose from "@/app/_home/Choose";
import Services from "@/app/_home/Services";
import Enquiry from "@/app/_home/Enquiry";
import Why from "@/app/_home/Why";

const CarCard = ({ item }) => {
  return (
    <li className="max-md:mb-[17px] group border border-[#e2e2e2] bg-white p-[18px] w-[24%] max-sm:justify-left max-sm:w-fit max-md:w-12/25  max-lg:w-[350px] max-sm:mb-[12px] rounded-2xl  pb-8 overflow-hidden max-xl:w-[308px]">
      <Link href="/enquiry" target="_blank" className="block">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={item.img}
            alt={item.head}
            width={336}
            height={261}
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

const Vechicleinr = () => {
  return (
    <>
      <div className="mb-10">
        <div
          style={{
            backgroundImage: `url(/vechicle-bnr.jpg)`,
          }}
          className="relative bnr  bg-cover bg-center bg-no-repeat w-full h-[400px] overflow-hidden"
        >
          <div className="container mx-auto p-4 relative z-10 h-full flex items-center justify-center">
            <h1 className="text-white  max-md:text-5xl text-8xl font-bold">
              Our Vechicle
            </h1>
          </div>
        </div>
      </div>

      <section className=" mt-18 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap w-full items-center mt-6 max-sm:flex-col max-md:gap-2 gap-4 max-md:justify-between max-xl:gap-4 max-sm:items-start">
            {data.map((item, index) => (
              <CarCard item={item} index={index} key={index} />
            ))}
          </ul>

          <Link
            href="/car"
            className="flex lg:hidden mt-7 bg-[#ff2525] justify-center items-center gap-2 rounded-lg text-white px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-[#ff3232]"
          >
            Explore Now <GoArrowUpRight className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </section>

      <Services />
      <Enquiry />
      <Why />
    </>
  );
};

export default Vechicleinr;
