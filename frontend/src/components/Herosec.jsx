import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Example videos (replace with your own)
import beforeVideo from "../assets/before.mp4";
import afterVideo from "../assets/after.mp4";

export default function HeroSection() {
  const loopTexts = ["Talking Head", "Marketing", "Instagram", "YouTube", "Videos"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loopTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-hero flex flex-col overflow-hidden pb-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, hsl(215 85% 55%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Top tag */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm text-accent px-6 py-2.5 rounded-full font-semibold text-sm shadow-soft border border-accent/10"
        >
          Edit your videos in seconds
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between flex-1 pt-4 md:pt-8">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-8 mb-12 md:mb-0"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
            Instant AI Animations for{" "}
            <span className="inline-block relative h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-accent bg-clip-text text-transparent font-extrabold"
                >
                  {loopTexts[currentText]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl font-normal max-w-lg">
            Turn your raw videos into engaging, animated content in seconds.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/signup"
              className="px-8 py-4 bg-gradient-accent text-primary-foreground rounded-2xl font-semibold shadow-soft hover:shadow-video transition-all duration-300 hover:scale-105"
            >
              Get Started for Free
            </Link>
            <Link
              to="/features"
              className="px-8 py-4 border-2 border-accent/20 bg-white/50 backdrop-blur-sm text-accent rounded-2xl font-semibold hover:bg-white/80 hover:border-accent/30 transition-all duration-300"
            >
              Explore Features
            </Link>
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
            <div className="absolute bottom-4 left-4 bg-gradient-accent text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-soft backdrop-blur-sm">
              After ✨
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
