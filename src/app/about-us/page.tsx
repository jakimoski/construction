"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/About/Hero"), { ssr: false });
const OurStory = dynamic(() => import("@/components/About/OurStory"), {
  ssr: false,
});
const OurReach = dynamic(() => import("@/components/About/OurReach"), {
  ssr: false,
});
const Cta = dynamic(() => import("@/components/Cta"), { ssr: false });

export default function AboutUs() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <Hero />
      <OurStory />
      <OurReach />
      <Cta />
    </main>
  );
}
