"use client";

import { useEffect, useState } from "react";

const roles = [
  { text: "MERN Stack Developer", color: "text-emerald-600" },
  { text: "Frontend Developer", color: "text-rose-500" },
  { text: "Backend Developer", color: "text-sky-600" },
  { text: "Full Stack Developer", color: "text-amber-600" },
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index].text;

    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));

        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // Deleting
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <span
      className={`
        inline-block font-light tracking-wide
        ${roles[index].color}
      `}
    >
      {displayedText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}
