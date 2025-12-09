"use client";

import Image from "next/image";

export default function OurClients() {
  const clients = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Meta_Platforms_Inc._logo.svg",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-18">

        {/* Heading */}
        <div className="text-center mb-10 text-black">
          <span className="inline-block bg-[#ff4500] w-12 h-[3px]"></span>

          <h2 className="mt-3 text-3xl md:text-4xl font-fredoka">
            Our <span className="font-bold">Clients</span>
          </h2>

          <p className="max-w-xl mx-auto mt-2">
            Trusted by leading brands and growing businesses
          </p>
        </div>

        {/* Infinite Logo Loop */}
        <div className="overflow-hidden py-6 mt-8 relative group">
          <style>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .client-loop {
              display: flex;
              animation: scrollLeft 18s linear infinite;
            }
            .group:hover .client-loop {
              animation-play-state: paused;
            }
          `}</style>

          <div className="client-loop">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[160px] mx-8"
              >
                <div
                  className="
                    w-[130px] h-[80px] bg-white rounded-xl 
                    shadow-md flex items-center justify-center
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={90}
                    height={40}
                    className="object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
