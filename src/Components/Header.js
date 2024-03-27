"use client";

// Import necessary hooks and components from React and Next.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../public/new-menu.png";

// Header component definition
export default function Header() {
  // State for managing menu visibility on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for managing header opacity based on scroll position
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Assuming 100px is the header's height
    document.documentElement.style.setProperty("--header-height", "100px");
  }, []);

  // Effect hook to adjust header opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY < window.innerHeight * 0.6;
      setOpacity(show ? 1 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="w-full z-30 px-2 py-3 lg:px-4" // Reduced padding
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity * 0.8})`,
        borderBottom: "3px solid rgba(225, 0, 172, 0.08)",
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div
        className="container mx-auto flex justify-between items-center"
        style={{ maxWidth: "98%" }}
      >
        <Link href="/">
          <span className="text-xl lg:text-2xl font-light text-black hover:text-pink-500 cursor-pointer">
            Winning The Cancer Journey
          </span>
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden rounded">
          <span className="sr-only">Menu</span>
          <Image src={menuIcon} alt="Menu" width={40} height={40} />
        </button>

        <div
          className={`${isMenuOpen ? "flex" : "hidden"} ${
            isMenuOpen
              ? "absolute items-center mt-48 bg-white shadow-md flex-col z-50 p-4"
              : "md:flex md:relative shadow-none"
          }`}
          style={{ width: isMenuOpen ? "calc(100% - 4rem)" : "auto" }}
        >
          <nav
            className={`${
              isMenuOpen ? "flex-col" : "flex-row"
            } flex text-center md:space-x-4 lg:space-x-6`}
          >
            <Link href="/" passHref>
              <span
                onClick={() => setIsMenuOpen(false)}
                className="py-2 md:py-0 cursor-pointer text-black hover:text-pink-500"
              >
                Home
              </span>
            </Link>
            <Link href="#meettheowner" passHref>
              <span
                onClick={() => setIsMenuOpen(false)}
                className="py-2 md:py-0 cursor-pointer text-black hover:text-pink-500"
              >
                About
              </span>
            </Link>
            <Link href="#contact" passHref>
              <span
                onClick={() => setIsMenuOpen(false)}
                className="py-2 md:py-0 cursor-pointer text-black  hover:text-pink-500"
              >
                Contact
              </span>
            </Link>
            {/* Media Button */}
            <Link href="/media" passHref>
              <span
                onClick={() => setIsMenuOpen(false)}
                className="py-2 md:py-0 cursor-pointer text-black hover:text-pink-500"
              >
                Media
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
