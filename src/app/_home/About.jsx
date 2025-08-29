"use client";
import React from "react";
import dynamic from "next/dynamic"; // ✅ for dynamic imports
import { Cookie } from "next/font/google";
import Image from "next/image";

// ✅ Lazy load the icon (don’t bundle unless needed)
const HiOutlineBars3BottomLeft = dynamic(
  () => import("react-icons/hi2").then((mod) => mod.HiOutlineBars3BottomLeft),
  { ssr: false }
);

// ✅ Load image from public/ instead of importing into JS bundle
// Move img4.jpg → /public/images/img4.jpg
// That way Next.js <Image> optimizes it and reduces JS size
const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  return (
    <section className="relative w-full bg-white py-6 mt-17 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left Content */}
          <div className="lg:w-7/12">
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-5 max-sm:mb-1">
              <HiOutlineBars3BottomLeft className="text-gray-600 size-6" />
              <h1 className="text-lg font-medium text-gray-600 tracking-wide">
                INTRODUCTION
              </h1>
            </div>

            {/* Paragraph 1 */}
            <p className="text-[20px] md:text-xl lg:text-2xl max-sm:text-2xl max-sm:font-semibold leading-relaxed text-[#121212] mb-2">
              With over{" "}
              <span
                className={`text-5xl md:text-5xl max-sm:text-[58px] text-red-500/85 font-black ${cookie.className}`}
              >
                25 years
              </span>{" "}
              in the travel industry, our agency is renowned for excellence and
              reliability. We ensure a comfortable journey with our fleet of
              meticulously clean and well-maintained vehicles.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[18px] md:text-[16px] lg:text-[17px] leading-8 text-[#121212]">
              Kulbir Traveller is dedicated to providing safe, reliable, and
              comfortable travel experiences. With a fleet of well-maintained
              vehicles and experienced drivers, we ensure every journey—local or
              long-distance—is smooth and secure. Our focus on personalized
              service and customer satisfaction makes every trip pleasant and
              worry-free. We go beyond just transportation, offering a travel
              experience built on care, comfort, and attention to detail—so
              every ride feels effortless and enjoyable.
            </p>

            {/* Paragraph 3 */}
            <p className="text-[18px] md:text-[16px] lg:text-[17px] leading-8 text-[#121212]">
              We offer comfortable 4-seater and 7-seater car services from Delhi
              to a variety of exciting destinations, including{" "}
              <span
                className={`text-[38px] text-red-500/85 font-black ${cookie.className}`}
              >
                Agra, Jaipur, Udaipur, Jaisalmer, Ranthambore, Shimla, Manali,
                Mussoorie, Nainital, and more.
              </span>{" "}
              Whether you’re exploring historic landmarks, enjoying picturesque
              landscapes, or visiting India’s revered holy sites, we ensure a
              smooth and pleasant journey tailored to your travel needs.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-5/12 max-sm:w-full">
            <Image
              src="/img4.jpg" // ✅ served from public/, better optimization
              alt="Kulbir Traveller"
              width={467}
              height={687}
              className="rounded-lg w-full h-auto max-h-[600px] object-cover"
              loading="lazy" // ✅ load only when in viewport
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
