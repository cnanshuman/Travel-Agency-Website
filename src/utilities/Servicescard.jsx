
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Servicescard = ({ item }) => {
  return (
    <li className="group relative rounded-[12px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-black w-full">
      <Link href="/enquiry" target="_blank" className="block relative">
        <div className="overflow-hidden">
          <Image
            src={item.img}
            alt={item.head}
            width={617}
            height={460}
            className="w-full h-[76vh] max-sm:h-[80vh] max-lg:h-[90vh] max-xl:h-[100vh] object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>

    
        <div
          className="
            absolute inset-0 
            bg-gradient-to-t 
            from-black/90 via-black/60 to-transparent
            group-hover:from-black/60 group-hover:via-black/30 group-hover:to-transparent
            transition-all duration-500
            flex flex-col justify-end p-5
          "
        >
          <h1 className="text-4xl font-normal text-white mb-2 max-sm:text-3xl max-lg:text-3xl">{item.head}</h1>
        </div>
      </Link>
    </li>
  );
};

export default Servicescard;
