"use client";

import About from "./view/About";
import Features from "./view/Features";
import Pricing from "./view/Pricing";
import Testimonials from "./view/Testimonials";
import Image from "next/image";
import Location from "../../public/assets/locations.png";
import Footer from "./components/shared/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <About />
      <Features />
      <Pricing />
      {/* Locations Section */}
      <section className="md:mx-0 mx-2">
        <h1
          className="font-medium md:text-4xl text-3xl  text-center"
          data-aos="zoom-in"
        >
          Huge Global Network of Fast VPN
        </h1>
        <p
          className="text-secondary text-center mt-4 lg:w-4/12 md:w-8/12 w-full mx-auto"
          data-aos="zoom-in"
        >
          See <span className="font-medium">Lasles</span>
          <span className="font-bold">VPN </span> everywhere to make it easier
          for you when you move locations.
        </p>
        <div className="flex justify-center my-8 md:mx-8" data-aos="zoom-out">
          <Image src={Location} alt="location" />
        </div>
      </section>
      <Testimonials />
      <Footer />
    </main>
  );
}
