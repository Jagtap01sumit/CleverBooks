import React from "react";
import Navbar from "../components/nav/Navbar";
import Button from "../components/button/Button";

function Home() {
  return (
    <div className="md:h-[50rem] h-min-screen bg-white w-full">
      <div className="md:h-[50rem] h-min-screen w-full bg-hero">
        <Navbar />
        <div className=" flex md:flex-row flex-col md:pt-24 pt-10 text-white w-full">
          <div className="relative flex flex-col md:w-1/2 md:pl-32 py-10 px-5  md:top-16 w-full">
            <h1 className="my-3 text-[40px] md:text-[70px] font-semibold md:tracking-wide">
              Every order fulfilled,
              <span className="bg-gradient-to-r from-salmon to-medium-purple bg-clip-text text-transparent">
                on time.
              </span>
            </h1>
            <p className="my-3">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <div className="my-3 mt-10 md:mt-14 ">
              <Button title="Get Started With CrowBook" btnFunc="hii"></Button>
            </div>
          </div>
          <div className=" relative flex items-end justify-end right-0 md:w-1/2 md:top-[40px] px-5">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
