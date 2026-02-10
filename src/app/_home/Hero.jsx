"use client";
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  Car,
  Users,
  ArrowRightLeft,
  ChevronDown,
} from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emailjs from "@emailjs/browser";

const FormFieldWrapper = ({ label, icon: Icon, children, isSelect = false }) => (
  <div className="p-4 md:py-7 border-b md:border-b-0 md:border-r border-gray-100 last:border-r-0 last:bg-gray-50/50 w-full relative group">
    <label className="text-[12px] font-medium text-[#676767] flex items-center gap-1 mb-2 leading-0">
      <Icon size={12} className="text-[#c1082b]" /> {label}
    </label>
    <div className="relative flex items-center">
      {children}
      {isSelect && (
        <ChevronDown
          size={14}
          className="absolute right-0 text-gray-400 pointer-events-none group-hover:text-[#676767] transition-colors"
        />
      )}
    </div>
  </div>
);

const countryCodes = [
  { code: "+91", label: "India" },
  { code: "+81", label: "Japan" },
  { code: "+1", label: "USA" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Australia" },
];

const mainCities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];

const HeroComponent = () => {
  const [tripType, setTripType] = useState("Airport Transfer");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("19:00");
  const [persons, setPersons] = useState(1);
  const [carType, setCarType] = useState("honda-city");
  const [popupOpen, setPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [additionalMessage, setAdditionalMessage] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const pickupRef = useRef();
  const dropRef = useRef();
=======
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Clock, Car, Users, ArrowRightLeft, ChevronDown, ThumbsUp } from 'lucide-react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

const HeroComponent = () => {
  const [tripType, setTripType] = useState('Local');
>>>>>>> 25763b70ac69ad78fb79ed68515bc58dfcb0ced2

  const timeOptions = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
<<<<<<< HEAD
      const t = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
      timeOptions.push(t);
    }
  }

  const optionStyle = { fontSize: "14px", fontWeight: "500" };

  const fetchSuggestions = async (query, setFunc) => {
    if (!query) {
      setFunc([]);
      return;
    }
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query
        )}&countrycodes=IN&format=json&addressdetails=1&limit=5`
      );
      const data = await res.json();

      const formatted = data
        .map((item) => {
          const { city, town, village, state, suburb, road } = item.address;
          let name = city || town || village || suburb || road || item.display_name;
          if (state) name += `, ${state}`;
          return { ...item, display_name: name };
        })
        .sort((a, b) => {
          const aMain = mainCities.some((c) => a.display_name.includes(c));
          const bMain = mainCities.some((c) => b.display_name.includes(c));
          return bMain - aMain;
        });

      setFunc(formatted);
    } catch (err) {
      console.error("OSM autocomplete error:", err);
      setFunc([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickupRef.current && !pickupRef.current.contains(e.target)) {
        setPickupSuggestions([]);
      }
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropSuggestions([]);
      }
      if (!e.target.closest(".react-calendar")) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateTravelForm = () => {
    if (!pickupLocation.trim()) { alert("Pickup Location is required"); return false; }
    if (tripType !== "Local" && !dropLocation.trim()) { alert("Drop Location is required"); return false; }
    if (!date) { alert("Please select a date"); return false; }
    if (!time) { alert("Please select a time"); return false; }
    if (!persons || persons < 1) { alert("Please select number of persons"); return false; }
    if (!carType) { alert("Please select car type"); return false; }
    return true;
  };

  const handleBookEnquiry = () => {
    if (validateTravelForm()) setPopupOpen(true);
  };

  const validatePopupForm = () => {
    if (!name.trim()) { alert("Name is required"); return false; }
    if (phone.length < 6) { alert("Please enter a valid phone number"); return false; }
    return true;
  };

  const handleSubmit = async () => {
    if (!validatePopupForm()) return;

    const templateParams = {
      name,
      phone: countryCode + phone,
      tripType,
      pickupLocation,
      dropLocation: tripType !== "Local" ? dropLocation : "N/A",
      date: date ? date.toLocaleDateString("en-GB") : "N/A",
      time,
      persons,
      carType,
      additionalMessage,
    };

    try {
      await emailjs.send(
        "service_rcq9jnv",
        "template_oyr3ymh",
        templateParams,
        "f9hDOyLzOfXevMe4O"
      );
      alert("Booking Enquiry sent successfully!");
      setPopupOpen(false);
      resetForm();
    } catch (error) {
      alert("Failed to send enquiry. Please try again.");
      console.error(error);
    }
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setCountryCode("+91");
    setPickupLocation("");
    setDropLocation("");
    setPickupSuggestions([]);
    setDropSuggestions([]);
    setDate(null);
    setTime("19:00");
    setPersons(1);
    setCarType("honda-city");
    setTripType("Airport Transfer");
    setAdditionalMessage("");
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20  bg-zinc-900 font-custom">
=======
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
>>>>>>> 25763b70ac69ad78fb79ed68515bc58dfcb0ced2
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
<<<<<<< HEAD
            {["Airport Transfer", "Outstation", "Local"].map((tab) => (
              <label key={tab} className="flex items-center gap-2 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="tripType"
                  checked={tripType === tab}
                  onChange={() => setTripType(tab)}
                  className="w-4 h-4 accent-[#e20000]"
                />
                <span className={tripType === tab ? " font-medium" : "text-[#676767]"}>{tab}</span>
=======
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
>>>>>>> 25763b70ac69ad78fb79ed68515bc58dfcb0ced2
              </label>
            ))}
          </div>

<<<<<<< HEAD
          <div className={`mb-[12px] shadow-[-1px_2px_8px_0px_rgba(0,0,0,0.15)] grid grid-cols-1 md:grid-cols-2 ${tripType === "Local" ? "lg:grid-cols-5" : "lg:grid-cols-6"} border border-gray-100 rounded-[1.5rem] bg-white relative`}>

            {/* Pickup Location */}
            <div ref={pickupRef} className="relative">
              <FormFieldWrapper label="Pickup Location" icon={MapPin}>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search Location..."
                    value={pickupLocation}
                    onChange={(e) => {
                      const val = e.target.value;
                      setPickupLocation(val);
                      fetchSuggestions(val, setPickupSuggestions);
                    }}
                    className="w-full text-[27px] font-extrabold outline-none bg-transparent placeholder:text-black"
                  />
                  {pickupSuggestions.length > 0 && (
                    <ul className="absolute top-[110%] left-0 w-full md:w-[350px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] max-h-[400px] overflow-y-auto z-[999] rounded-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <li className="px-4 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">Suggested Locations</li>
                      {pickupSuggestions.map((item) => (
                        <li
                          key={item.place_id}
                          className="px-4 py-3 hover:bg-red-50 cursor-pointer flex items-start gap-3 transition-colors border-b border-gray-50 last:border-0"
                          onClick={() => {
                            setPickupLocation(item.display_name);
                            setPickupSuggestions([]);
                          }}
                        >
                          <MapPin size={16} className="text-[#c1082b] mt-1 flex-shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-[15px] font-bold text-gray-800 leading-tight">{item.display_name.split(',')[0]}</span>
                            <span className="text-[12px] text-gray-500 line-clamp-1">{item.display_name.split(',').slice(1).join(',')}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FormFieldWrapper>
            </div>

            {/* Drop Location */}
            {tripType !== "Local" && (
              <div className="relative" ref={dropRef}>
                <FormFieldWrapper label="Drop Location" icon={MapPin}>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Search Location..."
                      value={dropLocation}
                      onChange={(e) => {
                        const val = e.target.value;
                        setDropLocation(val);
                        fetchSuggestions(val, setDropSuggestions);
                      }}
                      className="w-full text-[27px] font-extrabold outline-none bg-transparent placeholder:text-black"
                    />
                    {dropSuggestions.length > 0 && (
                      <ul className="absolute top-[110%] left-0 w-full md:w-[350px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] max-h-[400px] overflow-y-auto z-[999] rounded-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <li className="px-4 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">Suggested Locations</li>
                        {dropSuggestions.map((item) => (
                          <li
                            key={item.place_id}
                            className="px-4 py-3 hover:bg-red-50 cursor-pointer flex items-start gap-3 transition-colors border-b border-gray-50 last:border-0"
                            onClick={() => {
                              setDropLocation(item.display_name);
                              setDropSuggestions([]);
                            }}
                          >
                            <MapPin size={16} className="text-[#c1082b] mt-1 flex-shrink-0" />
                            <div className="flex flex-col">
                              <span className="text-[15px] font-bold text-gray-800 leading-tight">{item.display_name.split(',')[0]}</span>
                              <span className="text-[12px] text-gray-500 line-clamp-1">{item.display_name.split(',').slice(1).join(',')}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
=======
          <div className={`shadow-[-1px_2px_8px_0px_rgba(0,0,0,0.15)] grid grid-cols-1 md:grid-cols-2 ${tripType === 'Local' ? 'lg:grid-cols-5' : 'lg:grid-cols-6'} border border-gray-100 rounded-[1.5rem] overflow-hidden bg-white`}>
            <FormFieldWrapper label="Pickup Location" icon={MapPin}>
              <input type="text" placeholder="Search Location..." className="w-full text-[27px] font-extrabold outline-none bg-transparent placeholder:text-black" />
            </FormFieldWrapper>

            {tripType !== 'Local' && (
              <div className="relative">
                <FormFieldWrapper label="Drop Location" icon={MapPin}>
                  <input type="text" placeholder="Search Location..." className="w-full text-[27px] font-extrabold outline-none bg-transparent placeholder:text-black" />
>>>>>>> 25763b70ac69ad78fb79ed68515bc58dfcb0ced2
                </FormFieldWrapper>
                <div className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-100 rounded-full p-1 shadow-sm">
                  <ArrowRightLeft size={12} className="text-[#676767]" />
                </div>
              </div>
            )}

<<<<<<< HEAD
            {/* Date */}
            <FormFieldWrapper label="Date" icon={CalendarIcon}>
              <div className="relative w-full">
                <input
                  type="text"
                  readOnly
                  placeholder="Select Date"
                  value={date ? date.toLocaleDateString("en-GB") : ""}
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-full text-[27px] font-extrabold outline-none bg-transparent cursor-pointer placeholder:text-black"
                />
                {showCalendar && (
                  <div className="absolute top-[110%] left-0 z-50 bg-white p-2 rounded-xl shadow-lg">
                    <Calendar
                      onChange={(d) => {
                        setDate(d);
                        setShowCalendar(false);
                      }}
                      minDate={new Date()}
                    />
                  </div>
                )}
              </div>
            </FormFieldWrapper>

            {/* Time */}
            <FormFieldWrapper label="Time" icon={Clock} isSelect={true}>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full text-[27px] font-extrabold outline-none bg-transparent cursor-pointer appearance-none"
              >
                {timeOptions.map((t) => (
                  <option key={t} value={t} style={optionStyle}>{t}</option>
=======
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
>>>>>>> 25763b70ac69ad78fb79ed68515bc58dfcb0ced2
                ))}
              </select>
            </FormFieldWrapper>

<<<<<<< HEAD
            {/* Persons */}
            <FormFieldWrapper label="Persons" icon={Users} isSelect={true}>
              <select
                value={persons}
                onChange={(e) => setPersons(parseInt(e.target.value))}
                className="w-full text-[27px] font-extrabold outline-none bg-transparent cursor-pointer appearance-none"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1} style={optionStyle}>
                    {i + 1} Person{i > 0 ? "s" : ""}
                  </option>
=======
            <FormFieldWrapper label="Persons" icon={Users} isSelect={true}>
              <select className="w-full text-[27px] font-extrabold outline-none bg-transparent cursor-pointer appearance-none">
                {[...Array(10)].map((_, i) => (
                  <option key={i+1} value={i+1} style={optionStyle}>{i+1} Person{i > 0 ? 's' : ''}</option>
>>>>>>> 25763b70ac69ad78fb79ed68515bc58dfcb0ced2
                ))}
              </select>
            </FormFieldWrapper>

<<<<<<< HEAD
            {/* Car Type */}
            <FormFieldWrapper label="Car Type" icon={Car} isSelect={true}>
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full text-[27px] font-extrabold outline-none bg-transparent cursor-pointer appearance-none"
              >
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
<div class="mt-8  flex items-center justify-center gap-2 px-2 text-center"><p class="text-[10px] md:text-[13px] font-semibold text-gray-700 leading-tight">Explore the all-new Customized Holiday Packages from Kulbir Travels - Avail <span class="bg-[#c1082b] text-white px-2 py-0.5 font-black rounded mx-1">15% OFF</span> on your next Outstation Booking.</p></div>
          <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-full max-w-[280px] md:max-w-xs px-4">
            <button
              onClick={handleBookEnquiry}
              className="bg-[#ff2525] hover:bg-[#e61e1e] transition-all p-4 md:p-6 md:py-4 rounded-xl md:rounded-1xl font-black text-white flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(255,37,37,0.4)] uppercase text-xs md:text-sm"
            >
=======
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
>>>>>>> 25763b70ac69ad78fb79ed68515bc58dfcb0ced2
              <Search size={18} strokeWidth={4} />
              Book an Enquiry
            </button>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Popup Form */}
      {popupOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-70 px-4 font-custom">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 md:p-10 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setPopupOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-6">Complete Your Booking</h3>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-200 p-3 rounded-lg w-full"
              />
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border border-gray-200 p-3 rounded-lg"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>{c.label} ({c.code})</option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
                  className="border border-gray-200 p-3 rounded-lg flex-1"
                />
              </div>
              <textarea
                placeholder="Additional Message"
                value={additionalMessage}
                onChange={(e) => setAdditionalMessage(e.target.value)}
                className="border border-gray-200 p-3 rounded-lg w-full"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#ff2525] hover:bg-[#e61e1e] transition-all p-4 rounded-xl font-bold text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
=======

   
      </div>
>>>>>>> 25763b70ac69ad78fb79ed68515bc58dfcb0ced2
    </section>
  );
};

<<<<<<< HEAD
export default HeroComponent;
=======
export default HeroComponent;
>>>>>>> 25763b70ac69ad78fb79ed68515bc58dfcb0ced2
