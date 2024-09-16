import React from "react";
import Hero from "@/components/layouts/Hero";

import { Cable, Gem, Code, BriefcaseBusiness } from "lucide-react"
import Stacks from "@/components/layouts/Stacks";

const links = [
  {
    name: "ERP Web Based System",
    href: "#",
    icon: <Cable />,
  },
  {
    name: "Elegant UI/UX Design",
    href: "#",
    icon: <Gem />,
  },
  {
    name: "Clean Code Base",
    href: "#",
    icon: <Code />,
  },
  {
    name: "Enhanced Business Process",
    href: "#",
    icon: <BriefcaseBusiness />,
  },
];

const stats = [
  { name: "Built Projects", value: "4" },
  { name: "Satisfied Clients", value: "2" },
  { name: "Years of Experience", value: "8 months+" },
  { name: "Technologies Mastered", value: "10+" },
];



const App = () => {
  return (
    <>
      <Hero />
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl text-neutral-900 dark:text-neutral-100">
              What I do?
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-800 dark:text-neutral-200">
              Here are the expert services I offer to create stunning,
              high-performance web-based systems, blending seamless
              functionality with elegant, user-friendly design to deliver an
              exceptional experience.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10 text-neutral-900 dark:text-neutral-100">
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
                <div key={stat.name} className="flex flex-col-reverse text-neutral-900 dark:text-neutral-100">
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

      <Stacks/>
    </>
  );
};

export default App;
