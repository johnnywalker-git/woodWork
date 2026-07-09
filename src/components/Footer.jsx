import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-deep-walnut text-sanded-timber rounded-t-[4rem] px-8 md:px-16 py-20 mt-[-2rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16 border-b border-sanded-timber/10 pb-16">
        
        <div className="max-w-xs">
          <h2 className="font-sans font-bold text-2xl mb-4">woodWORK</h2>
          <p className="font-sans text-sanded-timber/60">
            Precision-made fitted furniture and architectural timber details.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-brass mb-2">Explore</h4>
            {['WORK', 'Process', 'Services'].map(link => (
              <Link key={link} to={`/${link.toLowerCase()}`} className="text-sanded-timber/70 hover:text-sanded-timber transition-colors">
                {link}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-brass mb-2">Connect</h4>
            <a href="#" className="text-sanded-timber/70 hover:text-sanded-timber transition-colors">Instagram</a>
            <a href="#" className="text-sanded-timber/70 hover:text-sanded-timber transition-colors">Pinterest</a>
            <a href="#" className="text-sanded-timber/70 hover:text-sanded-timber transition-colors">Email Us</a>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 font-mono text-sm text-sanded-timber/60 bg-sanded-timber/5 px-4 py-2 rounded-full border border-sanded-timber/10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Workshop capacity available
        </div>
        
        <div className="flex gap-6 font-sans text-sm text-sanded-timber/40">
          <a href="#" className="hover:text-sanded-timber transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-sanded-timber transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
