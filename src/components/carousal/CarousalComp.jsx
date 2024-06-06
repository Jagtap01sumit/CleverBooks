import React, { useState } from "react";

const CarouselComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogs = [
    {
      title: "Impact of RPA (Robotic Process Automation) in Supply Chain",
      date: "Oct 12, 2023",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/6527d12579fe9fb6cfc0c8eb_RPA%20BLOG%20THUMBNAIL.png",
    },
    {
      title: "Creating an Impact with Inventory Planning: The QSR Edition",
      date: "Aug 28, 2023",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64ec7b71e9332bfe4b920ba3_thumbnail%20QSR%20(1).png",
    },
    {
      title: "To Build or Buy: The Endless Inventory Planning Dilemma",
      date: "Apr 17, 2023",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20-p-500.png",
    },
    {
      title: "Why your ERP is not your Inventory Planning Tool",
      date: "Mar 31, 2023",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/642688163009ef784ee99686_blog%20image%20-p-500.png",
    },
    {
      title:
        "Do you frequently run out of stock? Here's everything about inventory replenishment",
      date: "Jan 10, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326deb27ea3f8f_468b6a_96c90640016f4d5c9ecf316a4e009a26_mv2-p-500.webp",
    },
    {
      title: "Inside India's Burgeoning D2C Market",
      date: "Nov 24, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d0611ea3f8e_073684_64a111d0b38344cda00cba7b5de621f7_mv2-p-500.jpeg",
    },
    {
      title:
        "Losing money due to excess inventory? Here are 5 tips to eliminate and avoid wastage.",
      date: "Feb 8, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d1bfdea3f8c_468b6a_694f8d95a6a14671ad1759b3dbdbb4d2_mv2-p-500.jpeg",
    },
    {
      title: "Interview: What Makes Mayura Rao Ausum!",
      date: "Jan 20, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d1c21ea3f89_073684_6103c3f6e9d84d07807f541215057ae3_mv2-p-500.webp",
    },
    {
      title:
        "Interview: Life Outside the Fast Fashion Lane with The Khandwala Brothers",
      date: "Feb 10, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d8f7fea3f84_073684_046aa855f2a04c338e08cbe0d0c0480b_mv2.webp",
    },
    {
      title: "How to grow your D2C business with better planning?",
      date: "Feb 15, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d885eea3f77_468b6a_effce4cf347b42ea81c6fb5f04d828f4_mv2-p-500.webp",
    },
    {
      title: "Interview: Blend It Like Jovi!",
      date: "Mar 10, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d196fea3f74_073684_02225621fa2745178f198fed0a4fd9c7_mv2.jpeg",
    },
    {
      title:
        "Interview: What Does It Take To Succeed When You Have Skin In The Game?",
      date: "Apr 7, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d242dea3f6f_073684_dab9de1c214d473388ba8badc5725d29_mv2-p-500.webp",
    },
    {
      title:
        "Funding Alert! Crest, Gets Funding from Its first 2 Customers, Sirona Hygiene and Samosa Party",
      date: "Aug 4, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/63bfd06280d8f61024cc2bfd_founders%20group%20image-2-p-500.webp",
    },
    {
      title:
        "Methods for Improving E-Commerce Inventory Management for better Demand Fulfilment in 2022",
      date: "Jun 30, 2022",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d28bfea3f58_post%202.webp",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  return (
    <div className="w-full mx-auto py-8 flex flex-col md:flex-row justify-center items-center  lg:px-28">
      <div className="text-left mb-4 flex-shrink-0 md:w-1/3 w-full md:pl-10 px-3">
        <h1 className="md:text-5xl text-3xl font-bold mt-6">
          Delivered: <br />
          The Crest blog
        </h1>
        <p className="mt-8 md:text-lg text-md">
          Insights from years of working in various supply-chain roles (and an
          itch to write). We hope you find these posts interesting!
        </p>
        <div className="relative flex items-center md:p-4 py-4">
          <button
            onClick={handlePrevious}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full p-3"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full p-3 ml-2"
          >
            &gt;
          </button>
        </div>
        <div className="text-left">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full  my-4">
            View all blogs
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6 w-full md:w-2/3 px-2">
        {[0, 1].map((offset) => (
          <div
            key={offset}
            className="rounded-xl w-full md:w-1/2 h-auto bg-purple-200 p-4 mb-4 md:mb-0"
          >
            <div className="flex-shrink-0 justify-between w-full h-80 rounded-xl overflow-hidden relative m-auto">
              <div className="rounded-xl h-3/5">
                <img
                  src={blogs[(currentIndex + offset) % blogs.length].image}
                  className=" transform hover:scale-110 transition-all duration-500 h-full w-full object-fill"
                />
              </div>
              <div className="h-1/5 items-center flex">
                <h3 className="md:text-lg text-xs font-semibold">
                  {blogs[(currentIndex + offset) % blogs.length].title}
                </h3>
              </div>
              <div className="h-1/5 flex items-end justify-between">
                <p className="text-md">
                  {blogs[(currentIndex + offset) % blogs.length].date}
                </p>
                <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d07edea3eca_Vector.svg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComp;
