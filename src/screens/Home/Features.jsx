import React from "react";

const FEATURES = [
  {
    title: "Single Effort",
    subTitle: "Save time and effort",
    description: `You don't want to duplicate logic already in your database as all your constraints and relationships will be used to build the UI and forms`,
    svg: (
      <svg
        className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12 dark:text-primary-light"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Open Source",
    subTitle: " Modify and install how you see fit.",
    description: `You don't want to trust strangers with your precious data as Hadmean
    is fully open-source. `,
    svg: (
      <svg
        className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12 dark:text-primary-light"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Customizable",
    subTitle: "Everything you see can be configured",
    description: `
    You want something extremely customizable that also gives you the reign when your requirements become very unique.
 
    `,
    svg: (
      <svg
        className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12 dark:text-primary-light"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Easy To Use",
    subTitle: "No Tutorial",
    description: `You want an internal tools that don't require techincal knowledge to make changes`,
    svg: (
      <svg
        className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12 dark:text-primary-light"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
      </svg>
    ),
  },
  {
    title: "Simple Installation",
    subTitle: "Just one command",
    description: `You want an internal tools that you can fully setup and start using under 59 seconds`,
    svg: (
      <svg
        className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12 dark:text-primary-light"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
      </svg>
    ),
  },
  {
    title: "Declarative",
    subTitle: "Less Maintenance and No Logic Bugs",
    description: `You want an internal tool that is auto-generated which means zero maintenance zero logic bugs.`,
    svg: (
      <svg
        className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12 dark:text-primary-light"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto">
        <div className="mb-8 text-center">
          <p className="text-lg font-medium text-primary dark:text-primary-light">
            Why you should try Hadmean
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            You want powerful internal tools without the headache of building
            and maintenance.
          </h2>
        </div>
        <div className="space-y-8 pt-10 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
          {FEATURES.map(({ title, description, subTitle, svg }) => (
            <div key={title} className="text-center">
              {svg}
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                {title}
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                {subTitle}
              </p>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
