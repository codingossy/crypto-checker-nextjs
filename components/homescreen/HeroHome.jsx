import Image from "next/image";
import React from "react";

const HeroHome = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col md:flex-row gap-x-5 justify-between">
        {/* text */}
        <div className="w-full md:my-24 order-2 md:order-1 ">
          <h1 className="text-2xl md:text-4xl text-center md:text-start capitalize my-4 text-blue-400">The best place to get current details of cryptocurrencies</h1>
          <p className="text-gray-300 text-center md:text-start text-sm md:text-base max-w-[400px]">
            Join the Crypto-X network today for low transaction fees and good
            customer service. This is the best crypto exchange platform out
            there...
          </p>
          <p className="text-blue-500 text-center md:text-start my-2 capitalize cursor-pointer">join the wait list now and stay up to date</p>
          <div className="my-8 flex items-center justify-center md:items-start md:justify-start">
            <button className="w-72 md:w-32 capitalize p-3 md:p-2 bg-red-500 text-white rounded-md">get started</button>
          </div>
        </div>
        {/* image */}
        <div className="w-full order-1 md:order-2">
            <Image
            src='/103.png' 
            width={400}
            height={400}
            alt='hero image'
            className="w-full sm:w-[300px] object-cover md:w-[350px]"
            />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
