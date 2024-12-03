import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-56 flex items-center justify-center text-center">
      <Image
        src="/images/COVER.jpg"
        alt="Cover Image"
        // fill
        width={1300}
        height={100}
        className="object-cover hero-image opacity-80 absolute"
        priority
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
          className="inline-block bg-white bg-opacity-50 text-gray-900 font-bold py-2 mt-36 px-8 rounded-full text-lg md:text-xl hover:bg-opacity-80 transition-all cta-button shadow-md backdrop-blur-md transform hover:scale-105"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default Hero;
