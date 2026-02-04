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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each element
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative pt-20 pb-20 px-6 flex flex-col items-center text-center max-w-7xl mx-auto"
        >
          {/* --- GLOWING BACKDROP EFFECT --- */}
          <div className="absolute top-20 w-64 h-64 bg-[#f2c94c] opacity-10 blur-[100px] -z-10 rounded-full animate-pulse" />

          {/* --- FLOATING LOGO --- */}
          <motion.img
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.2,
            }}
            src="/hero.png"
            className="w-40 sm:w-56 h-auto drop-shadow-[0_0_50px_rgba(242,201,76,0.3)] mb-10 hover:rotate-6 transition-transform duration-300"
          />

          {/* --- STATUS BADGE --- */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] text-gray-300 font-black uppercase tracking-[0.2em]">
              Tesla Future Live
            </span>
          </motion.div>

          {/* --- SUBHEAD --- */}
          <motion.h2
            variants={itemVariants}
            className="text-[#f2c94c] tracking-[0.4em] font-serif text-xs md:text-sm mb-4 uppercase"
          >
            Tesla Autonomous Future
          </motion.h2>

          {/* --- MAIN TITLE --- */}
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-[10rem] font-black italic tracking-tighter mb-10 text-white drop-shadow-2xl"
          >
            $TAXI
          </motion.h1>

          {/* --- CONTRACT ADDRESS BOX --- */}
          <motion.div
            variants={itemVariants}
            className="bg-[#161b22] border border-[#f2c94c]/30 rounded-full px-4 py-2.5 flex items-center gap-4 mb-10 max-w-[95%] sm:max-w-md w-full shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <code className="text-[10px] md:text-xs truncate flex-1 text-gray-400 font-mono">
              {ca}
            </code>
            <button
              className="hover:scale-110 transition-transform active:scale-90"
              onClick={() => {
                navigator.clipboard.writeText(ca);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? (
                <Check size={18} className="text-green-500" />
              ) : (
                <Copy size={18} className="text-[#f2c94c]" />
              )}
            </button>
          </motion.div>

          {/* --- SOCIALS --- */}
          <motion.div variants={itemVariants} className="flex gap-5 mb-16">
            {[
              { icon: <Twitter size={20} />, link: "https://x.com/_taximeme" },
              { icon: <Send size={20} />, link: "https://t.me/Robotaximeme" },
              {
                icon: <Mail size={20} />,
                link: "mailto:realctoteam@gmail.com",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                className="p-3.5 bg-[#161b22] border border-[#f2c94c]/20 rounded-full text-[#f2c94c] hover:bg-[#f2c94c] hover:text-black hover:border-[#f2c94c] transition-all duration-300 shadow-xl group"
              >
                <div className="group-hover:rotate-[360deg] transition-transform duration-500">
                  {social.icon}
                </div>
              </a>
            ))}
          </motion.div>

          {/* --- SLOGAN --- */}
          <motion.div variants={itemVariants} className="max-w-4xl space-y-4">
            <h2 className="text-4xl md:text-8xl font-black leading-[0.85] uppercase italic text-center">
              The World's First <br />{" "}
              <span className="text-[#f2c94c] drop-shadow-[0_4px_10px_rgba(242,201,76,0.2)]">
                Autonomous
              </span>{" "}
              <br /> Memecoin
            </h2>
          </motion.div>
        </motion.header>
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
              className="border-4 sm:border-8 border-black shadow-[10px_10px_0_0_#39437E] w-full flex justify-center bg-[#0a0e14] overflow-hidden rounded-lg"
            >
              <img
                src="/about.jpg"
                alt="About Taxi"
                /* Added fixed height and object-cover to prevent distortion */
                className="w-full h-auto md:h-[600px] object-cover"
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
              <div className="p-4 bg-[#f2c94c] border-2 sm:border-4 border-black font-black uppercase text-xs sm:text-sm text-black italic">
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
          className="py-24 bg-[#0a0e14] text-white border-y-2 border-white/10 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl text-[#f2c94c] italic uppercase font-black underline decoration-white/10">
                TOKENOMICS
              </h2>
              <p className="text-gray-400 mt-4 font-medium tracking-widest uppercase text-xs">
                Autonomous Economy Distribution
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* --- IMAGE SIDE --- */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Glow effect behind the image */}
                <div className="absolute -inset-4 bg-[#f2c94c] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity rounded-full" />

                <div className="relative border-4 border-[#f2c94c]/30 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                  <img
                    src="/tokenometrics.jpg"
                    alt="Robotaxi Economics"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* --- CARDS SIDE --- */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerStagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
              >
                {[
                  { l: "TOTAL SUPPLY", v: "100M", desc: "Hard Capped" },
                  { l: "BUY TAX", v: "0%", desc: "No Friction" },
                  { l: "SELL TAX", v: "0%", desc: "Exit Freely" },
                  { l: "LIQUIDITY", v: "BURNT", desc: "Permanently Locked" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    whileHover={{ y: -5, borderColor: "#f2c94c" }}
                    className="bg-[#161b22] border-2 border-white/5 p-8 rounded-2xl transition-all duration-300"
                  >
                    <p className="text-[10px] font-black mb-1 uppercase tracking-[0.2em] text-[#f2c94c]">
                      {s.l}
                    </p>
                    <p className="text-3xl font-black italic mb-1">{s.v}</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        {/* --- ROADMAP --- */}
        <section id="roadmap" className="py-20 px-6 border-b-2 border-white/10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="/ROADMAP.png"
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
