import React from "react";

const posts = [
  {
    id: 1,
    title: "Logistic Management System",
    href: "#",
    imgBanner: "./assets/images/lulan-logistic-system.png",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
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
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
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
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
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
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
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

const Projects = () => {
  return (
    <section className="py-24 sm:py-32 px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Web Projects
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex max-w-xl flex-col items-start justify-between relative overflow-hidden"
          >
            <img
              className="h-64 w-full rounded-lg border object-cover mb-4"
              src={post.imgBanner}
              alt="image description"
            />
            
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
              <a
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2l">
              {post.techStacks.map((stack) => (
                <div>
                  <a
                    href="#"
                    role="button"
                    className="inline-flex items-center justify-center bg-white aspect-square h-10 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={stack.imgLogoUrl}
                      alt={stack.altText}
                      className="h-5 w-5 object-scale-down"
                    />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <button
                type="button"
                className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors"
              >
                View Demo
              </button>

              <a
                href="#"
                role="button"
                className="text-sm font-medium bg-white text-gray-500 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors
                 fill-gray-500 inline-flex items-center gap-2"
              >
                <span>Visit repository</span>
                <box-icon name="right-arrow-alt" size="sm"></box-icon>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
