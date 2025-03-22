"use client";
import React from "react";
import Button from "../Button";
import Lottie from "lottie-react";
import animation from "../../../public/about.json";

export default function Hero() {
  return (
    <section
      className="flex gap-1  flex-wrap-reverse md:flex-nowrap min-h-[100vh] justify-center md:items-center text-amber-50 p-6"
      style={{ minHeight: "100svh" }}
    >
      <div className="w-full h-auto p-0">
        <h1 className="text-4xl lg:text-7xl font-bold text-blue-400  md:mb-8 text-center uppercase">
          Delivering Efficiency, One Shipment at a Time
        </h1>
        <h2 className="text-xl lg:text-2xl text-gray-200 font-semibold text-center mb-8">
          At Cargo Flow, we don’t just move goods—we streamline logistics,
          optimize supply chains, and ensure your cargo reaches its destination
          safely and on time.
        </h2>
        <div className="flex justify-center p-4">
          <Button>Contact Us</Button>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center p-0">
        <Lottie
          className="w-[16rem] lg:w-full"
          animationData={animation}
          loop={false}
        />
      </div>
    </section>
  );
}
