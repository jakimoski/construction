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
    // Ensure this only runs on the client-side
    if (typeof window !== "undefined") {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        new LocomotiveScroll();
      })();
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

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
