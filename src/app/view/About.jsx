"use client";

import Image from "next/image";
import Vector from "../../../public/assets/Illustration-1.png";
import Button from "../components/buttons/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex lg:px-20 md:px-8 items-center lg:space-x-0 md:space-x-4 md:mt-4 md:flex-row flex-col-reverse px-8"
      data-aos="zoom-in-up"
    >
      <div className="md:w-1/2 mx-auto">
        <h1 className="lg:text-5xl md:text-2xl text-xl md:mt-0 mt-4 font-medium md:text-start text-center ">
          Want anything to be easy with{" "}
          <span className="font-semibold">Lasles</span>
          <span className="font-bold">VPN</span>
        </h1>
        <p className="text-secondary py-5 lg:text-base md:text-[12px] md:text-start text-center">
          Provide a network for all your needs with ease and fun using{" "}
          <span className="font-medium">Lasles</span>
          <span className="font-bold">VPN </span>
          discover interesting features from us.
        </p>
        <div className="flex md:block justify-center">
          <Button text="Get Started" />
        </div>
      </div>
      <div className="lg:w-auto md:w-1/2">
        <Image src={Vector} alt="ilustration-1" />
      </div>
    </div>
  );
};

export default About;
