// pages/media.js
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MinimalLogoSection from "@/components/MinimalLogoSection";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function Media() {
  return (
    <>
      <Header />
      <MinimalLogoSection />
      <main className="min-h-screen flex  flex-col items-center justify-center p-4 max-w-7xl mx-auto px-5 py-3 lg:px-8 mt-10 mb-10 flex-wrap md:flex-nowrap">
        <h1 className="text-3xl py-12 text-gray-800 mb-4">Media Showcase</h1>

        {/* Podcast video */}
        <div className="w-full max-w-4xl mb-8">
          <h2 className="text-2xl mt-10 text-center mb-4">Podcast Episode:</h2>
          <video src="/podcast.mp4" controls className="w-full h-auto">
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Styled media link similar to Featured Articles */}
        <div className="flex flex-col mt-24 rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto mb-8">
          <h2 className="text-2xl text-center mb-4">CNN Interview:</h2>
          <div
            className="flex-shrink-0 h-56 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(/cnn.jpeg)` }}
          ></div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-2">CNN Interview</h2>
            <p className="mb-4">
              Catherine, Princess of Wales, revealed Friday she has been diagnosed with
              cancer and is in the early stages of treatment.
            </p>
            <Link
              href="https://app.frame.io/reviews/174fd8d9-582c-4e0d-8e61-ef5e41697647/57492cd1-c9f3-42c4-a67c-4cc4b646ef42"
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Interview
            </Link>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
