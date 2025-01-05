"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Hero from "@/components/shared/Hero";
import OurServices from "@/components/shared/OurServices";
import { services, values } from "@/constants";

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
    gsap.to(".background-gradient", 
      background: "linear-gradient(90deg, #013820, #013820, #013820)",
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

      {/* Services Preview */}
      <section className="py-20 px-4 md:px-12">
        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-500">
            Innovative and sustainable roofing solutions tailored to your needs.
          </p>
          <OurServices services={values} />
          <h2 className="text-4xl font-extrabold text-gray-800 mt-10 section-title">
            Our Services
          </h2>
          <OurServices services={services} />
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <img src="/images/003.png" alt="Benha Go Green" className="h-32" />
          <img
            src="/images/002.png"
            alt="Enactus Benha University"
            className="h-32"
          />
          <img
            src="/images/004.png"
            alt="FEEL Worldwide Foundation"
            className="h-32"
          />
        </div>
      </section>

      {/* Acknowledgement Section */}
      <section className="py-20 bg-gradient-to-r  text-center">
        <div className="max-w-4xl mx-auto flex max-sm:flex-col">
          <img
            src="/images/001.png"
            alt="Study of the US Institutes"
            className="mx-auto h-20 mb-6"
          />
          <p className="text-lg text-gray-700">
            BEZRAH, a non-profit organization founded in 2024 at the University
            of Massachusetts Amherst, USA, and now operating in Egypt, is proud
            to share that it emerged as a Community Action Plan developed during
            the Study of U.S. Institutes (SUSI) Program on Economic Empowerment.
            This initiative is supported by partial funding from the U.S.
            Department of State’s Bureau of Educational and Cultural Affairs,
            with Meridian International Center serving as the implementing
            partner.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
