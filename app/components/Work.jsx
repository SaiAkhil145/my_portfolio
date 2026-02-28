'use client'

import { workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const WorkCard = ({ project }) => {
  const [index, setIndex] = useState(0)

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [project.images.length])

  return (
    <div  className="
      group relative
      rounded-2xl
      overflow-hidden
      bg-white/80 backdrop-blur-md
      shadow-sm
      border border-gray-100
      hover:shadow-xl hover:-translate-y-1
      transition duration-300
    ">

      {/* Image */}
      <div className="relative h-52 sm:h-56 lg:h-60 overflow-hidden">
        <Image
          src={project.images[index]}
          alt={project.title}
          fill
          className="
            object-cover
            transition duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* Overlay */}
      <div className="
        absolute inset-0
        bg-linear-to-t from-black/80 via-black/40 to-transparent
        opacity-0 group-hover:opacity-100
        transition duration-500
        flex flex-col justify-end
        p-6
      ">
        <h3 className="text-lg sm:text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-sm text-gray-200 mt-2 line-clamp-3">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">

          <a
            href={project.live}
            target="_blank"
            className="
              px-4 py-1.5
              text-sm
              bg-white text-black
              rounded-full
              hover:bg-gray-200
              transition
            "
          >
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            className="
              px-4 py-1.5
              text-sm
              border border-white
              text-white
              rounded-full
              hover:bg-white hover:text-black
              transition
            "
          >
            Code
          </a>

        </div>
      </div>

    </div>
  )
}

const Work = () => {
  return (
    <section
      id="mywork"
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
        <p className="text-gray-500 mb-2">My Portfolio</p>

        <h2 className="text-4xl sm:text-5xl font-bold">
          My Latest Work
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A curated collection of real-world applications showcasing my
          full-stack and frontend development skills.
        </p>
      </div>

      {/* Grid */}
      <div className="
        grid
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-8
      ">
        {workData.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>

      {/* More Projects */}
      <div className="flex justify-center mt-16">
        <a
          href="https://github.com/SaiAkhil145"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex items-center gap-3
            px-8 py-3
            bg-black text-white
            rounded-full
            text-sm font-medium
            hover:bg-gray-800
            transition duration-300
          "
        >
          More Projects
          <span className="group-hover:translate-x-1 transition">
            →
          </span>
        </a>
      </div>

    </section>
  )
}

export default Work