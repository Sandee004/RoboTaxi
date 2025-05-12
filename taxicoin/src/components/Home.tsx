import Hero from "./Hero";
import Intro from "./Intro";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-green-500 flex flex-col">
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <RoadmapSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
