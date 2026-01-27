import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  Menu,
  X,
  Twitter,
  Send,
  Wallet,
  ArrowRightLeft,
  Coins,
  Rocket,
} from "lucide-react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ca = "0x2597342ff387B63846eb456419590781C4bfCdAF";

  // --- 1. COUNTDOWN LOGIC ---
  const calculateTimeLeft = () => {
    const target = +new Date("2026-04-01T00:00:00");
    const now = +new Date();
    const diff = target - now;
    return diff > 0
      ? {
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / 1000 / 60) % 60),
          s: Math.floor((diff / 1000) % 60),
        }
      : { d: 0, h: 0, m: 0, s: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "HOW TO BUY", href: "#howtobuy" },
    { name: "TOKENOMICS", href: "#tokenomics" },
    { name: "ROADMAP", href: "#roadmap" },
    { name: "NEWS", href: "#news" },
  ];

  return (
    <div className="bg-[#0a0e14] min-h-screen text-white font-sans selection:bg-[#f2c94c] selection:text-black scroll-smooth overflow-x-hidden">
      {/* --- TOP BAR COUNTDOWN --- */}
      <div className="bg-[#05070a] py-2 border-b border-yellow-600/10 text-center sticky top-0 z-[110]">
        <div className="flex justify-center gap-4 text-[#f2c94c] font-mono text-sm sm:text-lg tracking-widest">
          <span>{String(timeLeft.d).padStart(2, "0")}d</span>
          <span>{String(timeLeft.h).padStart(2, "0")}h</span>
          <span>{String(timeLeft.m).padStart(2, "0")}m</span>
          <span>{String(timeLeft.s).padStart(2, "0")}s</span>
        </div>
        <p className="text-[9px] uppercase font-black text-gray-500 tracking-tighter">
          Digital Assets Launch Countdown
        </p>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-[100] p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <img
            src="/logo2.jpg"
            className="h-10 w-10 rounded-full border border-[#f2c94c]"
            alt="Logo"
          />
          <span className="font-serif text-lg tracking-tighter font-bold text-white uppercase italic">
            ROBOTAXI
          </span>
        </div>

        <div className="hidden md:flex gap-8 items-center text-xs font-black text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#f2c94c] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://app.uniswap.org/swap?outputCurrency=0x2597342ff387B63846eb456419590781C4bfCdAF"
            target="_blank"
            className="bg-[#f2c94c] text-black px-5 py-2 rounded-full font-black hover:scale-105 transition-transform"
          >
            BUY $TAXI
          </a>
        </div>

        <button
          className="md:hidden text-[#f2c94c]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-[#05070a] border-b border-yellow-600/20 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-black text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://app.uniswap.org/swap?outputCurrency=0x2597342ff387B63846eb456419590781C4bfCdAF"
                className="bg-[#f2c94c] text-black p-4 text-center rounded-xl font-black"
              >
                BUY $TAXI
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO --- */}
      <header className="relative pt-10 pb-20 px-6 flex flex-col items-center text-center max-w-7xl mx-auto">
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src="/floatingimg.png"
          className="w-40 sm:w-50 h-auto drop-shadow-[0_0_40px_rgba(242,201,76,0.2)] mb-8"
        />
        <h2 className="text-[#f2c94c] tracking-[0.3em] font-serif text-xs md:text-sm mb-4 uppercase">
          Tesla Autonomous Future
        </h2>
        <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-8 text-white">
          $TAXI
        </h1>

        <div className="bg-[#161b22] border border-[#f2c94c]/30 rounded-full px-4 py-2 flex items-center gap-4 mb-12 max-w-[90%] sm:max-w-sm w-full">
          <code className="text-[10px] md:text-xs truncate flex-1 text-gray-400">
            {ca}
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText(ca);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} className="text-[#f2c94c]" />
            )}
          </button>
        </div>

        <div className="max-w-4xl space-y-4">
          <h2 className="text-3xl md:text-7xl font-black leading-tight uppercase">
            The World's First <br />{" "}
            <span className="text-[#f2c94c]">Autonomous</span> <br /> Memecoin
          </h2>
          <p className="text-gray-400 text-base md:text-xl font-medium max-w-2xl mx-auto">
            Robotaxi is a memecoin created to honour Elon Musk's ambitious
            vision of a fully autonomous future.
          </p>
        </div>
      </header>

      {/* --- ABOUT (FIXED CENTERED PADDING) --- */}
      <section
        id="about"
        className="py-20 bg-white text-black border-y-8 border-[#f2c94c] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="border-4 sm:border-8 border-black shadow-[10px_10px_0_0_#39437E] w-full flex justify-center">
            <img src="/20.jpg" alt="About Taxi" className="max-w-full h-auto" />
          </div>
          <div className="space-y-6 text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#39437E] uppercase leading-none italic">
              INTRODUCING ROBOTAXI
            </h2>
            <p className="text-base md:text-lg font-bold leading-relaxed">
              Robotaxi (TAXI) is an Ethereum-based blockchain project created to
              honor Musk's groundbreaking plan centering around a fleet of
              self-driving vehicles.
            </p>
            <div className="p-4 bg-[#f2c94c] border-2 sm:border-4 border-black font-black uppercase text-xs sm:text-sm">
              "Affordable, efficient, and sustainable future."
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO BUY --- */}
      <section id="howtobuy" className="py-20 bg-[#0a0e14] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl md:text-6xl font-black text-[#f2c94c] mb-12 italic uppercase underline decoration-white/10">
            How To Buy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Wallet />,
                title: "CREATE WALLET",
                desc: "Download Metamask for free.",
              },
              {
                icon: <ArrowRightLeft />,
                title: "GET SOME ETH",
                desc: "Have ETH in your wallet to switch.",
              },
              {
                icon: <Coins />,
                title: "GO TO UNISWAP",
                desc: "Connect browser to app.uniswap.org.",
              },
              {
                icon: <Rocket />,
                title: "SWAP FOR $TAXI",
                desc: "Switch ETH for $TAXI. Zero Taxes!",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-[#161b22] p-6 border-2 border-[#f2c94c]/10 rounded-2xl text-center"
              >
                <div className="text-[#f2c94c] mb-3 flex justify-center scale-125">
                  {s.icon}
                </div>
                <h4 className="font-black text-lg mb-2">{s.title}</h4>
                <p className="text-xs text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TOKENOMICS (FIXED CENTERED GRID) --- */}
      <section
        id="tokenomics"
        className="py-20 bg-[#f2c94c] text-black overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 italic uppercase">
            TOKENOMICS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              { l: "TOTAL SUPPLY", v: "100M" },
              { l: "BUY TAX", v: "0%" },
              { l: "SELL TAX", v: "0%" },
              { l: "LIQUIDITY", v: "BURNT" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_#000] w-full"
              >
                <p className="text-[9px] font-black mb-1 uppercase tracking-widest text-gray-500">
                  {s.l}
                </p>
                <p className="text-2xl font-black">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROADMAP --- */}
      <section
        id="roadmap"
        className="py-20 bg-[#0a0e14] px-6 border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/roadmap.jpg"
            className="rounded-2xl border-4 border-[#f2c94c] shadow-xl w-full h-auto"
            alt="Roadmap"
          />
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#f2c94c] italic">
              ROADMAP
            </h2>
            <div className="space-y-3">
              {[
                "Phase 1: Meme Phase",
                "Phase 2: Vibe and HODL Phase",
                "Phase 3: Huge Marketing Phase",
                "Phase 4: Meme Takeover",
              ].map((phase, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#161b22] p-4 border border-white/5 rounded-xl"
                >
                  <span className="text-[#f2c94c] font-black">✅</span>
                  <span className="font-bold text-sm sm:text-base">
                    {phase}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NEWS --- */}
      <section id="news" className="py-20 bg-white text-black px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-black mb-10 uppercase italic">
            Robotaxi In The News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                author: "Elon Musk",
                date: "Jan 23, 2026",
                text: "Robotaxis are coming sooner than you think.",
                img: "/news.jpg",
              },
            ].map((news, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#f2c94c] font-black text-xs">
                    E
                  </div>
                  <h4 className="font-bold text-xs leading-none">
                    {news.author}
                  </h4>
                </div>
                <p className="text-sm mb-3 font-medium">{news.text}</p>
                {news.img && (
                  <img
                    src={news.img}
                    className="rounded-lg w-full h-32 object-contain border mb-3"
                  />
                )}
                <p className="text-[9px] font-black text-gray-300 uppercase">
                  {news.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#05070a] py-12 px-6 text-center">
        <p className="text-[10px] text-gray-600 uppercase font-bold tracking-tight mb-6">
          $Taxicoin has no association with Tesla. Built for the community.
        </p>
        <div className="flex justify-center gap-6 text-[#f2c94c]">
          <Twitter size={20} className="cursor-pointer" />
          <Send size={20} className="cursor-pointer" />
        </div>
        <p className="text-[9px] text-gray-800 mt-6 tracking-[0.2em]">
          © 2026 ROBOTAXI
        </p>
      </footer>
    </div>
  );
};

export default Home;
