import { Twitter, Send } from "lucide-react";
import Header from "./Header";

export default function HeroSection() {
  return (
    <>
      <Header />
      <main className="pt-18 bg-yellow-500">
        <div className="relative w-full">
          {/* Background image */}
          <img src="/home.jpg" className="w-full h-auto object-cover" />

          {/* Overlay content (buttons) */}
          <div className="absolute top-[70%] left-1/2 flex w-full justify-center gap-[10vw] sm:gap-[12vw] md:gap-[18vw] lg:gap-[20vw] px-4 transform -translate-x-1/2 -translate-y-1/2">
            <a
              href="https://x.com/EthRoboTaxi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="flex items-center gap-2 bg-yellow-400 text-[#39437E] font-bold 
          py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 
          rounded-full border-b-4 border-[#39437E] 
          shadow-[0_4px_0_0_#39437E] transition-all duration-100 
          hover:translate-y-1 hover:shadow-none 
          active:translate-y-1 active:shadow-none active:border-b-0"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>
            </a>

            <a
              href="https://t.me/RoboTaxiPortal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="flex items-center gap-2 bg-yellow-400 text-[#39437E] font-bold 
          py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 
          rounded-full border-b-4 border-[#39437E] 
          shadow-[0_4px_0_0_#39437E] transition-all duration-100 
          hover:translate-y-1 hover:shadow-none 
          active:translate-y-1 active:shadow-none active:border-b-0"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>
            </a>
          </div>
        </div>
      </main>
    </>

    // The following Hero Content section is commented out to avoid syntax errors.
    /*
    <section className="relative flex flex-col min-h-[100vh] py-20 items-center justify-center overflow-visible bg-yellow-500">
      <Header />
      <div className="flex flex-col items-center w-full border-b border-[#39437E] mt-30 lg:mt-50 justify-center py-8 text-center">
        <div className="flex w-full justify-center gap-[18vw] md:gap-[40%] px-8 md:my-5 mt-30 mb-8">
          <a
            href="https://x.com/EthRoboTaxi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-yellow-400 text-[#39437E] font-bold py-3 px-6 rounded-lg border-b-4 border-[#39437E] shadow-[0_4px_0_0_#39437E] transition-all duration-100 hover:translate-y-1 hover:shadow-none active:translate-y-1 active:shadow-none active:border-b-0">
              <Twitter className="w-5 h-5" />
              Twitter
            </button>
          </a>
          <a
            href="https://t.me/RoboTaxiPortal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-yellow-400 text-[#39437E] font-bold py-3 px-6 rounded-lg border-b-4 border-[#39437E] shadow-[0_4px_0_0_#39437E] transition-all duration-100 hover:translate-y-1 hover:shadow-none active:translate-y-1 active:shadow-none active:border-b-0">
              <Send className="w-5 h-5" />
              Telegram
            </button>
          </a>
        </div>
        <div
          className={`justify-center flex transition-all duration-700 ${
            show ? "translate-y-0" : "translate-y-10"
          }`}
        >
          <img
            src="/intro.jpg"
            alt="Monkey Character"
            className="w-[80%] float-animation rounded-full md:w-[50%]"
          />
        </div>
        <div className="flex gap-3 justify-center items-center flex-col">
          <h1
            className={`mb-2 text-7xl font-black uppercase tracking-tighter text-black md:text-5xl lg:text-6xl transition-all duration-700 delay-150 ${
              show ? "translate-y-0" : "translate-y-10"
            }`}
          >
            ROBOTAXI
          </h1>
          <p
            className={` w-[85%] md:w-[70%] text-lg font-bold text-black md:text-2xl transition-all duration-700 delay-300 ${
              show ? "translate-y-0" : "translate-y-10"
            }`}
          >
            A memecoin honouring ElonMusk's ambitious vision of fully autonomous
            future ( Tesla cybercab )
          </p>
          <a href="https://app.uniswap.org/swap?outputCurrency=0x2597342ff387B63846eb456419590781C4bfCdAF">
            <button className="bg-yellow-400 text-[#39437E] font-bold py-3 px-6 rounded-lg border-b-4 border-[#39437E] shadow-[0_4px_0_0_#39437E] transition-all duration-100 hover:translate-y-1 hover:shadow-none active:translate-y-1 active:shadow-none active:border-b-0">
              Buy Now
            </button>
          </a>
        </div>
      </div>
    </section>
    */
  );
}
