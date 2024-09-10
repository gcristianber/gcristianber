import React, { useState } from "react";
import { LoremIpsum } from 'lorem-ipsum'
import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/layouts/Hero";
import Footer from "@/components/layouts/Footer";
import Bento from "@/components/layouts/Bento";

const links = [
  {
    name: "ERP Web Based System",
    href: "#",
    icon: <box-icon name="plug" type="solid"></box-icon>,
  },
  {
    name: "Elegant UI/UX Design",
    href: "#",
    icon: <box-icon type="solid" name="diamond"></box-icon>,
  },
  {
    name: "Clean Code Base",
    href: "#",
    icon: <box-icon name="code-curly"></box-icon>,
  },
  {
    name: "Enhanced Business Process",
    href: "#",
    icon: <box-icon name="briefcase-alt-2" type="solid"></box-icon>,
  },
];
const stats = [
  { name: "Built Projects", value: "12" },
  { name: "Satisfied Clients", value: "10" },
  { name: "Years of Experience", value: "8 months+" },
  { name: "Technologies Mastered", value: "8+" },
];

const stacks = [
  { imgUrl: "./assets/images/logos/bootstrap.svg", altText: "bootstrap" },
  { imgUrl: "./assets/images/logos/firebase.svg", altText: "firebase" },
  { imgUrl: "./assets/images/logos/html5.svg", altText: "html5" },
  { imgUrl: "./assets/images/logos/javascript.svg", altText: "javascript" },
  { imgUrl: "./assets/images/logos/laravel.svg", altText: "laravel" },
  { imgUrl: "./assets/images/logos/mapbox.svg", altText: "mapbox" },
  { imgUrl: "./assets/images/logos/mysql.svg", altText: "mysql" },
  { imgUrl: "./assets/images/logos/nodejs.svg", altText: "nodejs" },
  { imgUrl: "./assets/images/logos/php.svg", altText: "php" },
  { imgUrl: "./assets/images/logos/tailwindcss.svg", altText: "tailwindcss" },
  { imgUrl: "./assets/images/logos/vite.svg", altText: "vite" },
  { imgUrl: "./assets/images/logos/vuejs.svg", altText: "vuejs" },
  { imgUrl: "./assets/images/logos/figma.svg", altText: "figma" },
  { imgUrl: "./assets/images/logos/cpp.svg", altText: "cpp" },
  { imgUrl: "./assets/images/logos/java.svg", altText: "java" },
];

const App = () => {
  const [lorem] = useState(() => new LoremIpsum().generateParagraphs(5))

  const lenis = useLenis((lenis) => {

  })

  

  return (
    <ReactLenis root>
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <section className="relative isolate overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
                What I do?
              </h2>
              <p className="mt-6 text-base leading-8 ">
                Here are the expert services I offer to create stunning,
                high-performance web-based systems, blending seamless
                functionality with elegant, user-friendly design to deliver an
                exceptional experience.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="inline-flex gap-4"
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    {link.name}
                  </a>
                ))}
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 ">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight ">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative group">
            <div className="h-16 w-56 bg-gradient-to-r from-white absolute left-0 z-10" />
            <div className="h-16 w-56 bg-gradient-to-l from-white absolute right-0 z-10" />
            <ul className="flex items-center space-x-16 animate-loop-scroll group-hover:paused">
              {stacks.map((stack) => (
                <li key={stack.imgUrl}>
                  <img
                    src={stack.imgUrl}
                    alt={stack.altText}
                    className="h-14 min-h-14 w-16 min-w-16"
                  />
                </li>
              ))}
              {stacks.map((stack) => (
                <li key={stack.imgUrl}>
                  <img
                    src={stack.imgUrl}
                    alt={stack.altText}
                    className="h-14 min-h-14 w-16 min-w-16"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Bento/>


        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
