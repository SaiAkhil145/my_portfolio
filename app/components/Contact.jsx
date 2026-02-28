"use client";

import Image from "next/image";
import React, { useState } from "react";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Message sent successfully!" : "Something went wrong.");
  };

  return (
    <section
      id="contact"
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
          Get In Touch
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold">
          Contact Me
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind, want to collaborate, or just say hello?
          Feel free to reach out and I’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={onSubmit}
        className="
          bg-white/80 backdrop-blur-md
          rounded-2xl
          p-8 sm:p-10
          shadow-sm
          border border-gray-100
          text-left
        "
      >
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="
              w-full
              px-4 py-3
              rounded-lg
              bg-white
              border border-gray-200
              outline-none
              focus:border-black
              transition
            "
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="
              w-full
              px-4 py-3
              rounded-lg
              bg-white
              border border-gray-200
              outline-none
              focus:border-black
              transition
            "
          />

        </div>

        <textarea
          name="message"
          rows={6}
          required
          placeholder="Your Message"
          className="
            w-full
            px-4 py-3
            rounded-lg
            bg-white
            border border-gray-200
            outline-none
            focus:border-black
            transition
            mb-6
          "
        ></textarea>

        {/* Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="
              group
              flex items-center gap-3
              px-8 py-3
              bg-black text-white
              rounded-full
              hover:bg-gray-800
              transition duration-300
            "
          >
            Send Message
            <Image
              src={assets.right_arrow_white}
              alt="arrow"
              className="w-4 group-hover:translate-x-1 transition"
            />
          </button>
        </div>

        {/* Result */}
        {result && (
          <p className="
            text-center
            mt-6
            text-sm
            text-gray-600
          ">
            {result}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;