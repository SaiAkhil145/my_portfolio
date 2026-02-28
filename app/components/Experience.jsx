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
        py-16
        text-center
      "
    >
      {/* Header */}
      <div className="mb-12">
        <p className="text-gray-500 mb-2 text-sm">Career Path</p>
        <h2 className="text-4xl sm:text-5xl font-bold">My Experience</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          A snapshot of my professional journey building scalable and
          high-performance web applications.
        </p>
      </div>

      {/* Vertical Roadmap */}
      <div className="relative text-left">

        {/* Spine line — left on mobile, center on sm+ */}
        <div className="
          absolute top-0 bottom-0 w-px bg-gray-200
          left-5 sm:left-1/2
        " style={{ transform: "translateX(-50%)" }} />

        <div className="flex flex-col">
          {experienceData.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === experienceData.length - 1;

            return (
              <div
                key={index}
                className={`relative flex items-start sm:items-stretch ${!isLast ? "pb-8" : ""}`}
              >
                {/* ── LEFT CARD (desktop odd) ── */}
                <div className={`hidden sm:flex w-1/2 ${isEven ? "pr-8 justify-end" : "pr-8"}`}>
                  {isEven && <ExperienceCard exp={exp} side="left" />}
                </div>

                {/* ── SPINE NODE ── */}
                <div className="
                  relative z-10 flex-shrink-0
                  flex items-center justify-center
                  w-10 h-10
                  bg-white border-2 border-black
                  rounded-full shadow-md
                  sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-4
                ">
                  <Image src={exp.icon} alt={exp.title} width={18} height={18} />
                </div>

                {/* ── RIGHT CARD (desktop even) ── */}
                <div className={`hidden sm:flex w-1/2 ${!isEven ? "pl-8" : "pl-8"}`}>
                  {!isEven && <ExperienceCard exp={exp} side="right" />}
                </div>

                {/* ── MOBILE CARD ── */}
                <div className="sm:hidden flex-1 pl-5">
                  <ExperienceCard exp={exp} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

const ExperienceCard = ({ exp }) => (
  <div className="
    w-full
    bg-white/80 backdrop-blur-md
    rounded-2xl
    p-5 sm:p-6
    shadow-sm
    border border-gray-100
    hover:shadow-xl hover:-translate-y-1
    transition duration-300
  ">
    {/* Top Row */}
    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 mb-4">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold leading-tight">
          {exp.title}
        </h3>
        <p className="text-gray-600 font-medium text-sm">{exp.company}</p>
      </div>
      <div className="
        self-start xs:self-auto flex-shrink-0
        px-3 py-1
        rounded-full
        bg-black text-white
        text-xs whitespace-nowrap
      ">
        {exp.duration}
      </div>
    </div>

    {/* Points */}
    <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
      {exp.points.map((point, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mt-5">
      {exp.tech.split(",").map((tech, i) => (
        <span
          key={i}
          className="
            px-2.5 py-1
            rounded-lg
            bg-white
            border border-gray-200
            text-xs text-gray-700
            hover:shadow-md hover:-translate-y-0.5
            transition duration-200
          "
        >
          {tech.trim()}
        </span>
      ))}
    </div>
  </div>
);

export default Experience;