"use client";
import HeroSection from '@/components/HeroSection'
import ContactPage from '@/components/miniContact'
import MissionVisionSection from '@/components/ourMission'
import AboutPage from '@/components/ourStory'
import OurTeam from '@/components/team'
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const About = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <HeroSection/>
        <MissionVisionSection/>
        <AboutPage/>
        <OurTeam/>
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
        <ContactPage
        title="Want to collaborate with us?"
        description="Reach out to explore partnership opportunities and get in touch."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
    
  )
}

export default About