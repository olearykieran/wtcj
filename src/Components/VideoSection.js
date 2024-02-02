"use client";

export default function VideoSection() {
  return (
    <div className="relative w-full" style={{ height: "60vh" }}>
      {/* Set a fixed height for the video container */}

      {/* Container that matches the Header's horizontal padding */}
      <div className="absolute bottom-10 left-0 w-full px-5 lg:px-8 z-10">
        {/* Overlay to add text over video */}
        <div className="max-w-7xl mx-auto px-5 py-3 lg:px-8 mb-8">
          <h1 className="text-6xl text-black font-light">Navigating Your Journey</h1>
          <p className="mt-4 text-xl text-black font-light">
            Empowering patients and caregivers with understanding <br />
            in their journey through breast and gynecological cancers.
          </p>
          <button className="mt-8 bg-pink-500 hover:bg-two text-white py-2 px-4 rounded shadow-lg">
            Request appointment
          </button>
        </div>
      </div>

      {/* Video element */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/pink.mp4" // Make sure this is the correct path to your video file
        title="Hero Video"
        autoPlay
        loop
        muted
        playsInline
        frameBorder="0"
        allowFullScreen
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
