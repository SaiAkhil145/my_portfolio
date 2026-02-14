"use client";

import { useEffect, useState } from "react";

const roles = [
  { text: "MERN Stack Developer", color: "text-emerald-500" },
  { text: "Frontend Developer", color: "text-rose-400" },
  { text: "Backend Developer", color: "text-sky-500" },
  { text: "Full Stack Developer", color: "text-amber-500" },
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[index].text;

    let typingSpeed = isDeleting ? 60 : 110;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentText.slice(0, displayedText.length + 1));

        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 1800); // Pause before deleting
        }
      } else {
        // Deleting backward
        setDisplayedText(currentText.slice(0, displayedText.length - 1));

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
        transition-colors duration-500
        ${roles[index].color}
      `}
    >
      {displayedText}
      <span className="ml-1 animate-blink">|</span>

      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </span>
  );
}
