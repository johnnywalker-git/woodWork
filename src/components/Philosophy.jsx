import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out"
      });
      
      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: 100,
        ease: "none"
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={container} className="relative py-32 px-8 md:px-16 bg-deep-walnut overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <div className="absolute inset-0 z-0">
        <div
          aria-hidden="true"
          className="parallax-bg absolute -top-10 h-[120%] w-full opacity-25"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(214, 171, 120, 0.08), transparent 30%),
              radial-gradient(circle at 80% 65%, rgba(214, 171, 120, 0.06), transparent 28%),
              repeating-linear-gradient(
                96deg,
                rgba(255, 255, 255, 0.02) 0px,
                rgba(255, 255, 255, 0.02) 2px,
                rgba(58, 39, 28, 0.16) 10px,
                rgba(58, 39, 28, 0.16) 22px
              ),
              linear-gradient(180deg, rgba(16, 10, 8, 0.15), rgba(16, 10, 8, 0.5))
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center flex flex-col gap-8">
        <p className="reveal-text font-sans text-lg md:text-xl text-sanded-timber/70 max-w-2xl mx-auto">
          Most joinery websites focus on catalogues, square edges, and generic before-and-after photos.
        </p>
        
        <h2 className="reveal-text font-drama italic text-4xl md:text-6xl lg:text-7xl leading-tight text-sanded-timber">
          We focus on the <span className="text-warm-oak">quiet precision</span> that makes a room feel inevitable.
        </h2>
      </div>
    </section>
  );
}
