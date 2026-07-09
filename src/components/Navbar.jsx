import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.03, duration: 0.3, ease: "power2.out" });
  };
  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-40 p-6 transition-all duration-500">
      <nav
        className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-700 w-full max-w-5xl ${scrolled || !isHomePage ? 'bg-soft-stone/90 backdrop-blur-md border border-charcoal/10 text-charcoal shadow-lg' : 'bg-transparent text-sanded-timber'
          }`}
      >
        <Link to="/" className="font-sans font-semibold tracking-wide text-lg">
          woodWORK
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/work" className="hover:-translate-y-px transition-transform duration-300">WORK</Link>
          <Link to="/process" className="hover:-translate-y-px transition-transform duration-300">Process</Link>
          <Link to="/services" className="hover:-translate-y-px transition-transform duration-300">Services</Link>
          <a href="#contact" className="hover:-translate-y-px transition-transform duration-300">Contact</a>
        </div>

        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative overflow-hidden px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${scrolled || !isHomePage ? 'bg-deep-walnut text-sanded-timber' : 'bg-sanded-timber text-deep-walnut'
            }`}
        >
          Book Consultation
        </button>
      </nav>
    </div>
  );
}
