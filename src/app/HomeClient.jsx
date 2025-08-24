"use Client";

import React from "react";
import Nav from "./_home/Nav";
import Hero from "./_home/Hero";
import About from "./_home/About";
import Car from "./_home/Car";
import Package from "./_home/Package";

const HomeClient = () => {
  return (
    <>
      <main className=" relative w-full h-full">
        <Nav />
        <Hero />
        <About />
        <Car />
        <Package />
      </main>
    </>
  );
};

export default HomeClient;
