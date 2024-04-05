"use client";

import Logo from "../../../../public/assets/Vector-logo.svg";
import Image from "next/image";
import Login from "../buttons/Login";
import Signup from "../buttons/Signup";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="flex justify-between items-center lg:px-36 lg:py-10 md:px-4 md:py-8 px-4 py-4">
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="logo" />
        <h1 className="md:text-[20px] ">
          <span className="font-medium">Lasles</span>
          <span className="font-bold">VPN</span>
        </h1>
      </div>
      <ul className="md:flex hidden text-secondary lg:space-x-4 md:space-x-2">
        <li className="cursor-pointer hover:text-primary">
          <a href="#">About</a>
        </li>
        <li className="cursor-pointer hover:text-primary">
          <a href="#features">Features</a>
        </li>
        <li className="cursor-pointer hover:text-primary">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="cursor-pointer hover:text-primary">
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <div className="flex lg:space-x-6 md:space-x-4 space-x-2 items-center">
        <Login />
        <Signup />
        <RxHamburgerMenu
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full bg-white shadow-md z-50 transition-all w-64"
          data-aos="fade-left"
        >
          <ul className="text-secondary flex flex-col h-full justify-center mx-auto w-1/2 space-y-8">
            <li className="cursor-pointer hover:text-primary">
              <a href="#">About</a>
            </li>
            <li className="cursor-pointer hover:text-primary">
              <a href="#features">Features</a>
            </li>
            <li className="cursor-pointer hover:text-primary">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="cursor-pointer hover:text-primary">
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
