"use client";

import Image from "next/image";
import tiff from "../../public/t1.jpeg";

export default function MeetTheOwnerSection() {
  // Function to handle redirection to the Facebook group
  const redirectToFacebookGroup = () => {
    window.location.href = "https://www.facebook.com/groups/winningthecancerjourney/";
  };

  return (
    <section
      id="meettheowner"
      className="py-12"
      style={{
        borderBottom: "3px solid rgb(225, 0, 172, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 lg:px-8 mt-24 mb-24 flex flex-wrap md:flex-nowrap">
        <div className="md:flex-grow md:pr-8">
          <h2 className="text-3xl text-gray-800 mb-4">Meet Dr. Tiffany Troso-Sandoval</h2>
          <p className="text-gray-600 text-lg mb-4 max-w-xl font-light">
            Dr. Troso-Sandoval is a highly esteemed medical oncologist with more than two
            decades of expertise in treating women's cancers. Throughout her career, she
            has published over 20 research papers in prestigious medical journals and has
            authored a specialized publication focused on providing care for elderly
            patients with ovarian cancer.
          </p>
          <p className="text-gray-600 text-lg mb-4 max-w-xl font-light">
            In addition to her work caring for cancer patients in her own practice, Dr.
            Troso is now expanding her reach to help oncology audiences across the country
            with their cancer journey. Dr. Troso possesses a remarkable skill in
            addressing the symptoms of the patient's disease and the side effects of
            treatment.
          </p>
          <p className="text-gray-600 text-lg max-w-xl font-light mb-4">
            She specializes in using simple language and relatable examples to help
            patients and their families understand complex medical information better.
          </p>
          {/* Button to join Facebook group */}
          <div className="mt-8">
            <button
              onClick={redirectToFacebookGroup}
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded shadow-xl"
            >
              Join Our Facebook Group
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:flex md:justify-end lg:w-1/3 mt-8 md:mt-0 mr-10">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src={tiff}
              alt="Dr. Tiffany Troso-Sandoval"
              width={500}
              height={500}
              className="object-cover object-center transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
