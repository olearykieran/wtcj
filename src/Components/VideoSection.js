"use client";

import React, { useEffect, useState } from "react"; // Updated import

export default function VideoSection() {
  // This function now opens the Calendly link in a new tab.
  const handleScheduleCall = () => {
    window.open("https://calendly.com/drtiffanytrososandoval", "_blank");
  };

  // Initialize isMobile as false
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set isMobile based on the initial window width
    setIsMobile(window.innerWidth < 1200);

    // Function to update state based on viewport width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="video-section relative w-full">
      <div className="content absolute inset-0 flex flex-col items-center justify-center">
        <div
          className={
            isMobile
              ? "flex flex-col w-full items-center"
              : "flex justify-center items-center w-full max-w-7xl mx-auto h-full"
          }
        >
          <div className={isMobile ? "flex-shrink-0" : "flex-shrink-0 mr-20"}>
            <img src="/B-PNG.png" alt="Logo" />
          </div>
          {isMobile && (
            <div className="text-black mb-6 text-center mt-4">
              <p className="text-2xl py-2 font-light">Leading with Expertise</p>
              <p className="text-2xl py-2 font-light">Empowering with Knowledge</p>
              <p className="text-2xl py-2 font-light">Guiding with Compassion</p>
              <button
                onClick={handleScheduleCall} // Updated to use handleScheduleCall
                className="mt-8 bg-blue-500 hover:bg-two text-black py-2 px-4 rounded shadow-lg"
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
              <a
                href="#contact"
                className="mt-12 bg-blue-500 hover:bg-two text-black py-2 px-4 rounded shadow-md block mx-auto w-12"
              >
                Connect With Us
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1711467659">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
