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

const HomeClient = () => {
  return (
    <>
      <main className=" relative w-full h-full">
        <Nav />
        <MobileNav />
        <Hero />
        <About />
        <Car />
        <Package />
        <Choose />
        <Services />
        <Enquiry />
        <Why />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
};

export default HomeClient;
