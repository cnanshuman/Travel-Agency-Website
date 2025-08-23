"use Client";

import React from "react";
import Nav from "./_home/Nav";
import Hero from "./_home/Hero";

const HomeClient = () => {
  return (
    <>
      <main className=" relative w-full h-full">
        <Nav />
        <Hero />
      </main>
    </>
  );
};

export default HomeClient;
