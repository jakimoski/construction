"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const Services = dynamic(() => import("../components/Services"), {
  ssr: false,
});
const Dashboard = dynamic(() => import("../components/Dashboard"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("../components/Testimonials"), {
  ssr: false,
});

const Cta = dynamic(() => import("../components/Cta"), { ssr: false });

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <Dashboard />
      <Testimonials />
      <Cta />
    </main>
  );
}
