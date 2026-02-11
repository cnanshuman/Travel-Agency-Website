import Choose from '@/app/_home/Choose'
import Testimonial from '@/app/_home/Testimonial'
import Why from '@/app/_home/Why'
import React from 'react'

const Enquiry = () => {
  return (
   <>
 <div className="">
     
      <div
        style={{
          backgroundImage: `url(/enquiry.jpg)`,
        }}
        className="relative  bnr bg-cover bg-center bg-no-repeat w-full h-[400px] overflow-hidden"
      >
        <div className="container mx-auto p-4 relative z-10 h-full flex items-center justify-center">
          <h1 className=" text-white  max-md:text-5xl text-8xl font-bold">Enquiry</h1>
        </div>
      </div>

     
      
    </div>

    <Testimonial />
<Choose />
<Why />

   </>
  )
}

export default Enquiry