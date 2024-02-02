import Header from "../Components/Header";
import VideoSection from "../Components/VideoSection";
import MeetTheOwnerSection from "../Components/MeetTheOwnerSection";
import HowWeCanHelpSection from "../components/HowWeCanHelpSection";
import FeaturedSection from "../Components/FeaturedSection";
import PatientStories from "../Components/PatientStories";
import Resources from "../Components/Resources";
import Events from "../Components/Events";
import Contact from "../Components/Contact";
import Footer from "../Components/footer";
import PopupBar from "../Components/PopupBar";

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
