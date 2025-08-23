import React from "react";
import Link from "next/link";
import { Cookie } from "next/font/google";

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

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0"></div>

      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-center px-4">
        <h1 className="mb-2 text-center text-[64px] font-black text-white  leading-tight drop-shadow-lg">
          Discover North India Culture and Majesty with
          <span
            className={` text-[80px] text-[#ff3232]/85 italic font-bold ${cookie.className} `}
          >
            {" "}
            Kulbir-Travels.
          </span>
        </h1>

        <p className="mb-3 text-center text-[16px] font-normal text-white opacity-90 drop-shadow max-w-xl leading-tight">
          Kulbir Travels is your trusted partner for safe, reliable, and
          comfortable journeys. With professional drivers and well-maintained
          vehicles, we ensure every trip is secure and enjoyable.
        </p>

        <ul className="flex mt-6 text-[14px]">
          <li>
            <Link
              href="/book"
              className="flex bg-[#ff2525] mx-1 rounded-lg text-white px-6 py-3 transition-all duration-300 hover:bg-[#ff3232]"
            >
              Book a Trip Now
            </Link>
          </li>
          <li>
            <Link
              href="/packages"
              className="flex bg-[#ededed] mx-1 rounded-lg text-[#222222] px-6 py-3 transition-all duration-300 hover:bg-[#ff3232] hover:text-white"
            >
              Explore Packages
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
