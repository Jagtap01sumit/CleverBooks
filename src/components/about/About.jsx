import React, { useState } from "react"; // Import the CSS file

const contentArray = [
  {
    quote:
      "Our D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    name: "Diksha Pande",
    position: "Co-founder, Samosa Party",
    clientImg:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp",
    logoImg:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg",
    mainImg:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp",
  },
  {
    quote:
      "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
    position: "Co-founder, P-TAL",
    clientImg:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg",
    logoImg:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664d8f654c71b6204bdf301c_P%20TAL%20logo.svg",
    mainImg:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp",
  },
];

export default function AboutComp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + contentArray.length) % contentArray.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const { quote, name, position, clientImg, logoImg, mainImg } =
    contentArray[currentIndex];

  return (
    <div className="lg:px-32 h-min-screen flex-col flex md:flex-row">
      <div
        className={`md:w-2/3 sm:w-full justify-between flex flex-col p-5 lg:p-0 lg:pr-10 h-auto transition-all duration-300 md:order-1 order-2 ${
          isTransitioning ? "fade-out" : "fade-in"
        }`}
      >
        <div className="mb-10 text-sm md:text-lg ">
          <p>{quote}</p>
        </div>
        <div className="mb-24">
          <div className="flex justify-between">
            <div className="flex">
              <div className="h-16 w-16 rounded-full">
                <img src={clientImg} className="rounded-full" alt="Client" />
              </div>
              <div className="flex flex-col mx-10">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <h1>{position}</h1>
              </div>
            </div>

            <img src={logoImg} alt="Logo" className="w-20 h-20" />
          </div>
          <div className="flex my-7">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              className="mr-3 scale-x-[-1] cursor-pointer"
              alt="Previous"
              onClick={handlePrev}
            />
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              className="ml-3 cursor-pointer"
              alt="Next"
              onClick={handleNext}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full ">
          <div className=" w-full  lg:mr-5 lg:mt-5 lg:mb-5 lg:w-auto h-auto flex-col bg-purple-100 rounded-2xl flex items-center justify-center md:mr-3 px-5 py-2 lg:my-0 my-2">
            <h1 className="p-3 font-semibold text-4xl bg-gradient-to-r from-salmon to-medium-purple bg-clip-text text-transparent">
              upto 95%
            </h1>
            <h1 className="p-3">Demand Fulfilment</h1>
          </div>
          <div className="lg:w-auto  lg:m-5 w-full h-auto flex-col bg-purple-100 rounded-2xl flex items-center justify-center mr-3 px-9 py-2 my-2">
            <h1 className="p-3 font-semibold text-4xl bg-gradient-to-r from-salmon to-medium-purple bg-clip-text text-transparent  ">
              {"<"} 3%
            </h1>
            <h1 className="p-3">Demand Fulfilment</h1>
          </div>
          <div className="lg:w-auto   w-full h-auto flex-col bg-purple-100 rounded-2xl flex items-center justify-center  px-9 lg:ml-5 lg:mt-5 lg:mb-5 lg:my-0 my-2">
            <h1 className="p-3 font-semibold text-2xl bg-gradient-to-r from-salmon to-medium-purple bg-clip-text text-transparent  ">
              Read stories
            </h1>
            <h1 className="p-3"> -{">"}</h1>
          </div>
        </div>
      </div>
      <div
        className={`md:w-1/3 sm:w-full   m-5 rounded-2xl transition-all duration-300 order-1 md:order-2 border border-black ${
          isTransitioning ? "fade-out" : "fade-in"
        }`}
      >
        <img
          src={mainImg}
          className="h-full w-full rounded-2xl bg-cover  "
          alt="Main"
        />
      </div>
    </div>
  );
}
