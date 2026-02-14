import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Explore from "../components/Explore";
import FloorPlan from "../components/FloorPlan";
import VideoSection from "../components/VideoSection";
import Developer from "../components/Developer";
import Construction from "../components/Construction";
import FAQ from "../components/FAQ";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Explore />
      <FloorPlan />
        <VideoSection />
        <Developer />
        <Construction />
        <FAQ />

    </>
  );
};

export default Home;
