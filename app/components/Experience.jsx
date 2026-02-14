
"use client";

import { experienceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        w-11/12 max-w-5xl mx-auto
        py-24
        flex flex-col items-center
        text-center
        gap-20
      "
    >
      {/* Section Title */}
      <div>
        <h2 className="text-3xl sm:text-5xl font-ovo leading-tight">
          My Experience
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-outfit">
          A snapshot of my professional journey building scalable and
          high-performance web applications.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300/60 -translate-x-1/2"></div>

        <div className="flex flex-col gap-16">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-md z-10">
                <Image
                  src={exp.icon}
                  alt={exp.title}
                  width={20}
                  height={20}
                  className="invert"
                />
              </div>

              {/* Card */}
              <div
                className="
                  mt-16
                  w-full
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  p-8 md:p-10
                  shadow-sm
                  hover:shadow-xl
                  transition
                  duration-300
                  text-left
                "
              >
                {/* Duration Badge */}
                <div className="inline-block px-5 py-1.5 rounded-full bg-black text-white text-sm mb-6">
                  {exp.duration}
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold font-ovo">
                  {exp.title}
                </h3>

                <p className="text-gray-700 font-medium mt-2">
                  {exp.company}
                </p>

                {/* Bullet Points */}
                <ul className="mt-6 space-y-3 text-gray-600 font-outfit leading-relaxed">
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
                        px-4 py-1.5
                        rounded-full
                        border border-gray-300
                        text-sm
                        text-gray-700
                        font-outfit
                      "
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
