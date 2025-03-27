"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { aboutUs } from "@/constants";
import { useRef } from "react";
import Heading from "../Heading";

export default function OurStory() {
  const firstParagraph = aboutUs[0].paragraphOne;
  const secondParagraph = aboutUs[0].paragraphTwo;

  return (
    <section className="pt-[5rem] pb-[3rem]  md:pt-[10rem] md:pb-[7rem]">
      <Heading title="Our Story" text="Discover the Journey of Cargo Flow" />
      <Paragraph paragraph={firstParagraph} />
      <Paragraph paragraph={secondParagraph} />
    </section>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative mr-4 mt-4">
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.60"],
  });

  const text = paragraph.split(" ");

  return (
    <p
      ref={container}
      className="flex flex-wrap text-2xl md:text-4xl lg:text-4xl mb-6 p-7 max-w-[1240px] m-auto text-amber-50"
    >
      {text.map((word, i) => {
        const start = i / text.length;
        const end = start + 1 / text.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
