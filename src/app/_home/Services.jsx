"use client";


import React from "react";



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Servicescard from "@/utilities/Servicescard";
import { data } from "@/store/Servicesdata";

const Services = () => {
  return (
    <div className="container mx-auto px-3 mt-19 ">
    
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 w-full">
        <div>
          <h2 className="text-[#121212] text-[16px] uppercase tracking-wide">
          What We Offer
          </h2>
          <h1 className="text-[32px] md:text-[43px] font-black text-[#1B1917] leading-snug">
          Your Journey, {" "}
            <span className="text-[#ff2525]">Our Services</span>
          </h1>
        </div>

        
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="swiper-button-prev !static !w-[70px] !h-[70px] rounded-full border-2 border-dashed border-red-700 text-[#0a245d] flex items-center justify-center cursor-pointer" />
          <div className="swiper-button-next !static !w-[70px] !h-[70px] rounded-full bg-[#0a245d] text-white flex items-center justify-center cursor-pointer" />
        </div>
      </div>

      {/* Swiper Section */}
      <div className="relative">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-9"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Servicescard item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
