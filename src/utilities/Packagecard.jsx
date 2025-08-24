
"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
const Packagecard = ({ item }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <li
      className="group relative rounded-[12px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="/enquiry" target="_blank" className="block relative">
       
        <Image
          src={item.img}
          alt={item.head}
          className="w-full h-fit object-cover absolute inset-0 group-hover:opacity-0 transition-opacity duration-500"
        />

       
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="w-full h-[350px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <source src={item.video} type="video/mp4" />
        </video>

       
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[black]/40 to-transparent flex flex-col justify-end p-5">
          <h1 className="text-2xl font-medium text-white mb-2">
            {item.head}
          </h1>
          <span className="inline-flex items-center gap-2 text-sm font-normal text-white rounded-lg transition-all duration-300">
            Put an Enquiry Now <GoArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </li>
  );
};

export default Packagecard;
