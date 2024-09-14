import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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

  // return (
  //   <header className="w-full fixed top-0 left-0 bg-white dark:bg-neutral-900 z-50">
  //     <nav className="px-6 lg:px-8 py-4 flex items-center justify-between">
  //       <a href="#" className=" flex-1">
  //         <img src="./vite.svg" alt="Vite Logo" />
  //       </a>

  //       <ul className="hidden lg:flex items-center justify-center gap-4 flex-1">
  //         {navigations.map((link) => (
  //           <li key={link.id}>
  //             <Link
  //               to={link.href}
  //               className={`text-sm font-medium bg-white dark:bg-neutral-800 dark:text-neutral-200  lg:px-4 lg:py-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-200 group transition-colors
  //             inline-flex items-center gap-2 ${
  //               // link.isCurrent
  //               useLocation().pathname === link.href
  //                 ? " text-violet-700 fill-violet-700 dark:text-purple-600 dark:fill-purple-600"
  //                 : " text-gray-500 fill-gray-500 dark:hover:text-neutral-900"
  //             }`}
  //             >
  //               {link.title}
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>

  //       <div className="inline-flex items-center justify-end gap-4  flex-shrink-0 flex-1">

  //         <Switch
  //           checked={enabled}
  //           onChange={setEnabled}
  //           className={`${
  //             enabled ? "bg-neutral-800" : "bg-gray-200"
  //           } relative inline-flex h-6 w-11 items-center rounded-full`}
  //         >
  //           <span className="sr-only">Enable notifications</span>

  //           <span
  //             className={`${
  //               enabled ? "translate-x-6 bg-neutral-950 text-white" : "translate-x-0 bg-white"
  //             } p-1.5 rounded-full transform transition ease-linear duration-150`}
  //           >
  //             {enabled ? <Moon size={12} strokeWidth={2} /> : <Sun size={12} strokeWidth={2} />}
  //           </span>
  //         </Switch>

  //         <Button>Connect with me</Button>
  //       </div>
  //     </nav>
  //   </header>
  // );
  return (
    <header className="bg-white border-b border-gray-50 w-full fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between px-0 sm:px-8 mx-auto max-w-7xl ">
        <a href="#" className=" flex-1">
          <img src="./vite.svg" alt="Vite Logo" />
        </a>

        <ul className="hidden lg:flex items-center justify-center gap-4 flex-1 ">
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
        </ul>

        <div className="flex-1">
          <ul className="hidden lg:flex items-center justify-end gap-4">
            <li>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-neutral-800" : "bg-gray-200"
                } relative inline-flex align-middle h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>

                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-neutral-950 text-white"
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
              <a
                href="#"
                role="button"
                className="inline-flex items-center bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <box-icon name="github" type="logo"></box-icon>
              </a>
            </li>
            <li>
              <a
                href="#"
                role="button"
                className="inline-flex items-center bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <box-icon name="discord-alt" type="logo"></box-icon>
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-end">
            <a
              href="#"
              role="button"
              className="lg:hidden inline-flex items-center bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <box-icon name="dots-horizontal-rounded"></box-icon>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
