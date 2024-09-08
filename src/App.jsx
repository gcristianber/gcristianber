import React, { useState } from "react";
import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/layouts/Hero";
import Highlight from "@/components/layouts/Highlight";
import Projects from "@/components/layouts/Projects";
import Footer from "@/components/layouts/Footer";

const App = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      {/* <Highlight/> */}
      {/* <Projects /> */}
      <Footer />
    </div>
    // Navbar
    // Hero
    // Highlight
    // Techstacks
    // Web Projects
    // Footer
  );
};

export default App;
