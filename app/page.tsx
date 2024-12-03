"use client";
import Link from "next/link";
import Image from "next/image";
import { FaRegLightbulb, FaWrench, FaPaintBrush } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { services } from "@/constants";
import Hero from "@/components/shared/Hero";

const HomePage = () => {
  // GSAP Animations for all sections
  useEffect(() => {
    // Hero Section Fade-In & Parallax Effect
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );
    gsap.fromTo(
      ".hero-image",
      { scale: 1.1 },
      { scale: 1, duration: 2, ease: "power2.out" }
    );

    // Fade-in & Scale-up for Section Title
    gsap.fromTo(
      ".section-title",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 1 }
    );

    // Background Gradient Animation (Dynamic)
    gsap.to(".background-gradient", {
      background: "linear-gradient(90deg, #384131, #2a3c2f, #4a6a52)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  }, []);

  return (
    <main className="bg-white font-sans">
      {/* Hero Section */}
      <Hero />
      {/* Services Preview (Without Animation) */}
      <section className="py-20 px-4 md:px-12">
        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-500">
            Innovative and sustainable roofing solutions tailored to your needs.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map(({ Icon, title, text }) => (
              <div
                key={title}
                className=" bg-gradient-to-bl to-[#ffffff27] via-[#ffffff01] from-[#ffffff33] p-8 shadow-lg rounded-lg transition-all hover:shadow-2xl hover:scale-105 backdrop-blur-lg transform hover:rotate-2"
              >
                <Icon className="text-[#a0b59f] text-4xl mb-4 transition-transform transform hover:scale-125 hover:rotate-12" />
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
    </main>
  );
};

export default HomePage;
