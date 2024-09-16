import React from "react";
import Stacks from "@/components/layouts/Stacks";


const webProjects = [
  {
    id: 1,
    title: "Logistic Management System",
    href: "#",
    imgBanner:"https://placehold.co/600x400?text=No+Image+Preview",
    description: "Streamlining the logistic management by implementing impressive real-time features of GPS & Chat Messaging.",
    date: "Oct 05, 2023",
    datetime: "2023-10-05",
    category: { title: "Capstone Project", href: "#" },
    techStacks: [
      {
        imgLogoUrl: "./assets/images/logos/php.svg",
        altText: "Vite",
      },
      {
        imgLogoUrl: "./assets/images/logos/html5.svg",
        altText: "HTML5",
      },
      {
        imgLogoUrl: "./assets/images/logos/javascript.svg",
        altText: "Javascript",
      },
      {
        imgLogoUrl: "./assets/images/logos/bootstrap.svg",
        altText: "Bootstrap",
      },
      {
        imgLogoUrl: "./assets/images/logos/mysql.svg",
        altText: "MySQL",
      },
      {
        imgLogoUrl: "./assets/images/logos/mapbox.svg",
        altText: "Mapbox",
      },
      {
        imgLogoUrl: "./assets/images/logos/firebase.svg",
        altText: "Firebase",
      },
      {
        imgLogoUrl: "./assets/images/logos/nodejs.svg",
        altText: "NodeJS",
      },
    ],
  },
  {
    id: 2,
    title: "Simple Color Picking App",
    href: "#",
    imgBanner:
      "https://github.com/gcristianber/color-picking-app-qs/raw/master/screenshots/default-v2.jpg",
    description:
      "A simple color picking app that is inspired with the other famous color picker websites.",
    date: "Oct 05, 2023",
    datetime: "2023-10-05",
    category: { title: "Personal", href: "#" },
    techStacks: [
      {
        imgLogoUrl: "./assets/images/logos/vite.svg",
        altText: "Vite",
      },
      {
        imgLogoUrl: "./assets/images/logos/vuejs.svg",
        altText: "VueJS",
      },
      {
        imgLogoUrl: "./assets/images/logos/html5.svg",
        altText: "HTML5",
      },
      {
        imgLogoUrl: "./assets/images/logos/javascript.svg",
        altText: "Javascript",
      },
      {
        imgLogoUrl: "./assets/images/logos/tailwindcss.svg",
        altText: "TailwindCSS",
      },
    ],
  },
  {
    id: 3,
    title: "Payroll & Employee Self-Service System",
    href: "#",
    imgBanner: "https://placehold.co/600x400?text=No+Image+Preview",
    description:
      "An automated payroll management system with employee self-service portal.",
    date: "Oct 05, 2023",
    datetime: "2023-10-05",
    category: { title: "Personal", href: "#" },
    techStacks: [
      {
        imgLogoUrl: "./assets/images/logos/laravel.svg",
        altText: "Laravel",
      },
      {
        imgLogoUrl: "./assets/images/logos/mysql.svg",
        altText: "MySQL",
      },
      {
        imgLogoUrl: "./assets/images/logos/html5.svg",
        altText: "HTML5",
      },
      {
        imgLogoUrl: "./assets/images/logos/javascript.svg",
        altText: "Javascript",
      },
      {
        imgLogoUrl: "./assets/images/logos/bootstrap.svg",
        altText: "Bootstrap",
      },
    ],
  },
  {
    id: 4,
    title: "Cinema Booking Management System",
    href: "#",
    imgBanner: "https://placehold.co/600x400?text=No+Image+Preview",
    description:
      "A simple web-based cinema booking system that allows to reserve their seats online.",
    date: "Oct 05, 2023",
    datetime: "2023-10-05",
    category: { title: "Personal", href: "#" },
    techStacks: [
      {
        imgLogoUrl: "./assets/images/logos/php.svg",
        altText: "Php",
      },
      {
        imgLogoUrl: "./assets/images/logos/mysql.svg",
        altText: "MySQL",
      },
      {
        imgLogoUrl: "./assets/images/logos/html5.svg",
        altText: "HTML5",
      },
      {
        imgLogoUrl: "./assets/images/logos/javascript.svg",
        altText: "Javascript",
      },
    ],
  },
];

const Showroom = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative pt-64 overflow-hidden">
          <img
            className="absolute top-0 left-0 -z-10 w-full max-h-72 object-cover rounded-t-2xl
          "
            src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="w-full h-72 max-h-72 bg-gradient-to-t -z-10 from-white dark:from-neutral-900 absolute top-0 -left-0"></div>

          <div className="mx-auto max-w-2xl text-center ">
            <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl dark:text-neutral-200">
              The Showroom
            </h2>
            <p className="mt-6 text-base leading-8 dark:text-neutral-300">
              Step into a showcase of innovative web solutions and thoughtfully
              crafted UI/UX designs, where creativity meets functionality.
            </p>
          </div>
        </div>
      </section>

      <Stacks/>

      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-neutral-200">
              Web Projects
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              {webProjects.map((project) => (
                <li key={project.id}>
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={project.imgBanner}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    
                  </div>
                  <div className="mt-4 flex items-center gap-x-4 text-xs">
                    <time dateTime={project.datetime} className="text-gray-500 dark:text-neutral-300">
                      {project.date}
                    </time>
                    <a
                      href={project.category.href}
                      className="relative z-10 rounded-full bg-gray-50 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {project.category.title}
                    </a>
                  </div>
                  <h4 className="mt-2 text-sm font-medium text-slate-900 dark:text-neutral-200 group-hover:text-indigo-600">
                    <a href="/components/marketing/sections/heroes">
                      <span className="relative">{project.title}</span>
                    </a>
                  </h4>
                  <p className="relative py-4 text-xs font-medium text-slate-500 dark:text-neutral-300 line-clamp-2">
                    {project.description}
                  </p>
                  <ul className="mt-1.5 flex flex-wrap gap-4">
                    {project.techStacks.map((stack) => (
                      <li key={stack.id}>
                        <a
                          href="#"
                          role="button"
                          className="inline-flex items-center justify-center bg-white dark:bg-neutral-800  aspect-square h-10 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <img
                            src={stack.imgLogoUrl}
                            alt={stack.altText}
                            className="h-5 w-5 object-scale-down"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </>
  );
};

export default Showroom;
