"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const ceo = {
  name: "Sai Sujan",
  role: "Founder & CEO",
  image: "/33.png",
  linkedin: "#",
  description:
    "Visionary leader driving the platform with a strong focus on innovation, impact, and scalable education solutions.",
};

const team = [
  {
    name: "Roopa",
    role: "Lead Developer & Operations",
    image: "/11.png",
  },
  {
    name: "Sreedhar",
    role: "Marketing Head",
    image: "/22.png",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-39">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-black">
            Meet Our <span className="text-[#f54e02]">Team</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            The people who turn vision into reality.
          </p>
        </div>

        {/* CEO Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-24">
          {/* CEO Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mx-auto md:mx-0 max-w-[340px] rounded-2xl overflow-hidden"
          >
            <Image
              src={ceo.image}
              alt={ceo.name}
              width={400}
              height={400}
              className="aspect-square w-full object-cover"
            />
          </motion.div>

          {/* CEO Content */}
          <div>
            <h3 className="text-3xl font-semibold text-black">
              {ceo.name}
            </h3>
            <p className="text-[#f54e02] font-medium mt-1">
              {ceo.role}
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed max-w-lg">
              {ceo.description}
            </p>

            <a
              href={ceo.linkedin}
              className="inline-flex items-center gap-2 mt-6 text-black hover:text-[#f54e02] transition"
            >
              <Linkedin size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      



      </div>
        <div className="max-w-7xl mx-auto">
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group bg-white text-center"
              >
                {/* Image */}
                <div className="mx-auto max-w-[340px] overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Name & Role BELOW image */}
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-black">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {member.role}
                  </p>
                  <a
              href={ceo.linkedin}
              className="inline-flex items-center gap-2 mt-6 text-black hover:text-[#f54e02] transition"
            >
              <Linkedin size={18} />
            </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}
