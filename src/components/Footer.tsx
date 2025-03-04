import React from "react";
import { socials } from "../constants";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="p-10">
      <div className=" text-amber-50 flex sm:justify-between p-6 justify-center items-center gap-10 max-sm:flex-col">
        <p className="lg:block text-white">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="nofollow"
                className="flex social-icons items-center justify-center w-12 h-12  border-2 border-blue-800 bg-blue-950 hover:bg-blue-800 rounded-full transition-colors "
              >
                <Image
                  src={item.iconUrl}
                  width={25}
                  height={25}
                  alt={item.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
