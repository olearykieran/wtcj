"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../public/new-menu.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-5 py-3 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="text-xl lg:text-2xl font-light text-gray-900 hover:text-purple-500 cursor-pointer ">
              Winning the Cancer Journey
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded "
          >
            <span className="sr-only">Menu</span>
            <Image src={menuIcon} alt="Menu" width={40} height={40} />
          </button>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden md:flex"
            } items-center md:relative ${
              isMenuOpen
                ? "absolute  top-full right-0 mt-2 bg-white shadow-md flex-col z-50 p-4"
                : "shadow-none"
            }`}
            style={{
              right: isMenuOpen ? "2rem" : "auto",
              width: isMenuOpen ? "calc(100% - 4rem)" : "auto",
            }}
          >
            <nav
              className={`flex ${
                isMenuOpen
                  ? "flex-col text-center space-y-4"
                  : "flex-row text-left md:space-x-4 lg:space-x-6"
              }`}
            >
              <Link href="/" passHref>
                <span className="py-2 md:py-0 cursor-pointer  hover:text-pink-500 ">
                  Home
                </span>
              </Link>
              <Link href="/about" passHref>
                <span className="py-2 md:py-0 cursor-pointer hover:text-pink-500 ">
                  About
                </span>
              </Link>
              <Link href="/blog" passHref>
                <span className="py-2 md:py-0 cursor-pointer  hover:text-pink-500 ">
                  Blog
                </span>
              </Link>
              <Link href="/store" passHref>
                <span className="py-2 md:py-0 cursor-pointer  hover:text-pink-500 ">
                  Store
                </span>
              </Link>
              <Link href="/contact" passHref>
                <span className="py-2 md:py-0 cursor-pointer  hover:text-pink-500">
                  Contact
                </span>
              </Link>
              {/* Increase the margin before "Request Appointment" for larger separation */}
              <div className="md:ml-12 lg:ml-16">
                <Link href="/appointment" passHref>
                  <span className="py-2 md:py-0 cursor-pointer hover:text-pink-500 ">
                    Request Appointment
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
