"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import RotatingText from "./RotatingText";

const Header = () => {
  return (
    <section
      id="home"
      className="
        relative w-full
        min-h-screen
        pt-28 sm:pt-32
        flex items-center justify-center
        overflow-hidden
        bg-gradient-to-b from-white via-gray-50 to-white
        scroll-mt-24
      "
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-140px] right-[-140px] w-[360px] h-[360px] bg-blue-300 rounded-full blur-3xl opacity-30"></div>

      {/* Container */}
      <div
        className="
        w-11/12 max-w-7xl mx-auto
        grid md:grid-cols-2
        items-center
        gap-12 md:gap-20 lg:gap-28
      "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1">

          <p className="text-lg font-medium text-gray-500 tracking-wide flex gap-2 items-center justify-center md:justify-start">
            <Image src={assets.hand_icon} width={22} alt="hand" />
            Hello, I’m
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Sai Revu
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-emerald-600">
            <RotatingText />
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-xl leading-relaxed mx-auto md:mx-0">
            I build scalable and high-performance web applications using modern
            technologies with a strong focus on clean UI, user experience, and
            maintainable architecture.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {["React", "Next.js", "Node.js", "MongoDB", "Tailwind"].map(
              (tech) => (
                <span
                  key={tech}
                  className="
                    px-4 py-1.5 text-sm font-medium
                    bg-white/70 backdrop-blur-md
                    border border-gray-200
                    rounded-full shadow-sm
                    hover:shadow-lg hover:-translate-y-1
                    hover:bg-black hover:text-white
                    transition duration-300 cursor-default
                  "
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">

            <a
              href="#contact"
              className="
                px-7 py-3 rounded-full
                bg-black text-white
                flex items-center justify-center gap-2
                shadow-lg hover:shadow-xl
                hover:scale-105 hover:bg-gray-800
                transition duration-300
              "
            >
              Contact Me
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </a>

            <a
              href="/Full_Stack_Developer__Sai_Revu_Resume.pdf"
              download
              className="
                px-7 py-3 rounded-full
                border border-gray-300
                flex items-center justify-center gap-2
                hover:bg-gray-100 hover:scale-105
                transition duration-300
              "
            >
              My Resume
              <Image src={assets.download_icon} alt="" className="w-4" />
            </a>

          </div>
        </div>

        {/* RIGHT PROFILE */}
        <div className="flex justify-center order-1 md:order-2 relative">

          {/* Glow */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-2xl opacity-30"></div>

          {/* Profile */}
          <div className="relative flex flex-col items-center animate-float">

            <div className="p-2 rounded-full border border-gray-200 shadow-2xl hover:scale-105 transition duration-500 bg-white">
              <Image
                src={assets.profile_img}
                alt="Sai Revu"
                className="
                  rounded-full
                  w-44 h-44
                  sm:w-56 sm:h-56
                  md:w-64 md:h-64
                  lg:w-72 lg:h-72
                  object-cover
                "
              />
            </div>

            {/* Availability Badge */}
            <div className="mt-6 backdrop-blur-md bg-white/70 border border-gray-200 text-gray-800 text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md">
              🚀 Available for Work
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Header;