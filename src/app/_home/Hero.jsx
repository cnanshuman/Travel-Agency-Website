import React from "react";
import Link from "next/link";
import { Cookie } from "next/font/google";
import { GoArrowUpRight } from "react-icons/go";

const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
});
const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/demo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0  "></div>

      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-center px-4 max-sm:w-[100%] max-md:w-[80%] max-lg:w-[71%] max-xl:w-[61%] max-md:leading-tight ">
        <h1 className="mb-2 text-center text-[64px] font-black text-white  leading-tight drop-shadow-lg max-sm:text-3xl max-md:text-5xl  ">
          Discover North India Culture and Majesty with
          <span
            className={` text-[80px] text-[#ff3232]/85 italic font-bold ${cookie.className} max-sm:text-5xl max-md:text-7xl`}
          >
            {" "}
            Kulbir-Travels.
          </span>
        </h1>

        <p className="mb-3 text-center text-[16px] font-normal text-white opacity-90 drop-shadow max-w-xl leading-tight max-sm:text-[15px] max-sm:leading-5 max-md:w-[75%]">
          Kulbir Travels is your trusted partner for safe, reliable, and
          comfortable journeys. With professional drivers and well-maintained
          vehicles, we ensure every trip is secure and enjoyable.
        </p>

        <ul className="flex max-sm:flex-col  mt-6 text-[14px]">
          <li className=" max-sm:w-full max-sm: mb-[12px] ">
            <Link
              href="/enquiry"
              className="flex bg-[#ff2525] justify-center gap-1 items-center mx-1 rounded-lg text-white px-6 py-3 transition-all duration-300 hover:bg-[#ff3232]"
            >
              Book a Trip Now<GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
            </Link>
          </li>
          <li>
            <Link
              href="/travel"
              className="flex bg-[#ededed] mx-1 justify-center items-center gap-1 rounded-lg text-[#222222] px-6 py-3 transition-all duration-300 hover:bg-[#ff3232] hover:text-white"
            >
              Explore Packages<GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
