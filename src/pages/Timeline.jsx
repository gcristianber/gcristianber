import React from "react";

const experiences = [
  {
    id: 1,
    companyLogo: {
      imgUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQG7P2KGNvEeEA/company-logo_100_100/company-logo_100_100/0/1708654516290/sandman_software_systems_inc_logo?e=1734566400&v=beta&t=J6lmnRl2FsjRIZRRbiBbRTy58VD796BKu6RTQoTCBFk",
      altText: "Sandman Software Systems Inc.",
    },
    companyName: "Sandman Software Systems Inc.",
    jobTitle: "Junior Software Developer",
    jobDescription:
      "Supports in maintaining and migrating the existing system into a latest version.",
    workArrangement: "Probationary",
    startDate: "July 2024",
    endDate: "",
    isCurrentJob: true,
    hasTechstacks: true,
    techstacks: [
      {
        name: "CodeIgniter",
        imgUrl: "./assets/images/logos/codeigniter.svg",
      },
      {
        name: "Php",
        imgUrl: "./assets/images/logos/php.svg",
      },
      {
        name: "HTML5",
        imgUrl: "./assets/images/logos/html5.svg",
      },
      {
        name: "CSS3",
        imgUrl: "./assets/images/logos/css3.svg",
      },
      {
        name: "Javascript",
        imgUrl: "./assets/images/logos/javascript.svg",
      },
      {
        name: "MySQL",
        imgUrl: "./assets/images/logos/mysql.svg",
      },
    ],
  },
  {
    id: 2,
    companyLogo: {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxzOued3isjrAbAJLeYDohtIZIGxfbdKbHQ&s",
      altText: "VPD Business Solutions Inc.",
    },
    companyName: "VPD Business Solutions Inc.",
    jobTitle: "UI/UX Developer",
    jobDescription:
      "Led the enhancement of the SAAS ERP back-office system s user interface design, optimizing functionality and user engagement. Successfully managed and executed two projects as the sole developer, utilizing Laravel (PHP) to meet client expectations efficiently. Additionally, played a pivotal role in the development of a Point of Sale System using Flutter (Dart) as part of the company s software portfolio.",
    workArrangement: "Contract",
    startDate: "Nov 2023",
    endDate: "May 2024",
    isCurrentJob: false,
    hasTechstacks: true,
    techstacks: [
      {
        name: "Laravel",
        imgUrl: "./assets/images/logos/laravel.svg",
      },
      {
        name: "Php",
        imgUrl: "./assets/images/logos/php.svg",
      },
      {
        name: "HTML5",
        imgUrl: "./assets/images/logos/html5.svg",
      },
      {
        name: "CSS3",
        imgUrl: "./assets/images/logos/css3.svg",
      },
      {
        name: "Javascript",
        imgUrl: "./assets/images/logos/javascript.svg",
      },
      {
        name: "MySQL",
        imgUrl: "./assets/images/logos/mysql.svg",
      },
      {
        name: "Flutter",
        imgUrl: "./assets/images/logos/flutter.svg",
      },
      {
        name: "Bootstrap5",
        imgUrl: "./assets/images/logos/bootstrap.svg",
      },
      {
        name: "Figma",
        imgUrl: "./assets/images/logos/figma.svg",
      },
    ],
  },
  {
    id: 3,
    companyLogo: {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/92/Veterans_Memorial_Medical_Center_%28VMMC%29.svg",
      altText: "Veterans Memorial Medical Center",
    },
    companyName: "Veterans Memorial Medical Center",
    jobTitle: "IT Support Trainee",
    jobDescription:
      "Troubleshoots and maintains medical workers' workstations, performs preventive maintenance, and manages tasks like running errands to ensure smooth operation and optimal system functionality.",
    workArrangement: "Intern",
    startDate: "April 2023",
    endDate: "May 2023",
    isCurrentJob: false,
    hasTechstacks: false,
    techstacks: [],
  },
];

const educations = [
  {
    id: 1,
    companyLogo: {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZM7zIuiPWTUyN93M8HOiy17q0OvXxNMm3g&s",
      altText: "Sandman Software Systems Inc.",
    },
    companyName: "Bestlink College of the Philippines",
    jobTitle: "Bachelor's of Science in Information Technology",
    jobDescription:
      "Supports in maintaining and migrating the existing system into a latest version.",
    startDate: "2019",
    endDate: "2023",
  },
  {
    id: 2,
    companyLogo: {
      imgUrl:
        "https://www.amaes.edu.ph/wp-content/uploads/2022/11/cropped-AMAES-icon.png",
      altText: "Sandman Software Systems Inc.",
    },
    companyName: "AMACC Fairview Campus",
    jobTitle: "Information and Communication Technology",
    jobDescription:
      "Supports in maintaining and migrating the existing system into a latest version.",
    startDate: "2017",
    endDate: "2019",
  },
];

const sortedExperiences = experiences.sort((a, b) => {
  if (a.isCurrentJob && !b.isCurrentJob) return -1;
  if (!a.isCurrentJob && b.isCurrentJob) return 1;

  const dateA = a.endDate ? new Date(a.endDate) : new Date();
  const dateB = b.endDate ? new Date(b.endDate) : new Date();

  return dateB - dateA;
});

const Timeline = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-neutral-100">
              Experiences
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-700 dark:text-neutral-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              esse deleniti minus odit corrupti quisquam eius magnam eaque,
              quidem voluptatem.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <ul className="divide-y dark:divide-neutral-800">
              {sortedExperiences.map((experience) => (
                <li key={experience.id} className="py-8 flex gap-4 items-start">
                  <a href="#" className="flex-shrink-0">
                    <img
                      className="200 bg-white rounded-lg h-14 w-14 "
                      src={experience.companyLogo.imgUrl}
                      alt={experience.companyLogo.altText}
                    />
                  </a>
                  <dl>
                    <dt>
                      <h1 className="text-lg font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
                        {experience.jobTitle}
                      </h1>
                      <p className="text-base leading-6">
                        <span className="font-medium underline text-blue-500">
                          {experience.companyName}
                        </span>{" "}
                        ·{" "}
                        <span className="text-neutral-700 dark:text-neutral-300">
                          {experience.workArrangement}
                        </span>
                      </p>
                      <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">{`${
                        experience.startDate
                      } - ${
                        experience.isCurrentJob ? "Present" : experience.endDate
                      } `}</p>
                    </dt>
                    <dd>
                      <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                        {experience.jobDescription}
                      </p>

                      <div className="mt-8">
                        <ul className="flex flex-wrap gap-4 grayscale">
                          {experience.hasTechstacks
                            ? experience.techstacks.map((stack) => (
                                <li key={stack.name}>
                                  <img
                                    src={stack.imgUrl}
                                    alt={stack.name}
                                    className="h-8 w-8 object-scale-down"
                                  />
                                </li>
                              ))
                            : ""}
                        </ul>
                      </div>
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-neutral-100">
              Education
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-700 dark:text-neutral-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              esse deleniti minus odit corrupti quisquam eius magnam eaque,
              quidem voluptatem.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <ul className="divide-y dark:divide-neutral-800">
              {educations
                .map((experience) => (
                  <li
                    key={experience.id}
                    className="py-8 flex gap-4 items-start"
                  >
                    <a href="#" className="flex-shrink-0">
                      <img
                        className="200 bg-white rounded-lg h-14 w-14 "
                        src={experience.companyLogo.imgUrl}
                        alt={experience.companyLogo.altText}
                      />
                    </a>
                    <dl>
                      <dt>
                        <h1 className="text-lg font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
                          {experience.jobTitle}
                        </h1>
                        <p className="text-base leading-6">
                          <span className="font-medium underline text-blue-500">
                            {experience.companyName}
                          </span>
                        </p>
                        <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">{`${experience.startDate} - ${experience.endDate} · Graduated`}</p>
                      </dt>
                    </dl>
                  </li>
                ))
                .sort((a, b) => {
                  if (a.isCurrentJob && !b.isCurrentJob) return -1;
                  if (!a.isCurrentJob && b.isCurrentJob) return 1;

                  const dateA = a.endDate ? new Date(a.endDate) : new Date();
                  const dateB = b.endDate ? new Date(b.endDate) : new Date();

                  return dateB - dateA;
                })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
