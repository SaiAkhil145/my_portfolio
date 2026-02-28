/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          px-6 lg:px-10 xl:px-[8%] py-4
          flex items-center justify-between
          transition-all duration-300

          ${
            scroll
              ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-gray-100"
              : "bg-transparent"
          }
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
          className={`
            hidden md:flex items-center gap-6 lg:gap-8
            px-8 py-2.5 rounded-full
            transition-all duration-300

            ${
              scroll
                ? "bg-white/80 backdrop-blur-md shadow-sm border border-gray-100"
                : "bg-white/60 backdrop-blur-md border border-white/40"
            }
          `}
        >
          {["Home", "About", "Experience", "Services", "My Work", "Socials", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-gray-800 hover:text-black transition font-medium"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Contact Button */}
          <a
            href="#contact"
            className="
              hidden lg:flex items-center gap-2
              px-6 py-2.5
              rounded-full
              bg-black text-white
              hover:bg-gray-800
              transition duration-300
            "
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3 invert" alt="arrow" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden"
            onClick={() => setSideBarOpen(true)}
          >
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            fixed top-0 right-0 h-screen w-64
            bg-white/90 backdrop-blur-xl
            shadow-xl
            transform transition-transform duration-500
            ${sideBarOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close */}
          <div className="flex justify-end p-6">
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
              onClick={() => setSideBarOpen(false)}
            />
          </div>

          <ul className="flex flex-col gap-6 px-8">
            {["Home", "About", "Experience", "Services", "My Work", "Socials", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    onClick={() => setSideBarOpen(false)}
                    className="text-gray-800 hover:text-black transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;