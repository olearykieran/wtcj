"use client";

export default function VideoSection() {
  return (
    <div className="relative w-full" style={{ height: "60vh" }}>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/sunset5.jpeg"
        alt="Hero Image"
      />
      <div className="absolute inset-0">
        <div className="flex justify-center items-center w-full max-w-7xl mx-auto h-full">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img src="/wpng.png" alt="Logo" style={{ width: "450px", height: "300px" }} />
          </div>
          {/* Text content on the right */}
          <div className="text-white text-center" style={{ marginLeft: "250px" }}>
            <p className="text-3xl py-2 font-light">Leading with Expertise</p>
            <p className="text-3xl py-2 font-light">Empowering with Knowledge</p>
            <p className="text-3xl py-2 font-light">Guiding with Compassion</p>
            <button className="mt-8 bg-pink-500 hover:bg-two text-white py-2 px-4 rounded shadow-lg">
              Schedule a discovery call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
