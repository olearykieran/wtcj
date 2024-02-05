// src/app/page.tsx

import Header from "../src/components/Header";
import VideoSection from "../src/components/VideoSection";
import MeetTheOwnerSection from "../src/components/MeetTheOwnerSection";
import HowWeCanHelpSection from "../src/components/HowWeCanHelpSection";
import FeaturedSection from "../src/components/FeaturedSection";
import PatientStories from "../src/components/PatientStories";
import Resources from "../src/components/Resources";
import Events from "../src/components/Events";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import PopupBar from "../src/components/PopupBar";

function MyApp({}) {
  return (
    <>
      <PopupBar />
      <Header />
      <VideoSection />
      <MeetTheOwnerSection />
      <HowWeCanHelpSection />
      <FeaturedSection />
      <PatientStories />
      <Resources />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default MyApp;
