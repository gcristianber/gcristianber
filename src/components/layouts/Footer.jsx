import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" px-6 lg:px-8 py-8">
      <div className="mx-auto mt-16 rounded-xl ring-1 ring-gray-200 dark:ring-neutral-800 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto relative overflow-hidden">
          <div className="flex mb-40">
            <div className="flex justify-between grow ">
              <div className=" w-full hidden lg:block">
                <h1 className="font-semibold leading-5 text-neutral-900 dark:text-neutral-100">
                  Let's build &<br />
                  design
                </h1>
              </div>
              <div className="w-1/3">
                <h1 className="font-semibold text-sm text-orange-500 mb-4">
                  Explore
                </h1>
                <ul className="">
                  <li className="font-medium text-base lg:text-sm mb-2 text-neutral-900 dark:text-neutral-100">
                    <a href="#">Home</a>
                  </li>
                  <li className="font-medium text-base lg:text-sm mb-2 text-neutral-900 dark:text-neutral-100">
                    <a href="">Timeline</a>
                  </li>
                  <li className="font-medium text-base lg:text-sm mb-2 text-neutral-900 dark:text-neutral-100">
                    <a href="">Showroom</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between grow ">
              <div className="w-full flex flex-col items-start lg:items-end gap-4">
                <div className="flex items-center justify-between gap-6 w-full lg:w-1/2">
                  <div className="text-start">
                    <h5 className="font-bold leading-3 text-sm text-neutral-900 dark:text-neutral-100">Contact Me</h5>
                    <small className="text-xs font-medium  text-neutral-800 dark:text-neutral-200">
                      Say Hello!
                    </small>
                  </div>
                  <Link
                    to="/contact"
                    className="fill-green-500 border border-gray-200 flex items-center bg-white dark:bg-neutral-800 dark:border-neutral-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <box-icon name="right-arrow-alt"></box-icon>
                  </Link>
                </div>
                <div className="flex items-center justify-between gap-6 w-full lg:w-1/2">
                  <div className="text-start">
                    <h5 className="font-bold leading-3 text-sm text-neutral-900 dark:text-neutral-100">Showroom</h5>
                    <small className="text-xs font-medium  text-neutral-800 dark:text-neutral-200">
                      Browse Projects
                    </small>
                  </div>
                  <Link
                    to="/showroom"
                    className="fill-green-500 border border-gray-200 inline-flex items-center bg-white dark:bg-neutral-800 dark:border-neutral-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <box-icon name="right-arrow-alt"></box-icon>
                  </Link>
                </div>
              </div>
              <div className="w-full hidden lg:block">
                <h1 className="font-semibold text-sm text-violet-500 mb-4">
                  Follow Me
                </h1>
                <div className="grid grid-cols-2">
                  <ul className="">
                    <li className="font-medium text-sm mb-2">
                      <a
                        href="https://www.facebook.com/supersantie"
                        className="fill-blue-500 inline-flex items-center gap-2 font-medium  text-neutral-900 dark:text-neutral-100"
                      >
                        <box-icon name="facebook-circle" type="logo"></box-icon>
                        Facebook
                      </a>
                    </li>
                    <li className="font-medium text-sm mb-2">
                      <a
                        href="https://www.linkedin.com/in/gcristianber/"
                        className="fill-blue-600 inline-flex items-center gap-2 font-medium  text-neutral-900 dark:text-neutral-100"
                      >
                        <box-icon name="linkedin-square" type="logo"></box-icon>
                        LinkedIn
                      </a>
                    </li>
                    <li className="font-medium text-sm mb-2">
                      <a
                        href="https://github.com/gcristianber"
                        className="inline-flex items-center gap-2 font-medium  text-neutral-900 dark:text-neutral-100"
                      >
                        <box-icon name="github" type="logo"></box-icon>
                        Github
                      </a>
                    </li>
                  </ul>
                  <ul className="">
                    <li className="font-medium text-sm mb-2">
                      <a
                        href="https://dribbble.com/supersanti"
                        className="fill-pink-500 inline-flex items-center gap-2 font-medium  text-neutral-900 dark:text-neutral-100"
                      >
                        <box-icon name="dribbble" type="logo"></box-icon>
                        Dribbble
                      </a>
                    </li>
                    <li className="font-medium text-sm mb-2">
                      <a
                        href="#"
                        className="fill-indigo-500 inline-flex items-center gap-2 font-medium  text-neutral-900 dark:text-neutral-100"
                      >
                        <box-icon name="discord-alt" type="logo"></box-icon>
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 lg:-bottom-1/4 left-1/2 transform -translate-x-1/2">
            <h1 className="text-8xl lg:text-[14rem] font-extrabold font-title tracking-wider text-neutral-900 dark:text-neutral-100">
              gcris<span className="text-green-500">tian</span>ber
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
