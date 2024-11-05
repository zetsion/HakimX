import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Description from "./Description";
/* eslint-disable react/prop-types */

const AnimatedText = ({ text }) => (
  <div className="flex flex-wrap justify-center">
    {text.split("").map((letter, index) => (
      <span
        key={index}
        style={{ animationDelay: `${index * 0.2}s` }}
        className="animate-fadeIn mx-1 text-3xl font-bold text-white opacity-0"
      >
        {letter}
      </span>
    ))}
  </div>
);

export default function MotoAnimation() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowText((prev) => !prev), 30000);
    return () => clearInterval(interval);
  }, []);
  //mt-16 flex max-w-full flex-col justify-between md:flex-row
  return (
    <div className="relative mt-10 flex flex-col justify-between rounded-full bg-yellow-500 px-4 py-3 pt-6 text-center md:mb-0 md:mr-5 md:flex-row">
      {" "}
      {/* Adjust top margin */}
      <div className="items-center justify-center bg-yellow-500 p-1 text-center text-sm font-bold md:text-base lg:text-lg">
        {showText && <AnimatedText text="We target your success!" />}
      </div>
      <Description />
      <button
        className="right-0 top-2 transform animate-vibrate cursor-pointer items-center justify-end bg-transparent p-5 text-4xl text-white transition-transform duration-300 hover:scale-110 hover:text-yellow-400 md:mt-0 md:text-5xl"
        onClick={() => {
          console.log("Phone button clicked"); // Debug log
          window.location.href = "tel:+251961170800";
        }}
      >
        <FontAwesomeIcon
          icon={faPhone}
          className="h-8 w-8 md:h-12 md:w-12 lg:h-14 lg:w-14"
        />
      </button>
    </div>
  );
}
