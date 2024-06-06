import React, { useState } from "react";

const contentArray = [
  {
    title: "A focus on KPIs that matter",
    description:
      "Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.",
    imageSrc:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg",
  },
  {
    title: "Purpose-built & ever-improving tech",
    description:
      "Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever-evolving.",
    imageSrc:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg",
  },
  {
    title: "Deep domain expertise",
    description:
      "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
    imageSrc:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-500.png",
  },
  // Add more items as needed
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="lg:px-32 lg:py-10 bg-gray-50 h-[500px] md:h-[600px] flex items-center">
      <div
        id="controls-carousel"
        className="relative lg:px-20 px-5 w-full "
        data-carousel="static"
      >
        <div className="relative h-96 flex text-black overflow-hidden rounded-lg border border-black shadow-md p-5">
          {contentArray.map((item, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? "block" : "hidden"
              } duration-700 ease-in-out absolute top-0 flex md:flex-row flex-col p-1= left-0 w-full h-full transform transition-transform ${
                index === activeIndex ? "translate-x-0" : "translate-x-full"
              }`}
              data-carousel-item={index === activeIndex ? "active" : ""}
            >
              <div className="md:w-1/2 w-full md:h-full h-1/2 p-3 md:p-10 flex justify-center items-center">
                <img src={item.imageSrc} className="h-full " alt={item.title} />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start md:p-10 justify-center text-black">
                <h3 className="md:text-4xl text-xl font-bold mb-10 w-full px-5">
                  {item.title}
                </h3>
                <p className="md:text-md text-sm px-5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="absolute lg:top-[-7%] top-[0%] left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center md:w-10 md:h-10 w-5 h-5 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="lg:w-4 lg:h-4 w-2 h-2 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute lg:top-[-7%] top-[0%] right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center md:w-10 md:h-10 w-5 h-5 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="lg:w-4 lg:h-4 w-2 h-2 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
