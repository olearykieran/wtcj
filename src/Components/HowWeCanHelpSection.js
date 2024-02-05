import Image from "next/image";
import fam from "../../public/fam.jpg";

export default function HowWeCanHelpSection() {
  return (
    <section className="relative bg-two text-black font-light py-12 overflow-hidden">
      {/* SVG Background */}

      {/* Content Container */}
      <div className="max-w-7xl mx-auto mt-24 mb-24 px-5 py-3 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2  mt-10 lg:mt-0 flex mb-8 lg:mb-0">
            <Image
              src={fam}
              alt="Happy Family"
              width={500}
              height={300}
              className="rounded-xl"
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
