// src/app/page.tsx

import Header from "../components/Header";
import VideoSection from "../components/VideoSection";
import MeetTheOwnerSection from "../components/MeetTheOwnerSection";
import HowWeCanHelpSection from "../components/HowWeCanHelpSection";
import FeaturedSection from "../components/FeaturedSection";
import PatientStories from "../components/PatientStories";
import Resources from "../components/Resources";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function MyApp({}) {
  return (
    <>
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
