import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const initialOffset = useRef(0);

  useEffect(() => {
    if (!navbarRef.current) return;
    initialOffset.current = navbarRef.current.offsetTop;

    const handleScroll = () => {
      if (!navbarRef.current) return;
      setScrolled(window.scrollY >= initialOffset.current - 4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`transition-all duration-500 ease-in-out mx-auto z-50 ${
        scrolled
          ? "fixed top-4 left-1/2 -translate-x-1/2 w-[63%] bg-white/80 backdrop-blur-xl py-2.5 border border-gray-300/30 rounded-2xl"
          : "fixed top-4 left-1/2 -translate-x-1/2 w-[78%] bg-transparent py-3.5 border border-gray-300/30 rounded-2xl"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 px-8 ${
          scrolled ? "gap-6" : "gap-8"
        }`}
      >
        {/* Logo + Site Name */}
        <div
          className={`flex items-center transition-all duration-500 ${
            scrolled ? "gap-2" : "gap-3"
          }`}
        >
          <span
            className={`font-light transition-all duration-500 ${
              scrolled
                ? "text-gray-800 tracking-tight text-[0.82rem]"
                : "text-gray-800 tracking-wide text-xl"
            }`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            ELYVRA
          </span>
        </div>

        {/* Middle Links – skinny font */}
        <div className={`hidden md:flex transition-all duration-500 ${scrolled ? "gap-6" : "gap-10"}`}>
          {["Features", "Process", "Testimonials"].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="font-light tracking-widest text-[0.85rem] uppercase text-gray-700 hover:text-gray-900 transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Auth + CTA Button */}
        <div className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? "gap-3" : "gap-4"}`}>
          <Link
            to="/signin"
            className="font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Sign In
          </Link>

          {/* GET STARTED BUTTON */}
          <Link
            to="/signup"
            className="
              inline-flex items-center gap-2
              text-white bg-black hover:bg-black/80
              border border-white/10 shadow-xs
              font-light tracking-wide
              leading-5 rounded-full text-sm
              px-5 py-2 transition-all duration-300
            "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get Started
            <svg
              className="w-4 h-4 transform rotate-45"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}