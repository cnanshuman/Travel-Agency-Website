
// "use client";
// import { GoArrowUpRight } from "react-icons/go";
// import React from "react";
// import Link from "next/link";
// import { data } from "@/store/Packagedata";
// import Packagecard from "@/utilities/Packagecard";



// const Package = () => {
//   return (
   
    
//     <div className="container mx-auto px-3 mt-28 max-sm:mt-17">
     
//       <div className="flex flex-col md:flex-row justify-between items-center mb-12 max-sm:items-start max-md:items-start max-md:mb-8 ">
//         <div>
//           <h2 className="text-[#121212] text-[16px] uppercase tracking-wide">
//             Our Travel Packages
//           </h2>
//           <h1 className="text-[32px] md:text-[43px] font-black text-[#1B1917] leading-tight max-md:text-[37px]
//           ">
//             Discover,{" "}
//             <span className="text-[#ff2525]">Beyond the Destination</span>
//           </h1>
//         </div>
//         <Link
//           href="/car"
//           className=" max-sm:hidden max-lg:text-nowrap mt-6 md:mt-0 bg-[#ff2525] flex justify-center  items-center gap-2 rounded-lg text-white px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-[#ff3232]"
//         >
//           Explore Now <GoArrowUpRight className="w-[18px] h-[18px]" />
//         </Link>
//       </div>

    
//       <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
//         {data.map((item, index) => (
//           <Packagecard key={index} item={item} />
//         ))}
//       </ul>
//       <Link
//           href="/car"
//           className="  md:hidden mt-10 md:mt-0 bg-[#ff2525] flex justify-center  items-center gap-2 rounded-lg text-white px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-[#ff3232]"
//         >
//           Explore Now <GoArrowUpRight className="w-[18px] h-[18px]" />
//         </Link>
     
//   </div>
//   );
// };

// export default Package;
"use client";
import { GoArrowUpRight } from "react-icons/go";
import React from "react";
import Link from "next/link";
import { data } from "@/store/Packagedata";
import Packagecard from "@/utilities/Packagecard";

const Package = () => {
  return (
    <div className="container mx-auto px-3 mt-28 max-sm:mt-17">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 max-sm:items-start max-md:items-start max-md:mb-8 ">
        <div>
          <h2 className="text-[#121212] text-[16px] uppercase tracking-wide">
            Our Travel Packages
          </h2>
          <h1
            className="text-[32px] md:text-[43px] font-black text-[#1B1917] leading-tight max-md:text-[37px]"
          >
            Discover,{" "}
            <span className="text-[#ff2525]">Beyond the Destination</span>
          </h1>
        </div>

        {/* TOP BUTTON - visible only on lg and above */}
        <Link
          href="/car"
          className="hidden lg:flex max-lg:text-nowrap mt-6 md:mt-0 bg-[#ff2525] justify-center items-center gap-2 rounded-lg text-white px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-[#ff3232]"
        >
          Explore Now <GoArrowUpRight className="w-[18px] h-[18px]" />
        </Link>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
        {data.map((item, index) => (
          <Packagecard key={index} item={item} />
        ))}
      </ul>

      {/* BOTTOM BUTTON - visible only on sm & md */}
      <Link
        href="/car"
        className="flex lg:hidden mt-10 bg-[#ff2525] justify-center items-center gap-2 rounded-lg text-white px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-[#ff3232]"
      >
        Explore Now <GoArrowUpRight className="w-[18px] h-[18px]" />
      </Link>
    </div>
  );
};

export default Package;
