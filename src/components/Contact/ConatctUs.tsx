"use client";
import ContactForm from "./ConatctForm";
import Lottie from "lottie-react";
import animation from "../../../public/mail.json";

const contactInfo = [
  "Location: Cargo Flow Logistics, 123 Global Trade Avenue Melbourne LC 56789",
  "Phone: +389 70 123 456",
  "Email:  support@cargoflow.com",
];

export default function ConatctUs() {
  return (
    <div className="flex md:flex-row  flex-col items-center justify-center">
      <div className="md:w-1/2 w-full z-1 sm:pl-2 lg:pl-8 text-center md:text-left mb-7 md:mb-0">
        {contactInfo.map((info) => (
          <p key={info} className="text-white text-xl font-bold pb-4 md:pb-6">
            {info}
          </p>
        ))}
      </div>
      <div className="md:w-1/2 z-1 w-full">
        <ContactForm />
      </div>
      <Lottie
        className="max-w-[80rem] inset-0 absolute z-0"
        animationData={animation}
      />
    </div>
  );
}
