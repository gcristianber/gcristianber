import React, { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  House,
  BriefcaseBusiness,
  Coffee,
  Inbox,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Switch } from "@headlessui/react";

const navigations = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/showroom",
    title: "Showroom",
  },
  {
    id: 3,
    href: "/timeline",
    title: "Timeline",
  },
];

const Navbar = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", enabled);
  }, [enabled]);

  return (
    <header className=" w-full fixed top-0 left-0 z-40 lg:py-4 bg-white dark:bg-neutral-900">
      <nav className="lg:hidden flex items-center justify-center px-4 sm:px-8 mx-auto max-w-7xl py-2 ">
        <h1 className="font-title text-2xl font-bold inline align-middle text-neutral-900 dark:text-neutral-100">
          gcris<span className="text-green-500">tian</span>ber
        </h1>
      </nav>
      <nav className="flex items-center justify-between px-0 sm:px-8 mx-auto max-w-7xl py-2">
        <a href="#" className="flex-1 hidden lg:block">
          {/* <img src="./vite.svg" alt="Vite Logo" /> */}
          <h1 className="font-title text-2xl font-bold inline align-middle text-neutral-900 dark:text-neutral-100">
            gcris<span className="text-green-500">tian</span>ber
          </h1>
        </a>

        {/* <ul className="hidden lg:flex items-center justify-center gap-4 flex-1 ">
          {navigations.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className={`text-sm font-medium  bg-white dark:bg-neutral-800 dark:text-neutral-200  lg:px-4 lg:py-4 hover:bg-gray-100 dark:hover:bg-neutral-200 group transition-colors
               inline-flex items-center gap-2  ${
                 // link.isCurrent
                 useLocation().pathname === link.href
                   ? " text-green-500 border-b-2 border-green-500 "
                   : " text-neutral-200 "
               }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul> */}

        <ul className="w-full flex-1 flex justify-center items-center gap-2">
          <li className="w-full text-center">
            <Link
              to="/"
              className="flex flex-col items-center lg:inline-flex lg:flex-row gap-2 align-middle text-neutral-900 dark:text-neutral-100 hover:text-blue-500  transition-colors"
            >
              <House size={20} />
              <span className="font-medium text-sm ">Home</span>
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/timeline"
              className="flex flex-col items-center lg:inline-flex lg:flex-row gap-2 align-middle text-neutral-900 dark:text-neutral-100 hover:text-blue-500  transition-colors"
            >
              <BriefcaseBusiness size={20} />
              <span className="font-medium text-sm ">Timeline</span>
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/showroom"
              className="flex flex-col items-center lg:inline-flex lg:flex-row gap-2 align-middle text-neutral-900 dark:text-neutral-100 hover:text-blue-500  transition-colors"
            >
              <Coffee size={20} />
              <span className="font-medium text-sm ">Showroom</span>
            </Link>
          </li>
        </ul>

        <div className="hidden lg:block lg:flex-1">
          <ul className="flex items-center justify-end gap-4">
            <li>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-blue-500" : "bg-gray-200"
                } relative inline-flex align-middle h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>

                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-neutral-100 text-neutral-900"
                      : "translate-x-0 bg-white"
                  } p-1.5 rounded-full transform transition ease-linear duration-150`}
                >
                  {enabled ? (
                    <Moon size={12} strokeWidth={2} />
                  ) : (
                    <Sun size={12} strokeWidth={2} />
                  )}
                </span>
              </Switch>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-flex gap-2 align-middle text-neutral-900 dark:text-neutral-100 hover:text-blue-500 transition-colors"
              >
                <Inbox size={20} />
                <span className="font-medium text-sm ">Inbox Me</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
