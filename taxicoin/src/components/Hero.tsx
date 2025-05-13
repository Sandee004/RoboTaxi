//import { Twitter, MessageSquare, Instagram } from "lucide-react";
//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-yellow-500">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <img src="/intro.jpg" alt="Token Logo" className="h-12 w-12" />
          <span className="text-2xl font-black uppercase tracking-wider text-black">
            TaxiCoin
          </span>
        </div>
        <div className="flex gap-2">
          <a
            href="#"
            className="rounded-lg border-2 border-black bg-yellow-300 px-4 py-2 font-bold text-black transition-transform hover:scale-105 hover:bg-yellow-200"
          >
            SUPPORTED WALLETS ↗
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="flex flex-col items-center mt-50 justify-center px-4 text-center">
        <div
          className={`justify-center flex transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/intro.jpg"
            alt="Monkey Character"
            className="w-[80%] rounded-full md:w-[70%]"
          />
        </div>
        <h1
          className={`mb-2 text-7xl font-black uppercase tracking-tighter text-black md:text-8xl lg:text-9xl transition-all duration-700 delay-150 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          TAXICOIN
        </h1>
        <p
          className={`mb-8 text-xl font-bold uppercase tracking-wide text-black md:text-2xl transition-all duration-700 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          BUILDING INCLUSIVITY IN CRYPTO
        </p>
      </div>
    </section>
  );
}

{
  /*
        <Link
          to="#about"
          className="transform rounded-md border-4 border-black bg-red-500 px-8 py-3 text-xl font-black uppercase text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        >
          EXPLORE
        </Link>

        {/* Social links *}
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

        {/* Helmet button *}
        <div className="absolute bottom-8 right-4 md:bottom-12 md:right-8">
          <Link
            to="#"
            className="rounded-md border-2 border-black bg-green-600 px-4 py-2 font-bold text-white transition-transform hover:scale-105"
          >
            PUT ON A HELMET
          </Link>*/
}
