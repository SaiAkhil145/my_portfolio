import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[6%] sm:px-[10%] lg:px-[12%] py-16 scroll-mt-20"
    >
      {/* Header */}
      <h4 className="text-center mb-2 text-lg font-ovo text-gray-600">
        Introduction
      </h4>

      <h2 className="text-center text-4xl sm:text-5xl font-ovo">
        About Me
      </h2>

      {/* Main Content */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-14 lg:my-20">

        {/* Image */}
        <div className="w-52 sm:w-64 lg:w-80 rounded-3xl shrink-0">
          <Image
            src={assets.user_image}
            alt="Sai Revu"
            className="w-full rounded-3xl border-2 border-gray-500/10 shadow-sm"
            priority
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">

          {/* Highlighted Paragraph */}
          <p className="mb-6 max-w-2xl mx-auto lg:mx-0 font-ovo text-gray-700 leading-relaxed">

            I am a motivated and detail-oriented{" "}
            <span className="font-semibold text-black">
              MERN Stack Developer
            </span>{" "}
            with strong hands-on experience in building{" "}

            <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md">
              scalable
            </span>{" "}
            and{" "}

            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
              high-performance
            </span>{" "}
            web applications.

            I have solved{" "}
            <span className="font-semibold text-black">300+</span>{" "}
            Data Structures and Algorithms problems on{" "}

            <span className="text-orange-600 font-semibold">
              LeetCode
            </span>, strengthening my{" "}

            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-md">
              problem-solving
            </span>{" "}
            skills.

            I enjoy writing{" "}

            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-md">
              clean, optimized code
            </span>{" "}
            and building{" "}

            <span className="font-semibold text-black">
              maintainable systems
            </span>{" "}
            using modern technologies.
          </p>

         

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-2xl mx-auto lg:mx-0">

            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="
                  border border-gray-300 rounded-xl p-5 cursor-pointer
                  hover:bg-gray-100 hover:-translate-y-1
                  duration-300 hover:shadow-md
                "
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-7 mx-auto lg:mx-0 mt-2"
                />

                <h3 className="my-3 font-semibold text-gray-700">
                  {title}
                </h3>

                <p className="text-gray-900 text-md leading-relaxed">
                  {description}
                </p>
              </li>
            ))}

          </ul>

          {/* Tools */}
          <h4 className="my-6 text-gray-700 font-ovo font-bold text-center lg:text-left">
            Tools I Use
          </h4>

          <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-5">

            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="
                  flex items-center justify-center
                  w-11 sm:w-14 aspect-square
                  border border-gray-400 rounded-lg
                  hover:-translate-y-1 duration-300
                  hover:shadow-sm
                "
              >
                <Image
                  src={tool}
                  alt="tool"
                  className="w-5 sm:w-7"
                />
              </li>
            ))}

          </ul>

        </div>
      </div>
    </div>
  );
};

export default About;
