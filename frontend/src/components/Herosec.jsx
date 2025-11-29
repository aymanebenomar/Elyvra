import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Example videos
import beforeVideo from "../assets/before.mp4";
import afterVideo from "../assets/after.mp4";

// Trusted company logos
import amazonLogo from "../assets/amazon.png";
import googleLogo from "../assets/amazon.png";
import netflixLogo from "../assets/amazon.png";
import metaLogo from "../assets/amazon.png";
import appleLogo from "../assets/amazon.png";

export default function HeroSection() {
  const loopTexts = ["Talking Head", "Marketing", "Instagram", "YouTube", "Videos"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loopTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const trustedCompanies = [
    { name: "Amazon", logo: amazonLogo },
    { name: "Google", logo: googleLogo },
    { name: "Netflix", logo: netflixLogo },
    { name: "Meta", logo: metaLogo },
    { name: "Apple", logo: appleLogo },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden pb-24">
      
      {/* === Background Design from second code === */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                              linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            backgroundPosition: "center center",
          }}
        />
      </div>
      {/* === End Background === */}

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between flex-1 pt-4 md:pt-6">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-8 mb-12 md:mb-0"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight tracking-tight">
            Put <span className="underline">people</span> first with{" "}
            <span className="inline-block relative h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="font-extrabold text-black"
                >
                  {loopTexts[currentText]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-black text-xl md:text-2xl font-normal max-w-lg">
            Faster, user-friendly and engaging. Turn ideas into interactive content. Your daily posts with your own branded website.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="px-5 py-2 bg-black text-white rounded-full text-sm hover:bg-black/80 transition-all duration-300">
                Book a demo trial
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Video Comparison */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center items-center gap-6 md:gap-8"
        >
          {/* Before Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-48 md:w-64 h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-video border-2 border-white/50"
          >
            <video
              src={beforeVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Animated Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronRight
                  className="w-8 h-8 md:w-10 md:h-10 text-accent drop-shadow-lg"
                  strokeWidth={3}
                />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-accent rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* After Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-56 md:w-80 h-96 md:h-[520px] rounded-3xl overflow-hidden shadow-video border-2 border-accent/20"
          >
            <video
              src={afterVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Trusted by creatives - MOVED TO BOTTOM */}
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-gray-600 tracking-wider -translate-y-10">Trusted by creatives</p>
          <div className="w-[35%] relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none"></div>
            <div className="flex gap-6 animate-horizontal-loop">
              {trustedCompanies.concat(trustedCompanies).map((company, i) => (
                <img
                  key={i}
                  src={company.logo}
                  alt={company.name}
                  className="h-7 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal loop CSS */}
      <style>
        {`
          @keyframes horizontal-loop {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-horizontal-loop {
            display: flex;
            gap: 2rem;
            animation: horizontal-loop 8s linear infinite;
          }
        `}
      </style>
    </section>
  );
}