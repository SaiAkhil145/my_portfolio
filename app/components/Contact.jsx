import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '@/assets/assets'
const Contact = () => {

  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "2208dcdc-1213-4a0b-b8bf-29846a62ffa4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <div
      id='contact'
      style={{ backgroundImage: "url('/footer-bg-color.png')" }}
      className='w-full px-[6%] sm:px-[10%] lg:px-[12%] py-20 scroll-mt-20 
      bg-cover bg-center'
    >
      <h4 className='text-center mb-2 text-lg font-ovo text-gray-600'>
        Get In Touch
      </h4>

      <h2 className='text-center text-4xl sm:text-5xl font-ovo'>
        Contact Me
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-16 font-ovo text-gray-600'>
        Have a project in mind, want to collaborate, or just say hello?
        Feel free to reach out and I’ll get back to you as soon as possible.
      </p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-8'>
           <input className='flex-1 outline-nonw p-3 border-[0.5px] border-gray-400 rounded-md bg-white' type="text" placeholder='Enter your name...' required name='name'/>
           <input className='flex-1 outline-nonw p-3 border-[0.5px] border-gray-400 rounded-md bg-white' type="email" placeholder='Enter your Email..' required name='email'/>
       </div>
       <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' rows={6} placeholder='Enter your message' name="message" id="" required></textarea>
       <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='right arrow' className='w-4'/></button>

       <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
