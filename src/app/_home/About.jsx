
"use client";
import React, { useRef, useLayoutEffect } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { Cookie } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../assests/images/img1.jpg";
import img2 from "../../assests/images/img2.jpg";
import img3 from "../../assests/images/img3.jpg";

import img4 from '../../assests/images/img4.jpg';




gsap.registerPlugin(ScrollTrigger);

const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const getEnd = () => {
        const sw = trackRef.current.scrollWidth;
        const vw = window.innerWidth;
        return Math.max(0, sw - vw);
      };

      ScrollTrigger.addEventListener("refreshInit", () => {
        gsap.set(trackRef.current, { x: 0 });
      });

      gsap.to(trackRef.current, {
        x: () => -getEnd(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + getEnd(),
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] w-full overflow-hidden  my-14 z-50 bg-[#fff]"
    >
      <div ref={trackRef} className="flex h-full will-change-transform">
        {/* === First Intro Section === */}
        <div className="min-w-[100vw] h-[100svh] flex items-center justify-center">
          <div className="container mx-auto  px-3.5">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[18px] flex items-center gap-x-4 text-[#00000080]">
                 
                  <HiOutlineBars3BottomLeft  className="text-[#00000080] size-6 " />
                  INTRODUCTION
                </h1>
              </div>

              <div className="w-6/12">
                <div className="flex gap-3">
                  <div>
                    <p className="mb-5 text-[28px] font-normal leading-10 indent-18">
                      With over{" "}
                      <span
                        className={`text-[45px] text-[#ff3232]/85 font-black ${cookie.className}`}
                      >
                        25 years
                      </span>{" "}
                      in the travel industry, our agency is renowned for
                      excellence and reliability. We ensure a comfortable journey
                      with our fleet of meticulously clean and well-maintained
                      vehicles.
                    </p>
                    <ul className="flex gap-3">
                      <li>
                        <Image src={img1} alt="img1" className="rounded-lg" />
                      </li>
                      <li className="mt-[15%]">
                        <Image src={img2} alt="img2" className="rounded-lg" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



<div className="min-w-[100vw] flex items-top h-fit justify-left py-8 ">
  <div className="flex gap-3">
   <Image src={img4} alt="img4" className="rounded-lg w-[440px] h-[649px]" />
 <div className="flex justify-center items-center mx-7">
  <p className=" leading-12 text-[28px] font-normal xl:text-[20px] xl:leading-10 ">Kulbir Traveller is dedicated to providing safe, reliable, and comfortable travel experiences. With a fleet of well-maintained vehicles and experienced drivers, we ensure every journey—local or long-distance—is smooth and secure. Our focus on personalized service and customer satisfaction makes every trip pleasant and worry-free. We go beyond just transportation, offering a travel experience built on care, comfort, and attention to detail—so every ride feels effortless and enjoyable.</p>
  
 </div>
      
   
    <Image src={img3} alt="img3" className="rounded-lg w-[440px] h-[649px]" />
    
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
