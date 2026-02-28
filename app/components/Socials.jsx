"use client";

import { socialLinks } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <section
      id="socials"
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
        <p className="text-gray-500 mb-2">
          Connect With Me
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold">
          Find Me Online
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto leading-relaxed">
          Feel free to explore my coding profiles and connect with me on
          professional platforms.
        </p>
      </div>

      {/* Social Grid */}
      <div className="
        grid
        grid-cols-2 sm:grid-cols-4
        gap-6
      ">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="
              group
              flex flex-col items-center justify-center
              gap-4
              p-6
              rounded-2xl
              bg-white/80 backdrop-blur-md
              border border-gray-100
              shadow-sm
              hover:shadow-xl hover:-translate-y-1
              transition duration-300
            "
          >
            {/* Icon */}
            <div className="
              w-14 h-14
              flex items-center justify-center
              rounded-xl
              bg-gray-100
              group-hover:bg-gray-200
              transition
            ">
              <Image
                src={item.icon}
                alt={item.name}
                width={32}
                height={32}
                className="group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Name */}
            <span className="
              text-sm font-medium text-gray-700
              group-hover:text-black
              transition
            ">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;