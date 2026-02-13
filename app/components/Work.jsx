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
    <div className='group relative rounded-2xl overflow-hidden shadow-lg bg-white'>

      {/* Image Slider */}
      <div className='relative h-55 sm:h-65 lg:h-70'>
        <Image
          src={project.images[index]}
          alt={project.title}
          fill
          className='object-cover transition duration-700'
        />
      </div>

      {/* Overlay */}
      <div
        className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 
        transition duration-500 flex flex-col justify-end p-6'
      >
        <h3 className='text-xl font-semibold text-white'>
          {project.title}
        </h3>

        <p className='text-sm text-gray-200 mt-2'>
          {project.description}
        </p>

        {/* Buttons */}
        <div className='flex gap-3 mt-4'>
          <a
            href={project.live}
            target='_blank'
            className='px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-gray-200 transition'
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target='_blank'
            className='px-4 py-2 text-sm border border-white text-white rounded-full hover:bg-white hover:text-black transition'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <div
      id='work'
      className='w-full px-[6%] sm:px-[10%] lg:px-[12%] py-20 scroll-mt-20'
    >
      {/* Header */}
      <h4 className='text-center mb-2 text-lg font-ovo text-gray-600'>
        My Portfolio
      </h4>

      <h2 className='text-center text-4xl sm:text-5xl font-ovo'>
        My Latest Work
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-16 font-ovo text-gray-600'>
        A curated collection of real-world applications showcasing my
        full-stack and frontend development skills.
      </p>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {workData.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>
      {/* More Projects Button */}
<div className='flex justify-center mt-16'>
  <a
    href='https://github.com/SaiAkhil145'
    target='_blank'
    rel='noopener noreferrer'
    className='group flex items-center gap-3 px-8 py-3 
    border-2 border-black rounded-full text-sm font-medium
    hover:bg-black hover:text-white transition duration-300'
  >
    More Projects

    <span className='group-hover:translate-x-1 transition'>
      →
    </span>
  </a>
</div>

    </div>
  )
}

export default Work
