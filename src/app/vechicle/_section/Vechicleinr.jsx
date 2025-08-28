

"use client";
import React from "react";
import Link from "next/link";
import { data } from '../../../store/Cardata';
import Carcard from "@/utilities/Carcard";
import { GoArrowUpRight } from "react-icons/go";
import Choose from "@/app/_home/Choose";
import Services from "@/app/_home/Services";
import Enquiry from "@/app/_home/Enquiry";

const Vechicleinr = () => {
  return (
   <>
    <div className="mb-10">
      
      <div
        style={{
          backgroundImage: `url(/vechicle-bnr.jpg)`,
        }}
        className="relative bnr bg-cover bg-center bg-no-repeat w-full h-[400px] overflow-hidden"
      >
        <div className="container relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-8xl font-bold">Our Vechicle</h1>
        </div>
      </div>

     
      
    </div>
   
    <section className=" mt-18 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       

        <ul className="flex flex-wrap w-full items-center mt-6 max-sm:flex-col max-md:gap-2 gap-4 max-md:justify-between max-xl:gap-4 max-sm:items-start">
          {data.map((item, index) => (
            <Carcard item={item} index={index} key={index} />
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


   </>
  )
}

export default Vechicleinr