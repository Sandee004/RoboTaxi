import HeroSection from "./Hero";
import About from "./About";
import HowToBuy from "./HowToBuy";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <HeroSection />
        <About />
        <HowToBuy />
        <Tokenomics />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
};

export default Home;
//39437E
