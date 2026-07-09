import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Fitted Furniture",
      description: "Wardrobes, alcove units, media walls, shelving, and storage built around awkward spaces.",
      highlight: false,
      image: "https://images.unsplash.com/photo-1544164560-adac3045edb2?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Kitchens & Cabinetry",
      description: "Premium cabinetry, utility rooms, islands, pantry storage, and custom fronts.",
      highlight: true,
      image: "https://plus.unsplash.com/premium_photo-1664303816628-2c3f28be369d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Architectural Details",
      description: "Panelling, stair features, banquettes, timber screens, and finishing details.",
      highlight: false,
      image: "https://images.unsplash.com/photo-1560170433-bc0adc32bccd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="services" className="py-24 px-8 md:px-16 text-deep-walnut pb-48">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight mb-6">
            Start Your Project
          </h2>
          <p className="font-sans text-lg text-charcoal/80 max-w-xl">
            We don't do off-the-shelf pricing. Every piece is quoted individually based on timber selection, scale, and finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group overflow-hidden rounded-[2rem] md:rounded-[3rem] transition-transform duration-300 hover:-translate-y-2 flex flex-col min-h-[400px] relative ${service.highlight
                ? 'bg-warm-oak text-deep-walnut shadow-xl'
                : 'bg-soft-stone border border-charcoal/5'
                }`}
            >
              <div className="h-56 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-sans font-bold text-2xl mb-4">{service.title}</h3>
                <p className={`font-sans text-base flex-1 ${service.highlight ? 'text-deep-walnut/90' : 'text-charcoal/70'}`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-10 py-5 bg-deep-walnut text-sanded-timber font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
            Request a quote
          </button>
        </div>
      </div>
    </section>
  );
}
