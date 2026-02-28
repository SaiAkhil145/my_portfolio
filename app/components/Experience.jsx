"use client";

import { experienceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        w-full
        max-w-5xl
        mx-auto
        px-6 sm:px-10 lg:px-12
        py-24
        text-center
      "
    >
      {/* Header */}
      <div className="mb-14">
        <p className="text-gray-500 mb-2">Career Path</p>

        <h2 className="text-4xl sm:text-5xl font-bold">
          My Experience
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A snapshot of my professional journey building scalable and
          high-performance web applications.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-10 text-left">

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="
              relative
              bg-white/80 backdrop-blur-md
              rounded-2xl
              p-8 md:p-10
              shadow-sm
              border border-gray-100
              hover:shadow-xl hover:-translate-y-1
              transition duration-300
            "
          >
            {/* Top Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

              <div className="flex items-center gap-4">

                <div className="
                  w-12 h-12
                  flex items-center justify-center
                  bg-gray-100
                  rounded-xl
                ">
                  <Image
                    src={exp.icon}
                    alt={exp.title}
                    width={22}
                    height={22}
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {exp.title}
                  </h3>

                  <p className="text-gray-600 font-medium">
                    {exp.company}
                  </p>
                </div>

              </div>

              {/* Duration Badge */}
              <div className="
                px-4 py-1.5
                rounded-full
                bg-black
                text-white
                text-sm
                whitespace-nowrap
              ">
                {exp.duration}
              </div>

            </div>

            {/* Points */}
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-8">
              {exp.tech.split(",").map((tech, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1.5
                    rounded-lg
                    bg-white
                    border border-gray-200
                    text-sm
                    text-gray-700
                    hover:shadow-md hover:-translate-y-0.5
                    transition duration-200
                  "
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;