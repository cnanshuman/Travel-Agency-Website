// import React from "react";
// import {
//   FaLeaf,
//   FaUmbrellaBeach,
//   FaMapMarkedAlt,
//   FaThumbsUp,
// } from "react-icons/fa";
// import Image from "next/image";
// import beach from "../../assests/images/beach.jpg";

// const cards = [
//   {
//     id: "01",
//     title: "Explore the Nature",
//     desc: "Reconnect with breathtaking landscapes, fresh air, and serene escapes that bring you closer to the beauty of nature.",
//     icon: <FaLeaf className="text-[#ff2525] text-2xl" />,
//   },
//   {
//     id: "02",
//     title: "Tour Guide",
//     desc: "Travel with expert guides who know every hidden story, ensuring your journey is rich with culture and discovery.",
//     icon: <FaUmbrellaBeach className="text-[#ff2525] text-2xl" />,
//   },
//   {
//     id: "03",
//     title: "Hidden Gems",
//     desc: "Uncover secret spots and lesser-known wonders that most travelers miss, making your trip truly unforgettable.",
//     icon: <FaMapMarkedAlt className="text-[#ff2525] text-2xl" />,
//   },
//   {
//     id: "04",
//     title: "Simple Booking",
//     desc: "Plan your perfect getaway with a hassle-free booking process designed to save you time and effort.",
//     icon: <FaThumbsUp className="text-[#ff2525] text-2xl" />,
//   },
// ];

// const Choose = () => {
//   return (
//     <>
//       <div className="bg-[#f3f3f4] py-22 mt-[100px]">
//         <div className="container mx-auto px-6">
//           <div className="flex max-lg:flex-col md:flex-row justify-between items-center max-sm:items-start max-md:items-start ">
//             <div>
//               <h1 className="text-[43px] font-black text-[#1B1917] mb-4 md:mb-0 leading-tight max-sm:text-[35px] max-sm:items-start">
//                 Adventure is Just{" "}
//                 <span className="text-[#ff2525] block">One Click Away</span>
//               </h1>
//             </div>
//             <p className="w-full md:w-[40%] flex justify-end text-[18px] text-[#6c6c6c] leading-7 max-sm:block max-md:block   ">
//               Curated luxury escapes designed to
//               <br className=" max-md:hidden max-lg:hidden" /> recharge your
//               soul. From serene
//               <br className=" max-md:hidden max-lg:hidden" />
//               beaches to five-star retreats, we’ll get
//               <br className=" max-md:hidden max-lg:hidden" />
//               you there in style.
//             </p>
//           </div>

//           <div className="border border-[#e3e3e3] my-12"></div>

//           <div className="flex flex-col  gap-10 items-stretch   ">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
//               {cards.map((card) => (
//                 <div
//                   key={card.id}
//                   className="bg-white rounded-2xl p-6  border border-[#e3e3e3]"
//                 >
//                   <div className="flex justify-between items-center mb-4">
//                     <div className="flex items-center justify-center rounded-full w-[65px] h-[65px] bg-[#fafafa] border border-[#e3e3e3]">
//                       {card.icon}
//                     </div>
//                     <span className="text-[#1B1917] text-[18px] font-medium">
//                       {card.id}
//                     </span>
//                   </div>
//                   <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
//                   <p className="text-[#6c6c6c] text-[16px] leading-7 xl:line-clamp-2">
//                     {card.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="flex-1 h-full">
//               <Image
//                 src={beach}
//                 alt="Beach"
//                 className="rounded-2xl w-full h-full object-cover xl:h-[470px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Choose;
import React from "react";
import {
  FaLeaf,
  FaUmbrellaBeach,
  FaMapMarkedAlt,
  FaThumbsUp,
} from "react-icons/fa";
import Image from "next/image";
import beach from "../../assests/images/beach.jpg";

const cards = [
  {
    id: "01",
    title: "Explore the Nature",
    desc: "Reconnect with breathtaking landscapes, fresh air, and serene escapes that bring you closer to the beauty of nature.",
    icon: <FaLeaf className="text-[#ff2525] text-2xl" />,
  },
  {
    id: "02",
    title: "Tour Guide",
    desc: "Travel with expert guides who know every hidden story, ensuring your journey is rich with culture and discovery.",
    icon: <FaUmbrellaBeach className="text-[#ff2525] text-2xl" />,
  },
  {
    id: "03",
    title: "Hidden Gems",
    desc: "Uncover secret spots and lesser-known wonders that most travelers miss, making your trip truly unforgettable.",
    icon: <FaMapMarkedAlt className="text-[#ff2525] text-2xl" />,
  },
  {
    id: "04",
    title: "Simple Booking",
    desc: "Plan your perfect getaway with a hassle-free booking process designed to save you time and effort.",
    icon: <FaThumbsUp className="text-[#ff2525] text-2xl" />,
  },
];

const Choose = () => {
  return (
    <>
      <div className="bg-[#f3f3f4] py-22 mt-[100px]">
        <div className="container mx-auto px-6">
          <div className="flex max-lg:flex-col md:flex-row justify-between items-center max-sm:items-start max-md:items-start ">
            <div>
              <h1 className="text-[43px] font-black text-[#1B1917] mb-4 md:mb-0 leading-tight max-sm:text-[35px] max-sm:items-start">
                Adventure is Just{" "}
                <span className="text-[#ff2525] block">One Click Away</span>
              </h1>
            </div>
            <p className="w-full md:w-[40%] flex justify-end text-[18px] text-[#6c6c6c] leading-7 max-sm:block max-md:block   ">
              Curated luxury escapes designed to
              <br className=" max-md:hidden max-lg:hidden" /> recharge your
              soul. From serene
              <br className=" max-md:hidden max-lg:hidden" />
              beaches to five-star retreats, we’ll get
              <br className=" max-md:hidden max-lg:hidden" />
              you there in style.
            </p>
          </div>

          <div className="border border-[#e3e3e3] my-12"></div>

          {/* CHANGED: flex-col on mobile, flex-row on xl */}
          <div className="flex flex-col xl:flex-row gap-10 items-stretch">
            
            {/* Left side: cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl p-6 border border-[#e3e3e3]"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center justify-center rounded-full w-[65px] h-[65px] bg-[#fafafa] border border-[#e3e3e3]">
                      {card.icon}
                    </div>
                    <span className="text-[#1B1917] text-[18px] font-medium">
                      {card.id}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                  <p className="text-[#6c6c6c] text-[16px] leading-7 xl:line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right side: image */}
            <div className="flex-1 h-full">
              <Image
                src={beach}
                alt="Beach"
                className="rounded-2xl w-full h-full object-cover xl:h-[470px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
