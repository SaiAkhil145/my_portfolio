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
        pt-24 sm:pt-28
        flex items-center justify-center
        overflow-hidden
        bg-gradient-to-b from-white to-gray-50
        scroll-mt-24
      "
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-300 rounded-full blur-3xl opacity-30"></div>

      <div className="w-11/12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 text-center md:text-left">

          <p className="text-sm font-medium text-gray-500 tracking-wide">
            👋 Hello, I’m
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Sai Revu
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            <RotatingText />
          </h2>

          <p className="text-gray-600 max-w-lg leading-relaxed">
            I build scalable web applications using modern technologies with a
            strong focus on performance, clean UI, and exceptional user
            experience.
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
                flex items-center gap-2
                hover:scale-105 hover:bg-gray-800
                transition duration-300 shadow-md
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
                border border-gray-400
                flex items-center gap-2
                hover:bg-gray-100
                transition duration-300
              "
            >
              My Resume
              <Image src={assets.download_icon} alt="" className="w-4" />
            </a>

          </div>
        </div>

        {/* RIGHT PROFILE */}
        <div className="flex justify-center relative">

          {/* Glow Ring */}
          <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-2xl opacity-30"></div>

          {/* Profile Container */}
          <div className="relative flex flex-col items-center">

            <div className="p-2 rounded-full bg-white shadow-xl hover:scale-105 transition duration-500">
              <Image
                src={assets.profile_img}
                alt="Sai Revu"
                className="rounded-full w-64 h-64 object-cover"
              />
            </div>

            {/* Availability Badge */}
            <div className="mt-6 bg-black text-white text-sm px-5 py-2 rounded-full shadow-md hover:scale-105 transition duration-300">
              🚀 Available for Work
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Header;