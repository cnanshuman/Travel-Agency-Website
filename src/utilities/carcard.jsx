"use client";
import Image from "next/image";
import Link from "next/link";

export default function Carcard({ item }) {
  return (
    <>
      <li className="max-md:mb-[17px] group border border-[#e2e2e2] bg-white p-[18px] w-[24%] max-sm:justify-left max-sm:w-fit max-md:w-12/25 max-lg:w-[350px] max-sm:mb-[12px] rounded-2xl pb-8 overflow-hidden max-xl:w-[308px]">
        <Link href="/enquiry" target="_blank" className="block">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={item.img}
              alt={item.head} // ✅ kept alt as before
              width={336}
              height={261}
              className="rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h1 className="text-[#1B1917] text-2xl font-medium mb-2 mt-4">
            {item.head}
          </h1>
          <h3 className="text-[14px] w-fit mb-3">{item.para}</h3>

          <h2 className="text-[#121212] text-sm transition-all duration-300 mb-6 underline group-hover:text-[#ff2525]">
            Put a Enquiry Now
          </h2>
        </Link>
      </li>
    </>
  );
}
