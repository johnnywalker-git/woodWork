import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-[100dvh] w-full flex items-end pb-24 px-8 md:px-16 overflow-hidden">
      {/* Background Image with Walnut Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Joinery Workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut via-deep-walnut/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-3xl hero-content text-shadow-premium">
        <h1 className="hero-text mb-4 font-sans font-semibold uppercase tracking-[0.18em] text-5xl md:text-7xl lg:text-8xl text-sanded-timber">
          woodWORK
        </h1>

        <div className="flex flex-col gap-2 mb-6">
          <span className="hero-text font-sans font-bold text-4xl md:text-5xl tracking-tight text-sanded-timber">
            Bespoke joinery
          </span>
          <span className="hero-text font-drama italic text-6xl md:text-8xl text-brass leading-none">
            crafted to fit.
          </span>
        </div>
        
        <p className="hero-text font-sans text-lg md:text-xl text-soft-stone/80 max-w-xl mb-10 leading-relaxed">
          Precision-made fitted furniture, cabinetry, and architectural timber details for homes and commercial spaces that deserve more than off-the-shelf.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="hero-text px-8 py-4 bg-warm-oak text-deep-walnut font-semibold rounded-full hover:bg-brass transition-colors duration-300">
            Book a design consultation
          </button>
          <button className="hero-text px-8 py-4 border border-sanded-timber/30 text-sanded-timber font-medium rounded-full hover:bg-sanded-timber/10 transition-colors duration-300">
            View our process
          </button>
        </div>
      </div>
    </section>
  );
}
