import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 100); // match animation duration
      count++;
      if (count >= 5) clearInterval(interval); // stop after 5 times
    }, 5000); // every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-yellow-500">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white p-4 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo2.jpg" alt="Token Logo" className="h-10 w-10" />
          <span className="text-2xl font-black text-black">TAXICOIN</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <a
            href="#"
            className="rounded-lg border-2 border-black bg-yellow-300 px-4 py-2 font-bold text-black transition-transform hover:scale-105 hover:bg-yellow-200"
          >
            BUY
          </a>

          <div className="flex gap-5">
            <div className="relative group">
              <a href="https://coinmarketcap.com/currencies/robotaxi/">
                <img src="/coinmarketcap.png" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                CoinMarketCap
              </span>
            </div>

            <div className="relative group">
              <a href="https://etherscan.io/address/0x2597342ff387B63846eb456419590781C4bfCdAF">
                <img src="/dexscreener.png" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                DexScreener
              </span>
            </div>

            <div className="relative group">
              <a href="https://app.uniswap.org/swap?outputCurrency=0x2597342ff387B63846eb456419590781C4bfCdAF">
                <img src="/uniswap2.jpg" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                Uniswap
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden focus:outline-none ${
            animate ? "swell-animation" : ""
          }`}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>
      </nav>

      {/* Slide-down Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-18 left-0 z-40 w-full bg-white shadow-md md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 translate-y-0" : "max-h-0 -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-4 p-4">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-lg border-2 border-black bg-yellow-300 px-4 py-2 text-center font-bold text-black hover:bg-yellow-200"
          >
            BUY
          </a>

          <div className="w-full justify-center border-black border-2 rounded-lg py-2 flex gap-8">
            <div className="relative group">
              <a href="https://coinmarketcap.com/currencies/robotaxi/">
                <img src="/coinmarketcap.png" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                CoinMarketCap
              </span>
            </div>

            <div className="relative group">
              <a href="https://etherscan.io/address/0x2597342ff387B63846eb456419590781C4bfCdAF">
                <img src="/dexscreener.png" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                DexScreener
              </span>
            </div>

            <div className="relative group">
              <a href="https://app.uniswap.org/swap?outputCurrency=0x2597342ff387B63846eb456419590781C4bfCdAF">
                <img src="/uniswap2.jpg" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                Uniswap
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center mt-30 lg:mt-50 justify-center px-4 text-center">
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
        <h1
          className={`mb-2 text-7xl font-black uppercase tracking-tighter text-black md:text-5xl lg:text-6xl transition-all duration-700 delay-150 ${
            show ? "translate-y-0" : "translate-y-10"
          }`}
        >
          TAXICOIN
        </h1>
        <p
          className={`mb-8 w-[85%] md:w-[70%] text-lg upercase font-bold text-black md:text-2xl transition-all duration-700 delay-300 ${
            show ? "translate-y-0" : "translate-y-10"
          }`}
        >
          A memecoin honouring ElonMusk's ambitious vision of fully autonomous
          future ( Robotaxi / cybercab )
        </p>
      </div>
    </section>
  );
}
