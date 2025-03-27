"use client";
import React from "react";
import Lottie from "lottie-react";
import animation from "../../../public/world.json";
import Heading from "../Heading";

export default function OurReach() {
  return (
    <section className="relative py-[5rem]  md:py-[10rem]">
      <Heading
        title="Our Reach"
        text="Discover the Global Reach of Cargo Flow"
      />
      <div className="w-full h-full flex justify-center items-center px-6">
        <Lottie
          className="w-[auto] p-0 lg:w-[65rem]"
          animationData={animation}
          loop={true}
        />
      </div>
      <div className="flex relative max-w-[1260px] m-auto text-white px-4  flex-col sm:flex-row  gap-6 md:gap-10 items-center justify-center">
        <div className="glass flex-col gap-4 relative p-4 sm:min-h-[10rem] flex w-full flex-1 items-center justify-center   ">
          <p className="text-4xl text-blue-400  font-bold text-center">457</p>
          <p className="text-lg font-bold text-center">Distribution centers</p>
        </div>
        <div className="glass relative flex-col gap-4 p-4 sm:min-h-[10rem] flex w-full flex-1 items-center justify-center ">
          <p className="text-4xl text-blue-400  font-bold text-center">362</p>
          <p className="text-lg font-bold text-center">Cities </p>
        </div>
        <div className="glass relative flex-col gap-4 p-4 sm:min-h-[10rem] flex w-full flex-1 items-center justify-center   ">
          <p className="text-4xl text-blue-400  font-bold text-center">32</p>
          <p className="text-lg font-bold text-center">Countries and regions</p>
        </div>
        <div className="glass relative flex-col gap-4 p-4 sm:min-h-[10rem] w-full flex flex-1 items-center justify-center ">
          <p className="text-4xl text-blue-400  font-bold text-center">
            16.286
          </p>
          <p className="text-lg font-bold text-center">Employees</p>
        </div>
      </div>
    </section>
  );
}
