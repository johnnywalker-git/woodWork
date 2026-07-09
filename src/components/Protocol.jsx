import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const container = useRef(null);

  const steps = [
    {
      id: "01",
      title: "Consultation",
      description: "We understand the space, the problem, the finish, and how the piece needs to live day-to-day.",
      image: "https://plus.unsplash.com/premium_photo-1723651610472-1ee8bdc7082f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "02",
      title: "Design & Build",
      description: "We translate measurements into drawings, materials, and workshop-ready details before the first cut is made.",
      image: "https://images.unsplash.com/photo-1638718260002-18bdc8082608?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "03",
      title: "Install & Finish",
      description: "We fit, align, adjust, and finish the work so it feels original to the room.",
      image: "https://images.unsplash.com/photo-1722650364570-90bf509d7dff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');

      // Initialize starting positions for incoming cards
      gsap.set(cards.slice(1), { yPercent: 100 });

      // Create a master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1, // Smooth scrub
        }
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        const previousCard = cards[i - 1];

        // The previous card shrinks and blurs
        tl.to(previousCard, {
          scale: 0.9,
          opacity: 0.5,
          filter: "blur(20px)",
          ease: "none"
        }, i - 1);

        // The incoming card slides up over it
        tl.to(card, {
          yPercent: 0,
          ease: "none"
        }, i - 1);
      });

      // Force a refresh so ScrollTrigger calculates the pin correctly 
      // after React Router mounts the component
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative h-screen w-full overflow-hidden bg-deep-walnut">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className="protocol-card absolute inset-0 w-full h-full p-8 md:p-16 flex flex-col justify-center origin-top bg-deep-walnut"
          style={{ zIndex: index }}
        >
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full pt-16">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-warm-oak text-xl">Step {step.id}</span>
              <h2 className="font-sans font-bold text-5xl md:text-7xl text-sanded-timber tracking-tight">{step.title}</h2>
              <p className="font-sans text-xl text-sanded-timber/70 max-w-lg">{step.description}</p>
            </div>

            <div className="h-[40vh] md:h-[60vh] w-full rounded-[2rem] overflow-hidden relative shadow-2xl">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-deep-walnut/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
