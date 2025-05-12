import { Twitter, MessageSquare, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-yellow-400">
      {/* Radial background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-yellow-400 to-yellow-500"></div>
        <div className="absolute inset-0 bg-[url('/rays.png')] bg-center opacity-70"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <img src="/monkey-logo.png" alt="Token Logo" className="h-12 w-12" />
          <span className="text-2xl font-black uppercase tracking-wider text-black">
            MONKE
          </span>
        </div>
        <div className="flex gap-2">
          <Link
            to="#"
            className="rounded-lg border-2 border-black bg-yellow-300 px-4 py-2 font-bold text-black transition-transform hover:scale-105 hover:bg-yellow-200"
          >
            INTEGRATIONS ↗
          </Link>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 animate-bounce">
          <img
            src="/monkey-face.png"
            alt="Monkey Character"
            className="h-48 w-48 md:h-64 md:w-64"
          />
        </div>
        <h1 className="mb-2 text-7xl font-black uppercase tracking-tighter text-black md:text-8xl lg:text-9xl">
          MONKE
        </h1>
        <p className="mb-8 text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
          THE GOLDEN CHILD OF SOLANA
        </p>
        <Link
          to="#about"
          className="transform rounded-md border-4 border-black bg-red-500 px-8 py-3 text-xl font-black uppercase text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        >
          EXPLORE
        </Link>

        {/* Social links */}
        <div className="absolute bottom-8 left-4 flex gap-2 md:bottom-12 md:left-8">
          <Link
            to="#"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-white transition-transform hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </Link>
          <Link
            to="#"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-white transition-transform hover:scale-110"
            aria-label="Telegram"
          >
            <MessageSquare size={20} />
          </Link>
          <Link
            to="#"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-white transition-transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </Link>
        </div>

        {/* Helmet button */}
        <div className="absolute bottom-8 right-4 md:bottom-12 md:right-8">
          <Link
            to="#"
            className="rounded-md border-2 border-black bg-green-600 px-4 py-2 font-bold text-white transition-transform hover:scale-105"
          >
            PUT ON A HELMET
          </Link>
        </div>
      </div>
    </section>
  );
}
