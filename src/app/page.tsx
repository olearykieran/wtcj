import Header from "../Components/Header";
import VideoSection from "../Components/VideoSection";
import MeetTheOwnerSection from "../Components/MeetTheOwnerSection";
import HowWeCanHelpSection from "../Components/HowWeCanHelpSection";
import FeaturedSection from "../Components/FeaturedSection";
import PatientStories from "../Components/PatientStories";
import Resources from "../Components/Resources";
import Events from "../Components/Events";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import PopupBar from "../Components/PopupBar";
import "./globals.css";

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
