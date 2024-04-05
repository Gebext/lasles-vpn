"use client";

import features from "../../../public/data/features";
import Ilustration from "../../../public/assets/features-vector.png";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  // Sample array of features
  const additionalFeatures = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN.",
    "No specific time limits.",
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="features" data-aos="flip-up">
      <div className="flex md:px-32 px-4 justify-center lg:space-x-8 md:space-x-2 my-20">
        {features.map((feature, index) => (
          <div key={index} className="flex">
            <div className="flex items-center justify-center bg-[#FFECEC] md:w-[55px] md:h-[55px] w-[28px] h-[28px] rounded-full">
              <h1 className="md:text-3xl  text-primary">{feature.icon}</h1>
            </div>
            <div className="md:mx-8 mx-2 border-r-2 border-slate-200 md:pr-8 pr-2">
              <h1 className="font-bold md:text-2xl">{feature.count}+</h1>
              <p className="text-secondary md:text-xl text-[14px]">
                {feature.feature}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex lg:w-9/12 lg:mx-auto md:mx-4 items-center justify-between md:flex-row flex-col">
        <div className="lg:w-auto md:w-1/2" data-aos="fade-left">
          <Image src={Ilustration} alt="ilustration" />
        </div>
        <div
          className="md:w-1/2 w-10/12 md:mx-0 md:my-0 my-16 mx-auto lg:pl-4"
          data-aos="fade-right"
        >
          <h1 className="font-medium lg:text-4xl md:text-2xl w-10/12">
            We Provide Many Features You Can Use
          </h1>
          <p className="text-secondary w-10/12 lg:text-base md:text-sm">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="lg:space-y-4 lg:py-5 space-y-2 py-4">
            {additionalFeatures.map((item, index) => (
              <li key={index} className="flex items-center text-secondary">
                <FaCheckCircle className="text-[#2FAB73]" />
                <h1 className="text-sm">{item}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
