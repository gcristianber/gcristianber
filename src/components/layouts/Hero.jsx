import React from "react";

import {
  Moon,
  Sun,
  House,
  BriefcaseBusiness,
  Coffee,
  Inbox,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative isolate px-6 lg:px-8">
      <div className="h-screen flex flex-col items-center">
        <div className="flex-grow flex items-center justify-center">
          <div className="">
            <div className="text-center mb-4">
              <a
                href="#"
                role="button"
                className="text-sm font-medium bg-white dark:bg-neutral-800 dark:text-neutral-100 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors
              fill-red-500 inline-flex items-center gap-4"
              >
                <img
                  alt=""
                  src="./assets/images/me.jpg"
                  className="inline-block h-6 w-6 rounded-full ring-2 object-cover ring-white dark:ring-neutral-700"
                />
                Hi, I'm Cristianber
              </a>
            </div>
            <div className="flex justify-center">
              <div>
                <h1 className="text-7xl font-bold tracking-wider text-neutral-900 dark:text-neutral-100">
                  A DESIGNER
                </h1>
                <h1 className="text-7xl font-bold tracking-wider text-neutral-900 dark:text-neutral-100">
                  & DEVELOPER
                </h1>
              </div>
            </div>

            <div className="w-full max-w-prose text-center mt-5">
              <p className=" text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                Bringing modern websites to life with exceptional{" "}
                <span className="text-green-500">Design</span>, seamless{" "}
                <span className="text-orange-500">Experience</span>, and
                powerful <span className="text-violet-500">Functionality</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
