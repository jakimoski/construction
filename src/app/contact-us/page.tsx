"use client";

import ContactForm from "@/components/Contact/ConatctForm";

export default function ContactUs() {
  const contactInfo = [
    "Location: Cargo Flow Logistics, 123 Global Trade Avenue Melbourne LC 56789",
    "Phone: +389 70 123 456",
    "Email:  support@cargoflow.com",
  ];

  return (
    <section className="flex flex-col relative justify-center  min-h-screen p-12 z-0 lg:px-24">
      <h1 className="text-4xl lg:text-7xl font-bold text-blue-400 pt-24 pb-8 md:mb-8 text-center uppercase">
        Contact Us
      </h1>
      <div className="flex md:flex-row flex-col items-center justify-center">
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
    </section>
  );
}
