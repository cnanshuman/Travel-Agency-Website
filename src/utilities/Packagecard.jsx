"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Packagecard = ({ item }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
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
        {/* Image (default state) */}
        <Image
          src={item.img}
          alt={item.head}
          width={360}
          height={439}
          className="w-full h-[50vh] max-sm:h-[40vh] max-md:h-[50vh] max-lg:h-[80vh] max-xl:h-[70vh] object-cover absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out"
        />

        {/* Video (hover state) */}
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="w-full h-[50vh] max-sm:h-[40vh] max-md:h-[50vh] max-lg:h-[80vh] max-xl:h-[70vh] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
        >
          <source src={item.video} type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[black]/20 to-transparent flex flex-col justify-end p-5 max-sm:p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out">
          <h1 className="text-2xl font-medium text-white mb-2 max-sm:mb-0 max-sm:text-[20px]">
            {item.head}
          </h1>
        </div>
      </Link>
    </li>
  );
};

export default Packagecard;
