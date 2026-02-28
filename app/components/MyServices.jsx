"use client";

import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const MyServices = () => {
  return (
    <section
      id="services"
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
          What I Offer
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold">
          My Services
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          I specialize in building modern, scalable, and high-performance
          applications with a strong focus on clean UI and user experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="
        grid
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-2
        gap-6
      ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="
              group
              text-left
              bg-white/80 backdrop-blur-md
              border border-gray-100
              rounded-2xl
              p-8
              shadow-sm
              hover:shadow-xl hover:-translate-y-1
              transition duration-300
            "
          >
            {/* Icon */}
            <div className="
              w-12 h-12
              flex items-center justify-center
              bg-gray-100
              rounded-xl
              mb-5
              group-hover:bg-gray-200
              transition
            ">
              <Image src={icon} alt={title} className="w-6 h-6" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>

            {/* Link */}
            <a
              href={link}
              className="
                inline-flex items-center gap-2
                text-sm font-medium
                mt-6
                text-black
                hover:gap-3
                transition-all
              "
            >
              Learn More
              <Image
                src={assets.right_arrow}
                alt=""
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServices;