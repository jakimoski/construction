"use client";
import Lottie, { LottieRef } from "lottie-react";
import animation from "../../../public/mail.json";

import ContactForm from "@/components/Contact/ConatctForm";
import { useRef, useEffect } from "react";

export default function ContactUs() {
  const lottieRef = useRef(null) as LottieRef;
  const contactInfo = [
    "Location: Cargo Flow Logistics, 123 Global Trade Avenue Melbourne LC 56789",
    "Phone: +389 70 123 456",
    "Email:  support@cargoflow.com",
  ];

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.4);
    }
  }, []);

  return (
    <section className="flex flex-col relative justify-center  min-h-screen p-4 z-0 lg:px-24">
      <h1 className="text-4xl lg:text-7xl font-bold text-blue-400 pt-24 pb-8 md:mb-8 text-center uppercase">
        Contact Us
      </h1>
      <div className="flex md:flex-row z-1 flex-col items-center justify-center">
        <div className="md:w-1/2 w-full sm:pl-2 lg:pl-8 text-center md:text-left mb-7 md:mb-0">
          {contactInfo.map((info) => (
            <p key={info} className="text-white text-xl font-bold pb-4 md:pb-6">
              {info}
            </p>
          ))}
        </div>
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
      </div>
      <Lottie
        lottieRef={lottieRef}
        className="max-w-[80rem] inset-0 absolute z-0"
        animationData={animation}
      />
    </section>
  );
}
