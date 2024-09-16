import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Moon, Sun } from "lucide-react";

const App = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", enabled);
  }, [enabled]);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark", enabled);
    setEnabled(!enabled);
  };

  return (
    <ReactLenis root>
      <Navbar />
      <div className="mx-auto max-w-7xl relative">
        <Outlet />
        <Footer />

        <div class="fixed bottom-6 right-6 lg:hidden">
          <button
            onClick={toggleDarkMode}
            class={`p-0 w-14 h-14 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-100 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:text-neutral-100 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none  `}
          >
            {enabled ? (
              <Sun size={24} strokeWidth={2} />
            ) : (
              <Moon size={24} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
