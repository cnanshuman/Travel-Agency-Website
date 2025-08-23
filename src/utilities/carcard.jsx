import React from 'react'
import Image from 'next/image';
import Link from "next/link";

const carcard = ({ item, index }) => {
  return (
    
    <li className='group border border-[#d8d8d8] bg-white p-[18px] w-[24%] rounded-2xl  pb-8 overflow-hidden'>
      <Link href="/enquiry" target='_blank' className="block">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={item.img}
            className='rounded-2xl transform transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        <h1 className='text-[#1B1917] text-2xl font-medium mb-2 mt-4'>{item.head}</h1>
        <h3 className='text-[14px] w-fit mb-3'>{item.para}</h3>
        
        <Link
          href="/enquiry"
          className="text-[#121212] text-sm transition-all duration-300 mb-6 underline group-hover:text-[#ff2525]"
        >
          Put a Enquiry Now
        </Link>
      </Link>
    </li>
  )
}

export default carcard
