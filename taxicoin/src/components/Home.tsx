import { useState, useEffect, useRef } from "react";
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
  Mail,
} from "lucide-react";

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ca = "0x2597342ff387B63846eb456419590781C4bfCdAF";
  const navRef = useRef<HTMLDivElement>(null);

  // --- Close menu on Scroll ---
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "HOW TO BUY", href: "#howtobuy" },
    { name: "TOKENOMICS", href: "#tokenomics" },
    { name: "ROADMAP", href: "#roadmap" },
    { name: "NEWS", href: "#news" },
  ];

  return (
    <div className="bg-[#0a0e14] min-h-screen text-white font-sans selection:bg-[#f2c94c] selection:text-black scroll-smooth overflow-x-hidden">
      {/* --- NAVIGATION --- */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[120] bg-[#0a0e14]/90 backdrop-blur-md border-b border-white/5"
      >
        <div className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <img
              src="/logo2.jpg"
              className="h-10 w-10 rounded-full border border-[#f2c94c]"
              alt="Logo"
            />
            <span className="font-serif text-lg tracking-tighter font-bold text-white uppercase italic">
              <a href="#">ROBOTAXI</a>
            </span>
          </div>

          {/* Desktop Menu */}
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
              href="https://app.uniswap.org/swap?..."
              target="_blank"
              className="bg-[#f2c94c] text-black px-5 py-2 rounded-full font-black hover:scale-105 transition-transform italic"
            >
              BUY $TAXI
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#f2c94c] z-[130]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Slide-down Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop for clicking outside */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden"
              />

              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                className="absolute top-full left-0 w-full bg-[#05070a] border-b border-yellow-600/20 px-8 pb-10 pt-4 flex flex-col gap-6 md:hidden shadow-2xl overflow-hidden z-[120]"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-black text-white italic border-b border-white/5 pb-2 hover:text-[#f2c94c]"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <a
                  href="https://app.uniswap.org/swap?..."
                  className="bg-[#f2c94c] text-black p-4 text-center rounded-xl font-black italic shadow-lg"
                >
                  BUY $TAXI NOW
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <div className="pt-24">
        {" "}
        {/* --- HERO --- */}
        <header className="relative pt-10 pb-20 px-6 flex flex-col items-center text-center max-w-7xl mx-auto">
          <motion.img
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src="/floatingimg.png"
            className="w-40 sm:w-50 h-auto drop-shadow-[0_0_40px_rgba(242,201,76,0.2)] mb-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black italic tracking-tighter mb-8 text-white"
          >
            $TAXI
          </motion.h1>

          {/* --- CONTRACT ADDRESS BOX --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-[#161b22] border border-[#f2c94c]/30 rounded-full px-4 py-2 flex items-center gap-4 mb-8 max-w-[90%] sm:max-w-sm w-full"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 mb-12"
          >
            <a
              href="https://x.com/_taximeme"
              target="_blank"
              className="p-3 bg-[#161b22] border border-[#f2c94c]/30 rounded-full text-[#f2c94c] hover:bg-[#f2c94c] hover:text-black transition-all shadow-lg"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://t.me/Robotaximeme"
              target="_blank"
              className="p-3 bg-[#161b22] border border-[#f2c94c]/30 rounded-full text-[#f2c94c] hover:bg-[#f2c94c] hover:text-black transition-all shadow-lg"
            >
              <Send size={20} />
            </a>
            <a
              href="mailto:realctoteam@gmail.com"
              className="p-3 bg-[#161b22] border border-[#f2c94c]/30 rounded-full text-[#f2c94c] hover:bg-[#f2c94c] hover:text-black transition-all shadow-lg"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl space-y-4"
          >
            <h2 className="text-3xl md:text-7xl font-black leading-tight uppercase italic text-center">
              The World's First <br />{" "}
              <span className="text-[#f2c94c]">Autonomous</span> <br /> Memecoin
            </h2>
          </motion.div>
        </header>
        {/* --- ABOUT --- */}
        <section
          id="about"
          className="py-20 border-y-2 border-white/10 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="border-4 sm:border-8 border-black shadow-[10px_10px_0_0_#39437E] w-full flex justify-center bg-[#0a0e14]"
            >
              <img
                src="/20.jpg"
                alt="About Taxi"
                className="max-w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="space-y-6 text-left"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#f2c94c] uppercase leading-none italic">
                INTRODUCING ROBOTAXI
              </h2>
              <p className="text-base md:text-lg font-bold leading-relaxed text-gray-300">
                Robotaxi (TAXI) is an Ethereum-based blockchain project created
                to honor Musk's groundbreaking plan centering around a fleet of
                self-driving vehicles.
              </p>
              <div className="p-4 bg-[#f2c94c] border-2 sm:border-4 border-black font-black uppercase text-xs sm:text-sm text-black italic italic">
                "Affordable, efficient, and sustainable future."
              </div>
            </motion.div>
          </div>
        </section>
        {/* --- HOW TO BUY --- */}
        <section id="howtobuy" className="py-20 bg-[#0a0e14] px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-4xl md:text-6xl font-black text-[#f2c94c] mb-12 italic uppercase"
            >
              How To Buy
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerStagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
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
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-[#161b22] p-6 border-2 border-white/5 rounded-2xl text-center"
                >
                  <div className="text-[#f2c94c] mb-3 flex justify-center scale-125">
                    {s.icon}
                  </div>
                  <h4 className="font-black text-lg mb-2 italic">{s.title}</h4>
                  <p className="text-xs text-gray-400">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* --- TOKENOMICS --- */}
        <section
          id="tokenomics"
          className="py-20 text-black border-y-2 border-white/10 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl text-[#f2c94c] mb-12 italic uppercase font-black underline decoration-white/10">
              TOKENOMICS
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerStagger}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full"
            >
              {[
                { l: "TOTAL SUPPLY", v: "100M" },
                { l: "BUY TAX", v: "0%" },
                { l: "SELL TAX", v: "0%" },
                { l: "LIQUIDITY", v: "BURNT" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_#000] w-full"
                >
                  <p className="text-[9px] font-black mb-1 uppercase tracking-widest text-gray-500">
                    {s.l}
                  </p>
                  <p className="text-2xl font-black italic">{s.v}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* --- ROADMAP --- */}
        <section id="roadmap" className="py-20 px-6 border-b-2 border-white/10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="/roadmap.jpg"
              className="rounded-2xl border-4 border-[#f2c94c] shadow-xl w-full h-auto"
              alt="Roadmap"
            />
            <div className="space-y-6 text-left">
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
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-[#161b22] p-4 border border-white/5 rounded-xl"
                  >
                    <span className="text-[#f2c94c] font-black">✅</span>
                    <span className="font-bold text-sm sm:text-base italic">
                      {phase}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* --- NEWS --- */}
        <section id="news" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-black mb-10 uppercase italic text-[#f2c94c] underline decoration-white/10">
              Robotaxi In The News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  author: "Elon Musk",
                  date: "Jan 23, 2026",
                  text: "Robotaxis are coming sooner than you think.",
                  img: "/news.jpg",
                  link: "https://x.com/i/status/2014541556565352467", // Added your link here
                },
              ].map((news, i) => (
                <motion.a
                  key={i}
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }} // Added hover effect for feedback
                  viewport={{ once: true }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm text-black cursor-pointer block hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#f2c94c] font-black text-xs">
                      E
                    </div>
                    <h4 className="font-bold text-xs leading-none">
                      {news.author}
                    </h4>
                  </div>
                  <p className="text-sm mb-3 font-medium text-left">
                    {news.text}
                  </p>
                  {news.img && (
                    <img
                      src={news.img}
                      className="rounded-lg w-full h-32 object-contain border mb-3"
                    />
                  )}
                  <div className="flex justify-between items-center">
                    <p className="text-[9px] font-black text-gray-300 uppercase text-left">
                      {news.date}
                    </p>
                    <span className="text-[9px] font-black text-[#f2c94c] uppercase">
                      View on X →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        {/* --- FOOTER --- */}
        <footer className="bg-[#05070a] py-12 px-6 text-center border-t border-white/5">
          <p className="text-[10px] text-gray-600 uppercase font-bold tracking-tight mb-6 italic italic">
            $Taxicoin has no association with Tesla. Built for the community.
          </p>
          <div className="flex justify-center gap-6 text-[#f2c94c]">
            <motion.div whileHover={{ scale: 1.2 }}>
              <a
                href="https://x.com/_taximeme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} className="cursor-pointer" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <a
                href="https://t.me/Robotaximeme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={20} className="cursor-pointer" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <a href="mailto:realctoteam@gmail.com">
                <Mail size={20} className="cursor-pointer" />
              </a>
            </motion.div>
          </div>
          <p className="text-[9px] text-gray-800 mt-6 tracking-[0.2em]">
            © 2026 ROBOTAXI
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
