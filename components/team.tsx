"use client";

import Image from "next/image";
import { Linkedin, X } from "lucide-react";

const team = [
  {
    name: "Sai Sujan",
    role: "Founder & CEO",
    image: "/33.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Roopa",
    role: "Lead Developer & Operations",
    image: "/11.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sreedhar",
    role: "Marketing Head",
    image: "/22.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Mason Oliver",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-[#1f3a5f]">
          Meet the People Behind
        </h2>
        <p className="text-4xl font-semibold text-[#1f3a5f] mt-2">
          the Platform
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Info */}
              <div className="mt-5 flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-[#1f3a5f]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>

                {/* Social icons */}
                <div className="flex gap-3 opacity-80">
                  <a
                    href={member.linkedin}
                    className="text-[#1f3a5f] hover:text-blue-600 transition"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-[#1f3a5f] hover:text-black transition"
                  >
                    <X size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
