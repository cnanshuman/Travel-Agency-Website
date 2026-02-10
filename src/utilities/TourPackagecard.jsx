"use client";
import React, { useState } from "react";
import Image from "next/image";

const TourPackagecard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Card */}
      <li
        className="group relative rounded-[12px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-black cursor-pointer"
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover Video or Fallback Image */}
        {isHovered && item.video ? (
          <video
            src={item.video}
            width={301}
            height={366}
            className="w-full h-[60vh] max-sm:h-[70vh] max-md:h-[70vh] max-lg:h-[80vh] max-xl:h-[70vh] object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={item.img}
          />
        ) : (
          <Image
            src={item.img}
            alt={item.head}
            width={301}
            height={366}
            className="w-full h-[60vh] max-sm:h-[70vh] max-md:h-[70vh] max-lg:h-[80vh] max-xl:h-[70vh] object-cover"
            priority={false} // lazy load for performance
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[black]/50 to-transparent flex flex-col justify-end p-5 max-sm:p-4">
          <h3 className="text-2xl font-medium text-white mb-1 max-sm:text-[21px] max-sm:mb-2">
            {item.head}
          </h3>
          <p className="text-sm text-white">{item.route}</p>
          <h4 className="text-[#ffff] mt-2 text-sm transition-all duration-300 underline group-hover:text-[#ff2525]">
            Explore Package
          </h4>
        </div>
      </li>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-700 text-xl font-bold"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl text-red-700 font-bold mb-4">
              {item.head}
            </h2>

            {/* Modal Image */}
            <Image
              src={item.img}
              alt={item.head}
              width={600}
              height={300}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />

            {/* Modal Content */}
            <div
              className="overflow-y-auto pr-2 text-[#121212] leading-7 text-sm sm:text-base custom-scrollbar"
              style={{ maxHeight: "45vh" }}
            >
              {item.details}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourPackagecard;
