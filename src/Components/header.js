"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../public/menu.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-5 py-3 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="text-xl lg:text-2xl font-light text-gray-900 hover:text-one cursor-pointer">
              Winning the Cancer Journey
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span className="sr-only">Menu</span>
            <Image src={menuIcon} alt="Menu" width={24} height={24} />
          </button>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden md:flex"
            } items-center md:relative ${
              isMenuOpen
                ? "absolute top-full right-0 mt-2 bg-white shadow-md flex-col z-50 p-4"
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
                <span className="py-2 md:py-0 cursor-pointer hover:text-one ">Home</span>
              </Link>
              <Link href="/about" passHref>
                <span className="py-2 md:py-0 cursor-pointer hover:text-one ">About</span>
              </Link>
              <Link href="/blog" passHref>
                <span className="py-2 md:py-0 cursor-pointer hover:text-one ">Blog</span>
              </Link>
              <Link href="/store" passHref>
                <span className="py-2 md:py-0 cursor-pointer hover:text-one ">Store</span>
              </Link>
              <Link href="/contact" passHref>
                <span className="py-2 md:py-0 cursor-pointer hover:text-one ">
                  Contact
                </span>
              </Link>
              {/* Increase the margin before "Request Appointment" for larger separation */}
              <div className="md:ml-12 lg:ml-16">
                <Link href="/appointment" passHref>
                  <span className="py-2 md:py-0 cursor-pointer hover:text-one ">
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
