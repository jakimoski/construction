"use client";
import { services } from "../constants";
import Heading from "./Heading";
import Arrow from "./svg/Arrow";
import Lottie, { InteractivityProps } from "lottie-react";
import serviceAnimation from "../../public/FG4JY8Dvlt.json";
import Image from "next/image";

const interactivity: Omit<InteractivityProps, "lottieObj"> = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 1],
      type: "seek",
      frames: [0, 80],
    },
    {
      visibility: [0.5, 1],
      type: "seek",
      frames: [50, 100],
    },
  ],
};

const Services = () => {
  return (
    <section className="relative  bg-n-9 text-n-1 md:py-[10rem]">
      <Heading
        title="Efficient & Reliable Logistics Services"
        text="From freight transportation to last-mile delivery, we provide seamless logistics solutions tailored to your needs"
      />
      <div className=" relative ">
        <div className="flex relative text-white p-12 flex-wrap gap-10 items-center justify-center mb-10 z-20">
          {services.map((item) => (
            <div
              className="glass relative p-0.5 sm:min-h-[25rem]  md:flex-1/3  lg:flex-1/4"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] bg- p-[2.4rem] ">
                <h3 className="h5 text-3xl font-medium mb-5">{item.title}</h3>
                <p className="body-2 mb-6 text-lg text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={80}
                    height={80}
                    alt={item.title}
                    style={{ width: "auto", height: "auto" }}
                    className="services-icon"
                  />
                  <p className="ml-auto text-sm font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Lottie
          animationData={serviceAnimation}
          // style={style}
          interactivity={interactivity}
          loop={false}
          className="absolute hidden lg:block left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65%] z-1"
        />
      </div>
    </section>
  );
};

export default Services;
