import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="font-sans font-semibold tracking-wide text-lg md:pointer-events-none"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          woodWORK
        </button>

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

      <div
        id="mobile-nav"
        className={`md:hidden absolute top-full mt-3 w-[calc(100%-3rem)] max-w-5xl rounded-[2rem] border border-sanded-timber/15 bg-[#f3ede3]/95 p-4 text-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ${mobileMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
          }`}
      >
        <div className="mb-3 flex items-center justify-between px-2">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-charcoal/45">
            Explore
          </p>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-full border border-charcoal/10 px-3 py-1 text-xs font-medium text-charcoal/60"
          >
            Close
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <Link to="/work" className="rounded-[1.5rem] bg-white/70 px-5 py-4 text-base font-medium transition-transform duration-300 hover:translate-x-1">
            WORK
          </Link>
          <Link to="/process" className="rounded-[1.5rem] bg-white/50 px-5 py-4 text-base font-medium transition-transform duration-300 hover:translate-x-1">
            Process
          </Link>
          <Link to="/services" className="rounded-[1.5rem] bg-white/50 px-5 py-4 text-base font-medium transition-transform duration-300 hover:translate-x-1">
            Services
          </Link>
          <a href="#contact" className="rounded-[1.5rem] bg-deep-walnut px-5 py-4 text-base font-medium text-sanded-timber transition-transform duration-300 hover:translate-x-1">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
