/* eslint-disable react-hooks/set-state-in-effect */
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
  const [phase, setPhase] = useState("typing"); 
  // typing | pause | deleting

  useEffect(() => {
    const currentText = roles[index].text;
    let timeout;

    if (phase === "typing") {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100); // typing speed
      } else {
        timeout = setTimeout(() => {
          setPhase("pause");
        }, 1500); // pause after full word
      }
    }

    else if (phase === "pause") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 300);
    }

    else if (phase === "deleting") {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, 60); // deleting speed
      } else {
        setPhase("typing");
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, index]);

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
