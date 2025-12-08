"use client";

import { motion } from "framer-motion";
import { Award, Lightbulb, Handshake, Users, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-white">

      {/* ================= OUR STORY ================= */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Images */}
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="/images/meeting1.png"  // replace with your PNG
              alt="Team Discussion"
              width={500}
              height={500}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-[-60px] right-0 w-60 overflow-hidden rounded-xl shadow-lg border-4 border-white bg-white"
          >
            <Image
              src="/images/meeting2.png"  // replace with your PNG
              alt="Team Working"
              width={500}
              height={500}
              className="object-cover"
            />
          </motion.div>

          {/* Orange Blob */}
          <div className="absolute -z-10 left-[-40px] top-[60px] w-64 h-64 bg-orange-500 rounded-[60%]" />
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

          <div className="flex gap-10">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                🚀
              </div>
              <div>
                <h4 className="font-semibold">Our Beginning</h4>
                <p className="text-sm text-gray-600">
                  Started with 2 courses and a single classroom.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                👥
              </div>
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
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
        <p className="text-gray-500 mb-12">
          The principles that guide our approach to education and business
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Award />, title: "Excellence" },
            { icon: <Lightbulb />, title: "Innovation" },
            { icon: <Handshake />, title: "Integrity" },
            { icon: <Users />, title: "Community" },
          ].map((item, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
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
          <h2 className="text-4xl font-bold text-center mb-16">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Ashok", "Vinod", "Dr. Kumaran"].map((name, i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={i}
                className="border border-gray-700 p-8 rounded-xl"
              >
                <div className="text-orange-500 text-4xl mb-4">“</div>
                <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                  The team exceeded expectations and delivered exceptional
                  results with professionalism.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold">
                    {name[0]}
                  </div>
                  <div>
                    <h5 className="font-semibold">{name}</h5>
                    <p className="text-xs text-gray-400">Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {[
          "How long does it take to build a website?",
          "How much does a website cost?",
          "Will my website be mobile-friendly?",
          "Do you provide maintenance services?",
        ].map((q, i) => (
          <div
            key={i}
            className="border rounded-xl mb-4 overflow-hidden"
          >
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="flex justify-between items-center w-full p-6 font-medium"
            >
              {q}
              <ChevronDown
                className={`transition ${
                  openFaq === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {openFaq === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                className="px-6 pb-6 text-gray-600"
              >
                We deliver websites within 2–12 weeks depending on complexity.
              </motion.div>
            )}
          </div>
        ))}
      </section>

      {/* ================= RESULTS ================= */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Results That Drive Growth
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "150%", label: "Average Traffic Increase" },
              { num: "200+", label: "Successful Campaigns" },
              { num: "85%", label: "Client Retention Rate" },
              { num: "3x", label: "Average ROI" },
            ].map((stat, i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={i}
                className="bg-white p-8 rounded-xl shadow"
              >
                <h3 className="text-4xl font-bold text-orange-500">
                  {stat.num}
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
