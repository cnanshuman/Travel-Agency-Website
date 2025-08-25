"use client";
import React from "react";

const Enquiry = () => {
  return (
    <>
      <div
        className="mt-18 h-screen bg-cover bg-center flex items-center justify-center bg-fixed"
        style={{ backgroundImage: "url('/travel.jpg')" }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[#f1f1f1] p-8 z-[999] ">
            <h1 className="text-[#121212] text-2xl font-semibold mb-6">
              Book Your Enquiry Now
            </h1>

            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Car Type *</label>
                <select className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400">
  <option>Sedan (Indigo/Etios/Dzire)</option>
  <option>SUV (Innova/Xylo)</option>
  <option>Luxury</option>
  <option>Toyota Innova</option>
  <option>Force Urbania</option>
  <option>Toyota Innova Crysta</option>
  <option>Maruti Swift Dzire</option>
  <option>Volvo Bus</option>
</select>

              </div>

             
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Pick Up Location *</label>
                <input
                  type="text"
                  placeholder="Pick up Location"
                  className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400"
                />
              </div>

           
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Drop-off Location *</label>
                <input
                  type="text"
                  placeholder="Drop-off Location"
                  className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400"
                />
              </div>

          
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Pick Up Date *</label>
                <input
                  type="date"
                  className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400"
                />
              </div>

            
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Pickup Time *</label>
                <input
                  type="time"
                  className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400"
                />
              </div>

           
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Passengers *</label>
                <input
                  type="number"
                  placeholder="No. of Passengers"
                  className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400"
                />
              </div>

           
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Your Name *</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400"
                />
              </div>

            
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Phone *</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400"
                />
              </div>

            
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="outline-0 bg-[#E4E4E4] border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-[#ff2525]-400"
                />
              </div>

         

            
              <div className="md:col-span-3 flex justify-start">

                <button
                  type="submit"
                  className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-[#ff2525] transition"
                >
                  Book Now »
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
