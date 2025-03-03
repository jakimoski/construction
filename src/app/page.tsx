"use client";
import Dashboard from "@/components/Dashboard";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

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
    </main>
  );
}
