"use client";
import Notification from "./Notification";
import dash from "../assets/dashboard/dash.jpg";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "./Heading";
import { dashboardFeatures } from "@/constants";
import Download from "./Download";

const Dashboard = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section ref={container} className="py-[5rem] md:py-[10rem] relative">
      <Heading
        title="Smart Logistics Dashboard"
        text="Gain real-time insights, track shipments, and streamline your logistics operations with an intuitive and data-driven dashboard"
      />
      <div className=" relative w-[90vw] lg:w-[60vw] m-auto  rounded-xl   md:aspect-[688/490] overflow-hidden lg:aspect-[1024/580]">
        <Image
          src={dash}
          className="w-full "
          width={1024}
          height={580}
          alt="Dashboard"
        />
      </div>
      <motion.div
        style={{ y }}
        className="hidden absolute z-5 left-[10%] bottom-[20rem] px-1 text-amber-50 py-1 glass xl:flex"
      >
        <Notification
          src={dashboardFeatures[0].icon}
          title={dashboardFeatures[0].title}
        />
      </motion.div>
      <motion.div
        style={{ y }}
        className="hidden absolute right-[10%] text-amber-50 z-5 bottom-[30rem] w-[18rem] xl:flex glass "
      >
        <Notification
          src={dashboardFeatures[1].icon}
          title={dashboardFeatures[1].title}
        />
      </motion.div>
      <Download />
    </section>
  );
};

export default Dashboard;
