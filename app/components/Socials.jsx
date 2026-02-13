import { socialLinks } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Socials = () => {
  return (
    <div
      id='socials'
      className='w-full px-[6%] sm:px-[10%] lg:px-[12%] py-20 bg-white'
    >
      {/* Heading */}
      <h4 className='text-center mb-2 text-lg font-ovo text-gray-600 tracking-wide uppercase'>
        Connect With Me
      </h4>

      <h2 className='text-center text-4xl sm:text-5xl font-ovo mb-6'>
        Find Me Online
      </h2>

      <p className='text-center max-w-xl mx-auto text-gray-600 mb-14 font-ovo leading-relaxed'>
        Feel free to explore my coding profiles and connect with me on professional platforms.
      </p>

      {/* Social Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto'>
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={item.name}
            className='group flex flex-col items-center justify-center gap-3 p-6 
            bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300
            hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400'
          >
            {/* Icon */}
            <div className='p-3 rounded-full bg-gray-100 group-hover:bg-gray-200 transition'>
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className='group-hover:scale-110 transition'
              />
            </div>

            {/* Name */}
            <span className='text-sm font-medium text-gray-700 group-hover:text-black tracking-wide'>
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Socials
