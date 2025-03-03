"use client";

import Lottie from "lottie-react";
import Button from "./Button";
import animation from "../../public/Animation - 1740862162500.json";

const Hero = () => {
  return (
    <section
      className="flex gap-1  flex-wrap-reverse md:flex-nowrap min-h-[100vh] justify-center md:items-center text-amber-50 p-6"
      style={{ minHeight: "100svh" }}
    >
      <div className="w-full h-auto p-0">
        <h1 className="text-5xl lg:text-7xl font-bold text-blue-400  md:mb-8 text-center uppercase">
          Logistics Solutions for a Connected World
        </h1>
        <h2 className="text-2xl lg:text-2xl text-gray-200 font-semibold text-center mb-8">
          Reliable, efficient, and scalable shipping and supply chain services
          tailored to your needs.
        </h2>
        <div className="flex justify-center p-4">
          <Button>Contact Us</Button>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center p-0">
        <Lottie
          className="w-[20rem] lg:w-full"
          animationData={animation}
          loop={false}
        />
      </div>
    </section>
  );
};

export default Hero;
