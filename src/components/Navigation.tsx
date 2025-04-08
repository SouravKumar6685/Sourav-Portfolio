// navigation.tsx
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Notes", href: "#notes" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        y: isMobileMenuOpen ? 0 : "-100%",
        opacity: isMobileMenuOpen ? 1 : 0,
        display: isMobileMenuOpen ? "flex" : "none",
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/10 backdrop-blur-sm">
      <div className="container mx-auto pt-6 px-6 py-4 flex justify-center items-center relative">

        {/* 🌐 Desktop Navigation */}
        <div className="hidden  md:flex space-x-10 text-black text-lg font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group transition-colors duration-300"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* 🍔 Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          className="md:hidden text-black absolute right-6 top-1/2 transform -translate-y-1/2 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* 📱 Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-16 left-0 right-0 flex-col space-y-6 text-[#FFFFFF] text-xl font-medium bg-[#212121] py-6 px-6 z-40 transform -translate-y-full opacity-0"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMobileMenu}
              className="transition-colors hover:text-gray-700"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
