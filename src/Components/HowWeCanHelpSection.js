import Image from "next/image";

export default function HowWeCanHelpSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to right, rgba(0, 242, 224, 0.1), rgba(0, 0, 255, 0.1))",
        borderBottom: "3px solid rgb(0, 242, 223, .08)",
      }}
      className="py-12"
    >
      {/* SVG Background */}

      {/* Content Container */}
      <div className="max-w-7xl mx-auto mt-24 mb-24 px-5 py-3 lg:px-8">
        <div className="flex flex-wrap items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex mb-8 lg:mb-0">
            <Image
              src="/fam.jpg"
              alt="Happy Family"
              width={500}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-light">How We Can Help</h2>
            <p className="mt-4">
              At Winning the Cancer Journey, we provide support and resources tailored to
              the needs of cancer patients and their caregivers. From navigating treatment
              options to understanding emotional support resources, we&aposre here to
              guide you every step of the way. Our goal is to empower you with knowledge
              and care, ensuring you never feel alone in your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
