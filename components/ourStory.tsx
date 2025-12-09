"use client";

import { motion } from "framer-motion";
import { Award, Lightbulb, Handshake, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">

      {/* ================= OUR STORY ================= */}
      <section className="container mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="relative">
          <motion.div className="overflow-hidden rounded-xl">
            <Image
              src="/aboutus-section1-img.png"
              alt="Team Discussion"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Orange Blob */}
          <div className="absolute -z-10 -left-10 top-16 w-64 h-64 bg-orange-500 rounded-[60%]" />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Shraddha began with a simple observation: while India produces
            numerous engineering graduates each year, there was a significant
            gap between academic knowledge and industry requirements.
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Founded by a team of technology professionals and educators,
            Shraddha provides targeted, practical training that focuses on
            real-world skills and workplace readiness.
          </p>

          {/* Highlights */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white p-3 rounded-full">🚀</div>
              <div>
                <h4 className="font-semibold">Our Beginning</h4>
                <p className="text-sm text-gray-600">
                  Started with 2 courses and a single classroom.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white p-3 rounded-full">👥</div>
              <div>
                <h4 className="font-semibold">Growing Community</h4>
                <p className="text-sm text-gray-600">
                  Trained 5,000+ students with 95% placement rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="container mx-auto px-6 md:px-16 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          The principles that guide our approach to education and business
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Award size={24} />, title: "Excellence" },
            { icon: <Lightbulb size={24} />, title: "Innovation" },
            { icon: <Handshake size={24} />, title: "Integrity" },
            { icon: <Users size={24} />, title: "Community" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="bg-orange-500 text-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 mt-3 text-sm">
                We focus on delivering the highest value in everything we do.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#1C1F24] py-24">
  <div className="container mx-auto px-6 text-white">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center mb-4">
      Client <span className="text-orange-500">Testimonials</span>
    </h2>
    <p className="text-center text-gray-400 mb-16">
      What our clients say about our web development services
    </p>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-[#101113] border border-gray-700 p-10 rounded-xl">
        <div className="text-orange-500 text-5xl mb-4">❝</div>

        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          "We approached Shraddha for a complete website redesign, and they
          exceeded our expectations. The new website perfectly represents our
          brand and has significantly improved our conversion rates."
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
            A
          </div>
          <div>
            <h5 className="font-semibold">Ashok</h5>
            <p className="text-xs text-gray-400">Director SSE</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#101113] border border-gray-700 p-10 rounded-xl">
        <div className="text-orange-500 text-5xl mb-4">❝</div>

        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          "The AI workshop delivered by the Shraddha team was intellectually
          stimulating and spiritually enriching. They introduced students to the
          evolving world of AI with a unique blend of technical insight and
          ethical awareness."
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
            V
          </div>
          <div>
            <h5 className="font-semibold">Vinod</h5>
            <p className="text-xs text-gray-400">
              Placement Officer, IIT Idupulapaya
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#101113] border border-gray-700 p-10 rounded-xl">
        <div className="text-orange-500 text-5xl mb-4">❝</div>

        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          "The Shraddha team demonstrated deep expertise in IoT technologies and
          presented the concepts in a way that was both accessible and engaging
          for students from various technical backgrounds."
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
            K
          </div>
          <div>
            <h5 className="font-semibold">Dr. Kumaran</h5>
            <p className="text-xs text-gray-400">
              HOD, Dhanalakshmi Srinivasan University
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
