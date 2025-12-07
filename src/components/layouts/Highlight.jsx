import React from "react";

const features = [
  {
    name: "Real-time GPS Tracking",
    description:
      "Our system allows admins to monitor and navigate drivers in real-time, ensuring efficient route management and enhancing overall logistics operations.",
    icon: <box-icon name="navigation" type="solid"></box-icon>,
  },
  {
    name: "Real-time Chat",
    description:
      "Facilitate instant communication between admins and drivers with our integrated chat feature, enabling quick responses and seamless coordination.",
    icon: <box-icon name="message-dots" type="solid"></box-icon>,
  },
  {
    name: "Elegant User Interface",
    description:
      "Experience a sleek and intuitive interface designed to simplify user interactions while maintaining a modern aesthetic, ensuring ease of use across the system.",
    icon: <box-icon name="brush" type="solid"></box-icon>,
  },
];

const Highlight = () => {
  return (
    <section className="py-24 sm:py-32 px-6 lg:px-8 ">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="lg:max-w-lg">
            <p className="group mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Highlight of Appreciation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
              Join us in celebrating our greatest achievement as we proudly hold
              the champion title for the{" "}
              <span className="font-semibold text-violet-500 underline">
                5th Multidisciplinary Research Festival 2023
              </span>{" "}
              and the honor of having the top research paper!
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
              We earned this prestigious title by presenting our capstone
              research study on a logistic management system, which includes the
              following innovative features:
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <span
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5 fill-indigo-600"
                    >
                      {feature.icon}
                    </span>
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <img
          alt="Highlight Photo"
          src="./assets/images/image4.jpg"
          width={2432}
          height={1442}
          className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0"
        />
      </div>
    </section>
  );
};

export default Highlight;
