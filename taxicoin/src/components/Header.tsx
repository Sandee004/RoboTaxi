import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
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
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-[#39437E] p-4 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo2.jpg" alt="Token Logo" className="h-10 w-10" />
          <span className="text-2xl font-black text-white">ROBOTAXI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://app.uniswap.org/swap?outputCurrency=0x2597342ff387B63846eb456419590781C4bfCdAF"
            className="rounded-lg border-2 border-gray-200 bg-[#39437E] px-5 py-2 font-bold text-white transition-transform hover:scale-105 hover:bg-[#737AA8]"
          >
            BUY
          </a>

          <div className="flex gap-5">
            <div className="relative group">
              <a href="https://coinmarketcap.com/currencies/robotaxi/">
                <img src="/coinmarketcap.jpg" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                CoinMarketCap
              </span>
            </div>

            <div className="relative group">
              <a href="https://etherscan.io/address/0x2597342ff387B63846eb456419590781C4bfCdAF">
                <img src="/etherscan2.jpg" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                Etherscan
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
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
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
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-lg border-2 border-black bg-[#0cc0df] px-4 py-2 text-center font-bold text-white hover:bg-[#737AA8]"
          >
            ABOUT
          </a>

          <a
            href="#tokenomics"
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-lg border-2 border-black bg-[#39437E] px-4 py-2 text-center font-bold text-white hover:bg-[#737AA8]"
          >
            TOKENOMICS
          </a>

          <a
            href="#howtobuy"
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-lg border-2 border-black bg-[#0cc0df] px-4 py-2 text-center font-bold text-white hover:bg-[#737AA8]"
          >
            HOW TO BUY
          </a>

          <a
            href="#roadmap"
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-lg border-2 border-black bg-[#39437E] px-4 py-2 text-center font-bold text-white hover:bg-[#737AA8]"
          >
            ROADMAP
          </a>

          <div className="w-full justify-center bg-[#0cc0df] border-black border-2 rounded-lg py-2 flex gap-8">
            <div className="relative group">
              <a href="https://coinmarketcap.com/currencies/robotaxi/">
                <img src="/coinmarketcap.jpg" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                CoinMarketCap
              </span>
            </div>

            <div className="relative group">
              <a href="https://etherscan.io/address/0x2597342ff387B63846eb456419590781C4bfCdAF">
                <img src="/etherscan2.jpg" className="w-10 h-10" />
              </a>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                Etherscan
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
    </>
  );
};

export default Header;
