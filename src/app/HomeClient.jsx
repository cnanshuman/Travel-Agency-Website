"use Client";

import React from "react";
import Nav from "./_home/Nav";
import Hero from "./_home/Hero";
import About from "./_home/About";
import Car from "./_home/Car";

const HomeClient = () => {
  return (
    <>
      <main className=" relative w-full h-full">
        <Nav />
        <Hero />
        <About />
        <Car />
      </main>
    </>
  );
};

export default HomeClient;
