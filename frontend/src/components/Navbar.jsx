import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const topOffset = navbarRef.current.getBoundingClientRect().top;
      setScrolled(topOffset <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`transition-all duration-500 ease-in-out w-4/5 mx-auto z-50 ${
        scrolled
          ? "fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/90 shadow-xl py-3 border border-gray-800 rounded-2xl backdrop-blur-md"
          : "absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 py-4 border border-gray-700 rounded-2xl"
      }`}
    >
      <div className="flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            className="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C7.03 2 3 6.03 3 11c0 3.48 2.01 6.52 4.95 8.03V22h4v-2h2v2h4v-2.97c2.94-1.51 4.95-4.55 4.95-8.03 0-4.97-4.03-9-9-9zm0 16a7 7 0 1 1 7-7 7.01 7.01 0 0 1-7 7z" />
          </svg>
          <span className="font-bold text-xl text-white">Elyvra</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {["Features", "Process", "Testimonials"].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="font-medium text-white hover:text-gray-300 transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/signin"
            className="font-medium text-white hover:text-gray-300 transition-colors duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-full font-medium bg-white text-black hover:bg-gray-200 transition-all duration-300"
          >
            Sign Up for Free
          </Link>
        </div>
      </div>
    </nav>
  );
}
