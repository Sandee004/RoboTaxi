
import Header from "./Header";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-18 bg-[#0cc0df]">
        <div className="relative w-full">
          {/* Background image */}
          <img src="/home.jpg" className="w-full h-auto object-cover" />

          {/* Overlay content (buttons) */}
          <div className="absolute top-[70%] left-1/2 flex w-full justify-center gap-[10vw] sm:gap-[12vw] md:gap-[18vw] lg:gap-[20vw] px-4 transform -translate-x-1/2 -translate-y-1/2">
            <a
              href="https://x.com/_taximeme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="flex items-center gap-2 bg-[#39437E] text-[#0cc0df] font-bold 
          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
          rounded-full border-b-4 border-[#39437E] 
          shadow-[0_4px_0_0_#0cc0df] transition-all duration-100 
          hover:translate-y-1 hover:shadow-none 
          active:translate-y-1 active:shadow-none active:border-b-0"
              >
                <img src="/twitter.jpg" className="w-full object-cover h-full rounded-full" />
              </button>
            </a>

            <a
              href="https://t.me/Robotaximeme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="flex items-center gap-2 bg-[#39437E] text-[#0cc0df] font-bold 
          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
          rounded-full border-b-4 border-[#39437E]
          shadow-[0_4px_0_0_#0cc0df] transition-all duration-100 
          hover:translate-y-1 hover:shadow-none 
          active:translate-y-1 active:shadow-none active:border-b-0"
              >
                <img src="/telegram.jpg" className="w-full h-full object-cover rounded-full" />
              </button>
            </a>

            <p className="w-[80%]">CA: 0x2597342ff387B63846eb456419590781C4bfCdAF</p>
          </div>
        </div>

        <div className="flex justify-center border-b border-[#39437E] pb-5 mt-5 items-center flex-col">
          <div
            className={`justify-center flex transition-all duration-700 ${
              show ? "translate-y-0" : "translate-y-10"
            }`}
          >
            <img
              src="/floatingimg.png"
              alt="Wanna buy $robotaxi"
              className="float-animation"
            />
          </div>

          <p
            className={`px-8 md:px-12 pb-10 text-lg text-center font-bold text-black md:text-2xl transition-all duration-700 delay-300 ${
              show ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Robotaxi is a memecoin created to honour ElonMusk's ambitious vision
            of fully autonomous future ( Tesla Robotaxi)
          </p>
          <a
            href="https://app.uniswap.org/swap?outputCurrency=0x2597342ff387B63846eb456419590781C4bfCdAF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="flex items-center gap-2 bg-[#39437E] text-[#0cc0df] font-bold 
          py-3 px-4 md:py-2 md:px-5 
          rounded-sm border-b-4 border-[#39437E] 
          shadow-[0_4px_0_0_black] transition-all duration-100 
          hover:translate-y-1 hover:shadow-none 
          active:translate-y-1 active:shadow-none active:border-b-0"
            >
              Buy Now
            </button>
          </a>
        </div>
      </main>
    </>
  );
}
