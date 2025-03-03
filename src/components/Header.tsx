"use client";
import { navigation } from "../constants";
import { useState } from "react";
import MenuSvg from "./svg/MenuSvg";
import Image from "next/image";
import logo from "../assets/logo.png";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
    console.log(openNavigation);
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-xl ${
        openNavigation ? "bg-neutral-900 backdrop-blur-sm" : ""
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block z-3 xl:mr-8" href="#hero">
          <Image src={logo} width={250} height={61} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[0] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:ml-auto lg:bg-transparent`}
        >
          <div
            className={`${
              openNavigation ? "w-full h-[100svh] bg-black" : ""
            } relative   z-2 flex flex-col lg:h-auto items-center justify-center p-4 m-auto lg:flex-row`}
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative text-amber-50 font-code text-4xl transition-all  duration-300 ease-in-out uppercase rounded-4xl    hover:bg-blue-800  px-6 py-6 md:p-4  lg:text-[1rem] lg:font-semibold lg:mr-1  xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg checked={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
