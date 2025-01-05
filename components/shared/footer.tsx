import Link from "next/link";
import { Tooltip } from "@mui/material"; // MUI Tooltip
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandTiktok,
  IconMessageCircle,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#013820] via-[#4ebc78] to-[#013820] text-white py-6">
      <section className="pt-20 pb-10 text-center">
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
            className="mt-8 inline-block bg-white bg-opacity-20 text-white py-3 px-8 rounded-full text-lg md:text-xl hover:bg-opacity-30 transition-all shadow-md backdrop-blur-md transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-10">
        <h3 className="text-xl font-bold mb-4 text-center">Follow Us</h3>
        <div className="flex justify-center gap-6">
          <Tooltip title="Instagram" arrow>
            <Link
              href="https://www.instagram.com/bezrah.eg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <IconBrandInstagram size={32} />
            </Link>
          </Tooltip>
          <Tooltip title="LinkedIn" arrow>
            <Link
              href="https://www.linkedin.com/company/bezraheg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <IconBrandLinkedin size={32} />
            </Link>
          </Tooltip>
          <Tooltip title="Facebook" arrow>
            <Link
              href="https://www.facebook.com/profile.php?id=61563803711153&locale=ar_AR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <IconBrandFacebook size={32} />
            </Link>
          </Tooltip>
          <Tooltip title="TikTok" arrow>
            <Link
              href="https://www.tiktok.com/@bezrah.eg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <IconBrandTiktok size={32} />
            </Link>
          </Tooltip>
          <Tooltip title="WhatsApp Community" arrow>
            <Link
              href="https://chat.whatsapp.com/EbbklsKQUGp8yKm37QUi6Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <IconMessageCircle size={32} />
            </Link>
          </Tooltip>
          <Tooltip title="WhatsApp" arrow>
            <Link
              href="https://wa.me/+201501549813"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <IconBrandWhatsapp size={32} />
            </Link>
          </Tooltip>
        </div>
        {/* <p className="text-center mt-4">Phone / WhatsApp: +20 15 01549813</p> */}
      </section>

      <div className=" w-full text-center mt-6  ">
        <p className="text-sm">
          Website by BEZRAH Team © 2024 BEZRAH. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
