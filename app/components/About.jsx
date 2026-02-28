"use client";

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { skillsData } from "@/assets/assets";

const ScrollRow = ({ items, showLabel = true }) => {
  return (
    <div className="relative w-full overflow-hidden py-6">

      {/* Gradient Edges */}
      <div className="absolute left-0 top-0 w-20 sm:w-28 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 sm:w-28 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex gap-6 animate-scroll">

        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center justify-center
              min-w-[90px] sm:min-w-[110px]
              h-[90px] sm:h-[110px]
              rounded-2xl
              bg-white/80 backdrop-blur-md
              shadow-sm
              hover:shadow-xl hover:-translate-y-2 hover:scale-105
              transition duration-300
              border border-gray-100
            "
          >
            <Image
              src={showLabel ? item.icon : item}
              alt="tech"
              className="w-8 h-8 sm:w-10 sm:h-10 mb-1"
            />

            {showLabel && (
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                {item.name}
              </span>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        max-w-5xl
        mx-auto
        px-6 sm:px-10 lg:px-12
        py-20
        text-center
      "
    >
      {/* Header */}
      <div className="mb-12">
        <p className="text-gray-500 mb-2">Introduction</p>
        <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
      </div>

      {/* Paragraph */}
      <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
        I am a motivated and detail-oriented{" "}
        <span className="font-semibold text-black">
          MERN Stack Developer
        </span>{" "}
        with strong experience building scalable and high-performance web
        applications. I have solved{" "}
        <span className="font-semibold text-black">300+</span>{" "}
        DSA problems on LeetCode, strengthening my problem-solving skills.
        I enjoy writing clean, optimized code and building maintainable
        systems using modern technologies.
      </p>

      {/* INFO CARDS */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12 text-left">
        {infoList.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="
              bg-white p-6 rounded-2xl shadow-sm
              hover:shadow-xl hover:-translate-y-1
              transition duration-300
            "
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
              <Image src={icon} alt={title} className="w-5" />
            </div>

            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* SKILLS */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">
          Skills
        </h4>

        <ScrollRow items={skillsData} showLabel />
      </div>

      {/* TOOLS */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">
          Tools I Use
        </h4>

        <ScrollRow items={toolsData} showLabel={false} />
      </div>

    </section>
  );
};

export default About;