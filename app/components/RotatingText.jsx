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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out smoothly
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`
        inline-block font-light tracking-wide
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${roles[index].color}
        ${
          visible
            ? "opacity-100 translate-y-0 scale-100 blur-0"
            : "opacity-0 translate-y-2 scale-95 blur-sm"
        }
      `}
    >
      {roles[index].text}
    </span>
  );
}
