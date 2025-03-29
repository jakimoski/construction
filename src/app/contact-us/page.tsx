"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const ContactUs = dynamic(() => import("@/components/Contact/ConatctUs"), {
  ssr: false,
});

export default function Contact() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex flex-col relative justify-center  min-h-screen p-4 z-0 lg:px-24">
      <h1 className="text-4xl lg:text-7xl font-bold text-blue-400 pt-24 pb-8 md:mb-8 text-center uppercase">
        Contact Us
      </h1>
      <ContactUs />
    </main>
  );
}
