import Link from "next/link";

// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#384131] via-[#2a3c2f] to-[#4a6a52] text-white py-6">
      <section className="py-20 bg-gradient-to-r from-[#384131] via-[#2a3c2f] to-[#4a6a52] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-white font-bold">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Contact us today and start your journey toward a greener, more
            sustainable future for your roof.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white bg-opacity-20 text-white py-3 px-8 rounded-full text-lg md:text-xl hover:bg-opacity-30 transition-all shadow-md backdrop-blur-md transform hover:scale-105 cta-button"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Bezra. All rights reserved.</p>
        <p className="text-sm">Website by Bezra Team</p>
      </div>
    </footer>
  );
};

export default Footer;
