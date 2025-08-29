import React from 'react'
import Link from 'next/link'
import { GoArrowUpRight } from "react-icons/go";
import { data } from "@/store/Tourdata";
import TourPackagecard from "@/utilities/TourPackagecard";
import Choose from '@/app/_home/Choose';
import Enquiry from '@/app/_home/Enquiry';
import Why from '@/app/_home/Why';
const Packageinr = () => {
  return (
   <>
    
    <div className="mb-10">
      
      <div
        style={{
          backgroundImage: `url(/pack-bnr.jpg)`,
        }}
        className="relative bnr  bg-cover bg-center bg-no-repeat w-full h-[400px] overflow-hidden"
      >
        <div className="container mx-auto p-4 relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white  max-md:text-5xl text-8xl font-bold">Travel Package</h1>
        </div>
      </div>

     
      
    </div>
   
    <div className="container mx-auto mt-8 p-4">
     

      <ul
        className="grid gap-4 
                   grid-cols-1       /* Default: 1 card */
                   sm:grid-cols-1    /* Small: 1 card */
                   md:grid-cols-2    /* Medium: 2 cards */
                   lg:grid-cols-3    /* Large: 3 cards */
                   xl:grid-cols-4    /* Extra Large: 4 cards */
                   w-full "
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


    <Choose />
    <Enquiry />
    <Why />
   
   </>
  )
}

export default Packageinr