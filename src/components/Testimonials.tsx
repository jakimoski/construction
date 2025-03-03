"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import SocialCard from "./SocialCard";
import Heading from "./Heading";
import { testimonials } from "@/constants";

const Testimonials: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const half = Math.floor(testimonials.length / 2);

  return (
    <div
      ref={container}
      className="flex flex-col  relative py-[5rem]  overflow-hidden z-1"
    >
      <Heading
        title="What Our Customers Say"
        text="Read testimonials from our satisfied clients"
      />
      <motion.div
        style={{ x: x1 }}
        className="flex whitespace-nowrap relative mb-8 gap-[3vw] min-w-[120vw] -left-[10vw]"
      >
        {testimonials.slice(0, half).map((comment, index) => (
          <SocialCard
            key={index}
            image={comment.image}
            name={comment.name}
            comment={comment.comment}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="flex relative gap-[2vw] w-[120vw] -left-[10vw]"
      >
        {testimonials.slice(half).map((comment, index) => (
          <SocialCard
            key={index}
            image={comment.image}
            name={comment.name}
            comment={comment.comment}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
