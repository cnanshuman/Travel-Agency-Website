"use Client";

import React from "react";
import Nav from "./_home/Nav";
import Hero from "./_home/Hero";
import About from "./_home/About";
import Car from "./_home/Car";
import Package from "./_home/Package";
import Choose from "./_home/Choose";
import Services from "./_home/Services";

const HomeClient = () => {
  return (
    <>
      <main className=" relative w-full h-full">
        <Nav />
        <Hero />
        <About />
        <Car />
        <Package />
        <Choose />
        <Services />
      </main>
    </>
  );
};

export default HomeClient;
