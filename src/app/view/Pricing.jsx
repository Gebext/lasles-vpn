"use client";

import Image from "next/image";
import Vector from "../../../public/assets/pricing.jpg";
import { FaCheck } from "react-icons/fa";
import PricingButton from "../components/buttons/PricingButton";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      cost: 0,
    },
    {
      name: "Basic Plan",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "24/7 Customer Support",
      ],
      cost: 9,
    },
    {
      name: "Premium Plan",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "24/7 Customer Support",
        "High Speed Servers",
      ],
      cost: 12,
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-16" id="pricing">
      <h1 className="text-center font-medium text text-4xl" data-aos="zoom-in">
        Choose Your Plan
      </h1>
      <p
        className="text-center lg:w-4/12 md:w-full mx-auto text-secondary"
        data-aos="zoom-in"
      >
        Lets choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="flex space-x-8 lg:w-8/12 md:mx-8 lg:mx-auto md:flex-row flex-col">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rounded-lg border-2 border-secondary md:my-20 my-4 md:w-8/12 w-10/12 mx-auto md:py-20 py-8"
            data-aos="fade-up"
          >
            <div className="flex justify-center">
              <Image src={Vector} alt="iluts" />
            </div>
            <div className="w-10/12 mx-auto">
              <h1 className="text-center font-medium text-md mt-2">
                {plan.name}
              </h1>
              <ul className="lg:space-y-4 space-y-2 md:mt-8 my-4 h-[224px]">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <h1 className="flex items-center lg:text-base md:text-[14px] space-x-4">
                      <FaCheck className="text-[#2FAB73]" />
                      <p>{feature}</p>
                    </h1>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center lg:mt-8">
                <h1 className="text-2xl font-medium text-center">
                  <span>{plan.cost === 0 ? "Free" : `$${plan.cost} `}</span>
                  <span>/ mo</span>
                </h1>
                <PricingButton className="mx-auto" />{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
