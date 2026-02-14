import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import RotatingText from "./RotatingText";

const Header = () => {
  return (
    <section
      className="
        w-11/12 max-w-4xl mx-auto
        min-h-screen
        flex flex-col items-center justify-center
        text-center
        gap-8
        px-4 pt-24
      "
    >
      {/* Profile */}
      <div className="flex flex-col items-center gap-4">
        <Image
          src={assets.profile_img}
          alt="Sai Revu"
          className="rounded-full w-32 h-32 object-cover border-4 border-gray-200 shadow-md"
        />

        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-ovo">
          Hi! I&apos;m{" "}
          <span className="font-semibold text-2xl">Sai Revu</span>
          <Image
            src={assets.hand_icon}
            alt=""
            className="w-6 animate-wave"
          />
        </h3>
      </div>

      {/* Main Heading */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl sm:text-5xl lg:text-[64px] leading-tight font-ovo">
          <RotatingText />
        </h1>

        <p className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-outfit">
          based in India.
        </p>
      </div>

      {/* Description */}
      <p className="max-w-2xl text-gray-600 text-base md:text-lg font-outfit leading-relaxed">
        I build scalable web applications using modern technologies with focus
        on performance, clean UI, and exceptional user experience.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="#contact"
          className="
            px-8 py-3
            rounded-full
            bg-black text-white
            flex items-center gap-2
            hover:scale-105 hover:bg-gray-800
            transition duration-300
            shadow-md
          "
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/Full_Stack_Developer__Sai_Revu_Resume.pdf"
          download
          className="
            px-8 py-3
            rounded-full
            border border-gray-400
            flex items-center gap-2
            hover:bg-gray-100
            transition duration-300
          "
        >
          My Resume
          <Image src={assets.download_icon} className="w-4" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Header;
