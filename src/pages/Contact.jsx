import React from "react";
import Button from "@/components/ui/Button";

const Contact = () => {

  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-neutral-100">
              Let's Connect!
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-700 dark:text-neutral-300">
              Looking for a developer who understands your system requirements
              and can enhance your solutions? Let's collaborate and bring your
              ideas to life.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <form>
              <div className="space-y-12">
                <div >
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                      >
                        What's your name?
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="max-w-md block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-neutral-800 dark:ring-neutral-500 dark:text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                      >
                        What's your email address?
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="email"
                          placeholder="test@example.com"
                          autoComplete="given-name"
                          className="max-w-md block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-neutral-800 dark:ring-neutral-500 dark:text-white  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                      >
                        What's the name of your organization?
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          placeholder="Example: Google, Microsoft"
                          autoComplete="given-name"
                          className="max-w-md block w-full rounded-md border-0 py-1.5 dark:bg-neutral-800 dark:ring-neutral-500 dark:text-white text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                      >
                        Which particular activity or area do you need assistance
                        with?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-neutral-800 dark:ring-neutral-500 dark:text-white  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-neutral-800 dark:text-neutral-200">
                        Discuss your thoughts or inquiries.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="italic text-neutral-400 text-sm  ">
                    Incase this form is not working feel free to reach out to my
                    socials or here <a href="mailto: gcristianber@gmail.com" className="text-blue-500 font-medium underline">gcristianber@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
