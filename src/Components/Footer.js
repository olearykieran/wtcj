"use client";

import React from "react";

export default function Footer() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto py-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex gap-4 justify-center px-16">
            <a href="/" onClick={() => handleScroll("home")} className="hover:underline">
              Home
            </a>
            <a
              href="#meettheowner"
              onClick={() => handleScroll("meettheowner")}
              className="hover:underline"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => handleScroll("contact")}
              className="hover:underline"
            >
              Contact
            </a>
            {/* Media Page Link */}
            <a
              href="/media" // This directly navigates to the media page
              className="hover:underline"
            >
              Media
            </a>
          </div>
          <div className="mb-4 lg:mb-0 text-sm text-center flex-grow">
            &copy; {new Date().getFullYear()} Winning the Cancer Journey. All rights
            reserved.
            <br className="lg:hidden" /> {/* Break line on small screens only */}
            Website by{" "}
            <a
              href="https://theholygrailstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Holy Grail Studio
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
