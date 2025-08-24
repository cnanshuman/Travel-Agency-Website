
"use client";
import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Packagecard = ({ item }) => {
  return (
    <li className="group relative rounded-[12px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-black">
     <Link href="/enquiry" target='_blank' className="block">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500"
      >
        <source src={item.video} type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[black]/40 to-transparent flex flex-col justify-end p-5">
        <h1 className="text-2xl md:text-2xl font-medium text-white mb-2">
          {item.head}
        </h1>
        <Link
          href="/enquiry"
          className="inline-flex items-center gap-2   text-sm font-normal text-white rounded-lg transition-all duration-300 "
        >
          Put an Enquiry Now <GoArrowUpRight className="w-4 h-4" />
        </Link>

      </div>
      </Link>
    </li>
  );
};

export default Packagecard;
