import HeroSection from "./Hero";
import About from "./About";
import HowToBuy from "./HowToBuy";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-green-500 flex flex-col">
        <HeroSection />
        <About />
        <HowToBuy />
        <Tokenomics />
        <Roadmap />
      </div>
    </>
  );
};

export default Home;
//39437E
