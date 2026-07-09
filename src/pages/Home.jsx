import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function Home() {
  const pathways = [
    {
      title: 'See the work',
      eyebrow: 'WORK',
      description: 'Browse finished spaces, fitted details, and the level of finish we build toward.',
      to: '/work',
      accent: 'bg-[#f3ede3] text-deep-walnut'
    },
    {
      title: 'Understand the process',
      eyebrow: 'PROCESS',
      description: 'See how a project moves from first conversation to design, build, and installation.',
      to: '/process',
      accent: 'bg-transparent text-sanded-timber border border-sanded-timber/15'
    },
    {
      title: 'Explore services',
      eyebrow: 'SERVICES',
      description: 'Find the right fit for wardrobes, cabinetry, kitchens, media walls, and timber detailing.',
      to: '/services',
      accent: 'bg-[#c89a62] text-deep-walnut'
    }
  ];

  return (
    <main>
      <Hero />

      <section className="relative overflow-hidden bg-deep-walnut px-8 pb-28 pt-8 md:px-16 md:pb-36">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-sanded-timber/45">
                Continue Exploring
              </p>
              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-sanded-timber md:text-5xl">
                A few clear ways into the rest of the site.
              </h2>
            </div>

            <p className="max-w-md font-sans text-base leading-relaxed text-sanded-timber/60">
              If the home page feels right, these sections help people quickly move into proof, process, and scope.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {pathways.map((pathway) => (
              <Link
                key={pathway.to}
                to={pathway.to}
                className={`group flex min-h-[240px] flex-col justify-between rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1 ${pathway.accent}`}
              >
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] opacity-60">
                    {pathway.eyebrow}
                  </p>
                  <h3 className="mt-4 max-w-[12ch] font-sans text-3xl font-semibold leading-tight md:text-4xl">
                    {pathway.title}
                  </h3>
                  <p className="mt-4 max-w-xs font-sans text-base leading-relaxed opacity-75">
                    {pathway.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-current/10 pt-5">
                  <span className="font-sans text-sm font-medium">
                    Open page
                  </span>
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
