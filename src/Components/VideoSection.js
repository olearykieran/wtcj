"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";

export default function VideoSection() {
  // This function now opens the Calendly link in a new tab.
  const handleScheduleCall = () => {
    window.open("https://calendly.com/drtiffanytrososandoval", "_blank");
  };

  // Detect if the device has a max-width of 768px, indicating a mobile device.
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="video-section relative w-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className={
            isMobile
              ? "flex flex-col w-full items-center"
              : "flex justify-center items-center w-full max-w-7xl mx-auto h-full"
          }
        >
          <div className={isMobile ? "flex-shrink-0" : "flex-shrink-0 mr-20"}>
            <img
              src="/B-PNG.png"
              alt="Logo"
              style={{
                width: isMobile ? "250px" : "400px",
                height: isMobile ? "250px" : "400px",
              }}
            />
          </div>
          {isMobile && (
            <div className="text-black mb-6 text-center mt-4">
              <p className="text-2xl py-2 font-light">Leading with Expertise</p>
              <p className="text-2xl py-2 font-light">Empowering with Knowledge</p>
              <p className="text-2xl py-2 font-light">Guiding with Compassion</p>
              <button
                onClick={handleScheduleCall} // Updated to use handleScheduleCall
                className="mt-8 bg-blue-500 hover:bg-two text-black py-2 px-4 rounded shadow-6xl"
              >
                Schedule a Discovery Call
              </button>
            </div>
          )}
          {!isMobile && (
            <div className="text-black mb-6 text-center mt-4">
              <p className="text-3xl py-2 font-light">Leading with Expertise</p>
              <p className="text-3xl py-2 font-light">Empowering with Knowledge</p>
              <p className="text-3xl py-2 font-light">Guiding with Compassion</p>
              <button
                onClick={handleScheduleCall} // Updated to use handleScheduleCall
                className="mt-8 bg-blue-500 hover:bg-two text-black py-2 px-4 rounded shadow-6xl"
              >
                Schedule a Discovery Call
              </button>
            </div>
          )}
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1711467659">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
