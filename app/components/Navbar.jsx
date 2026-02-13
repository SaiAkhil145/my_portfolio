/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [mounted, setMounted] = useState(false);
  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          w-full fixed top-0 left-0
          px-5 lg:px-8 xl:px-[8%] py-4
          flex items-center justify-between
          z-50 transition-all duration-300
          bg-white

          ${scroll ? "shadow-sm" : ""}
        `}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className="
            hidden md:flex items-center gap-6 lg:gap-8
            rounded-full px-10 py-2.5
            bg-white shadow-sm
          "
        >
          <li>
            <a href="#top" className="font-ovo text-black hover:text-gray-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="font-ovo text-black hover:text-gray-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="font-ovo text-black hover:text-gray-600 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#work" className="font-ovo text-black hover:text-gray-600 transition">
              My Work
            </a>
          </li>

          <li>
            <a href="#socials" className="font-ovo text-black hover:text-gray-600 transition">
              Socials
            </a>
          </li>

          <li>
            <a href="#contact" className="font-ovo text-black hover:text-gray-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Contact Button */}
          <a
            href="#contact"
            className="
              hidden lg:flex items-center gap-3 px-8 py-2.5
              border border-gray-400
              rounded-full ml-3 font-ovo
              text-black
              hover:bg-gray-100
              transition
            "
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="arrow" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden ml-2"
            onClick={() => setSideBarOpen(true)}
          >
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`
            flex md:hidden flex-col gap-5
            py-20 px-8
            fixed right-0 top-0 bottom-0
            w-64 h-screen
            bg-white
            z-50

            transition-transform duration-500
            ${sideBarOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close Button */}
          <div className="absolute right-8 top-6">
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
              onClick={() => setSideBarOpen(false)}
            />
          </div>

          <li>
            <a
              href="#top"
              onClick={() => setSideBarOpen(false)}
              className="font-ovo text-black hover:text-gray-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setSideBarOpen(false)}
              className="font-ovo text-black hover:text-gray-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              onClick={() => setSideBarOpen(false)}
              className="font-ovo text-black hover:text-gray-600 transition"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#work"
              onClick={() => setSideBarOpen(false)}
              className="font-ovo text-black hover:text-gray-600 transition"
            >
              My Work
            </a>
          </li>

          <li>
            <a
              href="#socials"
              onClick={() => setSideBarOpen(false)}
              className="font-ovo text-black hover:text-gray-600 transition"
            >
              Socials
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setSideBarOpen(false)}
              className="font-ovo text-black hover:text-gray-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
