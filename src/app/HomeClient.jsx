"use Client";

import React from "react";
import Nav from "./_home/Nav";
import Hero from "./_home/Hero";
import About from "./_home/About";
import Car from "./_home/Car";
import Package from "./_home/Package";
import Choose from "./_home/Choose";
import Services from "./_home/Services";
import Enquiry from "./_home/Enquiry";
import Why from "./_home/Why";
import Footer from "./_home/Footer";
import Testimonial from "./_home/Testimonial";
import MobileNav from "./_home/MobileNav";
import TourPackage from "./_home/TourPackage";

const HomeClient = () => {
  return (
    <>
      <main className="  ">
        
        <Hero />
        <About />
        <Car />
        <Package />
        <TourPackage />
        <Choose />
        <Services />
        <Enquiry />
        <Why />
        <Testimonial />
        
      </main>
    </>
  );
};

export default HomeClient;
