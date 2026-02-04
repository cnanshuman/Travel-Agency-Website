"use client";
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Clock, Car, Users, ArrowRightLeft, ChevronDown, ThumbsUp } from 'lucide-react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

const HeroComponent = () => {
  const [tripType, setTripType] = useState('Local');

  const timeOptions = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const time = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
      timeOptions.push(time);
    }
  }

  const FormFieldWrapper = ({ label, icon: Icon, children, isSelect = false }) => (
    <div className="p-4 md:py-7 border-b md:border-b-0 md:border-r border-gray-100 last:border-r-0 last:bg-gray-50/50 w-full relative group">
      <label className="text-[12px] font-medium text-[#676767] flex items-center gap-1 mb-2 leading-0 ">
        <Icon size={12} className="text-[#c1082b]" /> {label}
      </label>
      <div className="relative flex items-center">
        {children}
        {isSelect && (
          <ChevronDown size={14} className="absolute right-0 text-gray-400 pointer-events-none group-hover:text-[#676767] transition-colors" />
        )}
      </div>
    </div>
  );

  // Common style for the dropdown options
  const optionStyle = { fontSize: '14px', fontWeight: '500' };

  return (
    <section 
      style={{ fontFamily: "'Inter Tight', sans-serif" }} 
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-zinc-900"
    >
      <div className="absolute inset-0 z-0 h-full w-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
          <source src="/demo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      </div>

      <div className="relative z-20 w-full max-w-7xl">
        <div className="text-center mb-8 select-none mt-10">
          <h1 className="text-2xl md:text-[38px] font-normal text-white leading-tight">
            Experience Hassle-Free Online Cab Booking in <span className="font-black">INDIA</span>
          </h1>
          <h2 className="text-xl md:text-[35px] font-black text-white mt-1">
            Fast, Easy & Reliable – Book Your Cab Now
          </h2>
        </div>

        <div className="bg-white rounded-[1rem] md:rounded-[1.5rem] shadow-2xl p-6 md:p-10 relative">
          <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-6 text-sm font-bold text-gray-400">
            {['Airport Transfer', 'Outstation', 'Local'].map((tab) => (
              <label key={tab} className="flex items-center gap-2 cursor-pointer transition-all">
                <input 
                  type="radio" 
                  name="tripType" 
                  checked={tripType === tab}
                  onChange={() => setTripType(tab)}
                  className="w-4 h-4 accent-[#e20000]" 
                />
                <span className={tripType === tab ? ' font-medium' : 'text-[#676767]'}>{tab}</span>
              </label>
            ))}
          </div>

          <div className={`shadow-[-1px_2px_8px_0px_rgba(0,0,0,0.15)] grid grid-cols-1 md:grid-cols-2 ${tripType === 'Local' ? 'lg:grid-cols-5' : 'lg:grid-cols-6'} border border-gray-100 rounded-[1.5rem] overflow-hidden bg-white`}>
            <FormFieldWrapper label="Pickup Location" icon={MapPin}>
              <input type="text" placeholder="Search Location..." className="w-full text-[27px] font-extrabold outline-none bg-transparent placeholder:text-black" />
            </FormFieldWrapper>

            {tripType !== 'Local' && (
              <div className="relative">
                <FormFieldWrapper label="Drop Location" icon={MapPin}>
                  <input type="text" placeholder="Search Location..." className="w-full text-[27px] font-extrabold outline-none bg-transparent placeholder:text-black" />
                </FormFieldWrapper>
                <div className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-100 rounded-full p-1 shadow-sm">
                  <ArrowRightLeft size={12} className="text-[#676767]" />
                </div>
              </div>
            )}

            <FormFieldWrapper label="Date" icon={Calendar}>
              <Flatpickr
                placeholder="Select Date"
                options={{ showMonths: 2, minDate: "today", dateFormat: "d M, Y" }}
                className="w-full text-[27px] font-extrabold outline-none bg-transparent cursor-pointer placeholder:text-black"
              />
            </FormFieldWrapper>

            <FormFieldWrapper label="Time" icon={Clock} isSelect={true}>
              <select className="w-full text-[27px] font-extrabold outline-none bg-transparent cursor-pointer appearance-none">
                {timeOptions.map(t => (
                  <option key={t} value={t} style={optionStyle} selected={t === "19:00"}>{t}</option>
                ))}
              </select>
            </FormFieldWrapper>

            <FormFieldWrapper label="Persons" icon={Users} isSelect={true}>
              <select className="w-full text-[27px] font-extrabold outline-none bg-transparent cursor-pointer appearance-none">
                {[...Array(10)].map((_, i) => (
                  <option key={i+1} value={i+1} style={optionStyle}>{i+1} Person{i > 0 ? 's' : ''}</option>
                ))}
              </select>
            </FormFieldWrapper>

            <FormFieldWrapper label="Car Type" icon={Car} isSelect={true}>
              <select defaultValue="47" className="w-full text-[27px] font-extrabold outline-none bg-transparent cursor-pointer appearance-none">
            
      
       <option value="honda-city" style={optionStyle}>Honda City</option>
    <option value="innova-v7" style={optionStyle}>Toyota Innova V7</option>
    <option value="swift-dzire" style={optionStyle}>Swift Dzire</option>
    <option value="toyota-etios" style={optionStyle}>Toyota Etios</option>
    <option value="innova-crysta" style={optionStyle}>Innova Crysta</option>
    <option value="maruti-ciaz" style={optionStyle}>Maruti Suzuki Ciaz</option>
<option value="urbania" style={optionStyle}>Tempo Traveller</option>
              </select>
            </FormFieldWrapper>
          </div>

          <div className="mt-8  flex items-center justify-center gap-2 px-2 text-center">
            <p className="text-[10px] md:text-[13px] font-semibold text-gray-700 leading-tight">
              Explore the all-new Customized Holiday Packages from Carzonrent - Avail <span className="bg-[#c1082b] text-white px-2 py-0.5 font-black rounded mx-1">15% OFF</span> on your next Outstation Booking.
            </p>
          </div>

          <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-full max-w-[280px] md:max-w-xs px-4">
            <button className=" bg-[#ff2525] hover:bg-[#e61e1e] transition-all p-4 md:p-6 md:py-4  rounded-xl md:rounded-1xl font-black text-white flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(255,37,37,0.4)] uppercase text-xs md:text-sm  ">
              <Search size={18} strokeWidth={4} />
              Book an Enquiry
            </button>
          </div>
        </div>

   
      </div>
    </section>
  );
};

export default HeroComponent;