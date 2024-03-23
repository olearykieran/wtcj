"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";

export default function VideoSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div
      className="relative w-full"
      style={{ height: "60vh", borderBottom: "3px solid rgb(0, 242, 223, .08)" }}
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/sunset5.jpeg"
        alt="Hero Image"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Logo and text content: responsive layout */}
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
            <div className="text-white mb-6 text-center mt-4">
              <p className="text-2xl py-2 font-light">Leading with Expertise</p>
              <p className="text-2xl py-2 font-light">Empowering with Knowledge</p>
              <p className="text-2xl py-2 font-light">Guiding with Compassion</p>
              <button
                onClick={handleScrollToContact}
                className="mt-8 bg-pink-500 hover:bg-two text-white py-2 px-4 rounded shadow-6xl"
              >
                Schedule a Discovery Call
              </button>
            </div>
          )}
          {!isMobile && (
            <div className="text-white text-center ml-4">
              <p className="text-3xl py-2 font-light">Leading with Expertise</p>
              <p className="text-3xl py-2 font-light">Empowering with Knowledge</p>
              <p className="text-3xl py-2 font-light">Guiding with Compassion</p>
              <button
                onClick={handleScrollToContact}
                className="mt-8 bg-pink-500 hover:bg-two text-white py-2 px-4 rounded shadow-6xl"
              >
                Schedule a Discovery Call
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
