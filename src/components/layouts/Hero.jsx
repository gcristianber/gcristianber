import React from "react";

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
                className="text-sm font-medium bg-white px-4 py-2 rounded-full hover:bg-gray-100 transition-colors
              fill-red-500 inline-flex items-center gap-4"
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                />
                Hi, I'm Cristianber
              </a>
            </div>
            <div className="flex justify-center">
              <div>
                <h1 className="text-7xl font-bold tracking-wider">
                  A DESIGNER
                </h1>
                <h1 className="text-7xl font-bold tracking-wider">
                  & DEVELOPER
                </h1>
              </div>
            </div>

            <div className="w-full max-w-prose text-center mt-5">
              <p className=" text-lg font-semibold text-slate-900">
                Bringing modern websites to life with exceptional{" "}
                <span className="text-green-500">Design</span>, seamless{" "}
                <span className="text-orange-500">Experience</span>, and
                powerful <span className="text-violet-500">Functionality</span>
              </p>
            </div>
          </div>
        </div>
        <footer className="w-full py-4 flex items-center justify-between">
          <h1>
            <span>Design, Develop & Innovate</span>
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div>
              <a
                href="#"
                role="button"
                className="inline-flex items-center bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <box-icon name="facebook-circle" type="logo"></box-icon>
              </a>
            </div>
            <div>
              <a
                href="#"
                role="button"
                className="inline-flex items-center bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <box-icon type="logo" name="linkedin-square"></box-icon>
              </a>
            </div>
            <div>
              <a
                href="#"
                role="button"
                className="inline-flex items-center bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <box-icon name="github" type="logo"></box-icon>
              </a>
            </div>
          </div>

          <div>
            <a
              href="#"
              role="button"
              className="text-sm font-medium bg-white lg:px-4 lg:py-2 rounded-full hover:bg-gray-100 transition-colors
              fill-red-500 inline-flex items-center gap-2"
            >
              <box-icon name="gmail" type="logo"></box-icon>
              <span className="hidden lg:block">gcristianber@gmail.com</span>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Hero;
