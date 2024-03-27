"use client";

import React, { useState, useEffect } from "react";

export default function MinimalLogoSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize(); // Call it initially to set the correct state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="video-section-2 relative w-full">
      <div
        className={`absolute inset-0 flex mt-10 ${
          isMobile ? "justify-center" : "justify-start"
        } items-left h-full`}
      >
        <div
          className="ml-4"
          style={{
            width: isMobile ? "200px" : "200px",
            height: isMobile ? "200px" : "200px",
          }}
        >
          <img src="/B-PNG.png" alt="Logo" className="w-full h-auto" />
        </div>
      </div>
      <div className="w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500"></div>
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
