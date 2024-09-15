import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const App = () => {

  return (
    <ReactLenis root>
     
      <Navbar />
      <div className="mx-auto max-w-7xl">
        <Outlet />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
