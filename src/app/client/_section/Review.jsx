import Services from '@/app/_home/Services'
import Testimonial from '@/app/_home/Testimonial'
import Why from '@/app/_home/Why'
import React from 'react'

const Review = () => {
  return (
    <>
    <div className="mb-10">
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url(/client-bnr.jpg)`,
        }}
        className="relative bnr  bg-cover bg-center bg-no-repeat w-full h-[400px] overflow-hidden"
      >
        <div className="container mx-auto p-4 relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white  max-md:text-5xl text-8xl font-bold">Happy Clients</h1>
        </div>
      </div>

     
      
    </div>
    <Testimonial />
    <Services />
    <Why />
    
    
    
    </>
  )
}

export default Review