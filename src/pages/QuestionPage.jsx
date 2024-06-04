import React from "react";
import Card from "../components/cards/Card";

export default function QuestionPage() {
  const cardContent = [
    {
      logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg",
      question: "How much to stock",
      ans: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
    },
    {
      logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg",
      question: "When to order",
      ans: "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
    },
    {
      logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg",
      question: "How much to stock",
      ans: "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
    },
    {
      logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg",
      question: "Where to place",
      ans: "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
    },
  ];
  return (
    <div className="h-screen bg-white md:px-32 px-10 pt-[120px] pb-[120px]">
      <div className="flex items-center justify-center mb-20">
        <h1 className="font-bold text-xl md:text-5xl ">
          Four key questions answered by Crest
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center ">
        {cardContent.map((item, index) => (
          <Card
            logo={item.logo}
            question={item.question}
            ans={item.ans}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
