import React from "react";

const Footer = () => {
  return (
    <footer className=" px-6 lg:px-8 py-8">
      <div className="mx-auto mt-16 rounded-xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto relative overflow-hidden">
          <div className="flex mb-40">
            <div className="flex justify-between flex-grow ">
              <div className=" w-full">
                <h1 className="font-semibold leading-5">
                  Let's build &<br />
                  design
                </h1>
              </div>
              <div className="w-1/3">
                <h1 className="font-semibold text-sm text-orange-500 mb-4">
                  Explore
                </h1>
                <ul className="">
                  <li className="font-medium text-sm mb-2">
                    <a href="#">Home</a>
                  </li>
                  <li className="font-medium text-sm mb-2">
                    <a href="">Timeline</a>
                  </li>
                  <li className="font-medium text-sm mb-2">
                    <a href="">Services</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between flex-grow ">
              <div className="w-full flex flex-col items-end gap-4">
                <div className="flex items-center justify-between gap-6 w-1/2">
                  <div className="text-start">
                    <h5 className="font-bold leading-3 text-sm">Contact Me</h5>
                    <small className="text-xs font-medium text-gray-500">
                      Say Hello!
                    </small>
                  </div>
                  <button
                    type="button"
                    className="fill-green-500 border border-gray-200 flex items-center bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>
                </div>
                <div className="flex items-center justify-between gap-6 w-1/2">
                  <div className="text-start">
                    <h5 className="font-bold leading-3 text-sm">Showroom</h5>
                    <small className="text-xs font-medium text-gray-500">
                      Browse Projects
                    </small>
                  </div>
                  <button
                    type="button"
                    className="fill-green-500 border border-gray-200 inline-flex items-center bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <box-icon name="right-arrow-alt"></box-icon>
                  </button>
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-semibold text-sm text-violet-500 mb-4">
                  Follow Me
                </h1>
                <div className="grid grid-cols-2">
                  <ul className="">
                    <li className="font-medium text-sm mb-2">
                      <a
                        href="#"
                        className="fill-blue-500 inline-flex items-center gap-2 font-medium"
                      >
                        <box-icon name="facebook-circle" type="logo"></box-icon>
                        Facebook
                      </a>
                    </li>
                    <li className="font-medium text-sm mb-2">
                      <a
                        href=""
                        className="fill-blue-600 inline-flex items-center gap-2 font-medium"
                      >
                        <box-icon name="linkedin-square" type="logo"></box-icon>
                        LinkedIn
                      </a>
                    </li>
                    <li className="font-medium text-sm mb-2">
                      <a
                        href=""
                        className="inline-flex items-center gap-2 font-medium"
                      >
                        <box-icon name="github" type="logo"></box-icon>
                        Github
                      </a>
                    </li>
                  </ul>
                  <ul className="">
                    <li className="font-medium text-sm mb-2">
                      <a
                        href="#"
                        className="fill-pink-500 inline-flex items-center gap-2 font-medium"
                      >
                        <box-icon name="dribbble" type="logo"></box-icon>
                        Dribbble
                      </a>
                    </li>
                    <li className="font-medium text-sm mb-2">
                      <a
                        href="#"
                        className="fill-indigo-500 inline-flex items-center gap-2 font-medium"
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
          <div className="absolute -bottom-1/4 left-1/2 transform -translate-x-1/2">
            <h1 className="text-[12rem] font-extrabold font-title tracking-wider">
              gcris<span className="text-green-500">tian</span>ber
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
