import HeroSection from "./Hero";
import HowToBuy from "./HowToBuy";
import Tokenomics from "./Tokenomics";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-green-500 flex flex-col">
        <HeroSection />
        <HowToBuy />
        <Tokenomics />
      </div>
    </>
  );
};

export default Home;
//39437E
