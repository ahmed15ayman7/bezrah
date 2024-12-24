import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-56 max-xl:h-56 max-2xl:h-76 max-sm:h-40 max-lg:h-56  flex items-center justify-center text-center">
      <img
        src="/images/COVER.jpg"
        alt="Cover Image"
        height={100}
        className="object-cover hero-image max-sm:hidden opacity-80 absolute w-full"
      />
      <img
        src="/images/hero-sm.png"
        alt="Cover Image"
        height={100}
        className="object-cover hero-image hidden max-sm:block opacity-80 absolute w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38413190] to-[#384131] background-gradient"></div>
      <div className="relative z-10 hero-content max-w-3xl px-4 md:px-8">
        {/* <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl tracking-tight leading-tight"> 
      Sustainable Roofing Solutions
     </h1>
    <p className="mt-6 text-lg md:text-xl text-gray-300 drop-shadow-lg">
       Innovation meets sustainability. Transform your roof into a greener future. 
    </p> */}
        <Link
          href="/services"
          className="inline-block max-sm:text-[14px] max-sm:p-2 bg-white bg-opacity-50 text-gray-900 font-bold py-2 mt-36 px-8 rounded-full text-lg md:text-xl hover:bg-opacity-80 transition-all cta-button shadow-md backdrop-blur-md transform hover:scale-105"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default Hero;
