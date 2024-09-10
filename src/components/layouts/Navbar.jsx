import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";

const navigations = [
  {
    id: 1,
    href: "/",
    title: "Home",
    isCurrent: true,
    icon: <box-icon type="solid" name="cube-alt"></box-icon>,
  },
  {
    id: 2,
    href: "/timeline",
    title: "Timeline",
    isCurrent: false,
    icon: <box-icon name="popsicle"></box-icon>,
  },
  {
    id: 3,
    href: "/projects",
    title: "Projects",
    isCurrent: false,
    icon: <box-icon name="code-alt"></box-icon>,
  },
];

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 bg-white z-10">
      <nav className="px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className=" flex-1">
          <img src="./vite.svg" alt="Vite Logo" />
        </a>

        <ul className="flex items-center justify-center gap-4 flex-1">
          {navigations.map((link) => (
            <li>
              <Link
                to={link.href}
                className={`text-sm font-medium bg-white lg:px-4 lg:py-2 rounded-full hover:bg-gray-100 transition-colors
              inline-flex items-center gap-2 ${
                link.isCurrent
                  ? " text-violet-700 fill-violet-700 "
                  : " text-gray-500 fill-gray-500"
              }`}
              >
                {/* {link.icon} */}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="inline-flex items-center justify-end gap-4  flex-shrink-0 flex-1">
          <button
            type="button"
            className="inline-flex items-center bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <box-icon name="toggle-left"></box-icon>
            ) : (
              <box-icon name="toggle-right" type="solid"></box-icon>
            )}
          </button>
          <Button>Connect with me</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
