"use client";
import Dashboard from "@/components/Dashboard";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

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
    </main>
  );
}
