import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh] gap-4 [&>*]:flex-1 text-white">
      {/* text container */}
      <div className="flex flex-col items-center justify-center gap-8 p-6 text-center">
        <h1 className="text-5xl xl:text-6xl font-bold">
          Delicious Burger & French Fry
        </h1>
        <p className="xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        {/* countdown */}
        <CountDown />
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Order Now
        </button>
      </div>
      {/* image container */}
      <div className="relative w-full md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
