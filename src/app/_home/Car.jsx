"use client";
import React from "react";
import Link from "next/link";
import { data } from '../../store/Cardata';
import Carcard from "../../utilities/carcard";
import { GoArrowUpRight } from "react-icons/go";

const Car = () => {
  return (
    <section className="bg-[#fafafa] py-22 my-19">
      <div className="container mx-auto px-4">
       
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-[#121212] rounded-4xl w-fit text-[16px]  uppercase">
              Our Car Offerings
            </h2>
            <h1 className="text-[43px]  font-black text-[#1B1917] mb-4 md:mb-0">
              Every Ride,{" "}
              <span className="text-[#00000080]">a Luxury Experience</span>
            </h1>
          </div>
          <Link
            href="/car"
            className="bg-[#ff2525] flex justify-center items-center gap-1 mx-1 rounded-lg text-white px-6 py-3 transition-all duration-300 hover:bg-[#ff3232]"
          >
            Explore Now <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
          </Link>
        </div>

<ul className="flex flex-wrap w-full items-center mt-9 gap-4   ">
   {data.map((item,index)=>(
    <Carcard item={item} index={index} key={index}/>
   ))} 
</ul>

      </div>
    </section>
  );
};

export default Car; 


// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import Link from "next/link";
// import { data } from '../../store/Cardata';
// import Carcard from "../../utilities/carcard";

// const Car = () => {
//   return (
//     <section className="bg-[#ededed] py-22 my-19">
//       <div className="container mx-auto px-4">
       
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div>
//             <h2 className="text-[#121212] rounded-4xl w-fit text-[16px] uppercase">
//               Our Car Offerings
//             </h2>
//             <h1 className="text-[43px] font-black text-[#1B1917] mb-4 md:mb-0">
//               Every Ride, <span className="text-[#00000080]">a Luxury Experience</span>
//             </h1>
//           </div>
//           <Link
//             href="/car"
//             className="bg-[#ff2525] mx-1 rounded-lg text-white px-6 py-3 transition-all duration-300 hover:bg-[#ff3232]"
//           >
//             Explore Now
//           </Link>
//         </div>

//       <Swiper
//   breakpoints={{
//     0: { slidesPerView: 1, spaceBetween: 10 },        // Mobile
//     1000: { slidesPerView: 3, spaceBetween: 20 },     // Tablet / small desktop
//     1366: { slidesPerView: 4, spaceBetween: 30 },     // Large desktop
//   }}
//   loop={true}
//   autoplay={{ delay: 3000, disableOnInteraction: false }}
//   pagination={false}
//   modules={[Autoplay, Pagination]}
//   className="mySwiper mt-9"
// >
//   {data.slice(0, 8).map((item, index) => (
//     <SwiperSlide key={index}>
//       <Carcard item={item} index={index} />
//     </SwiperSlide>
//   ))}
// </Swiper>

//       </div>
//     </section>
//   );
// };

// export default Car;

