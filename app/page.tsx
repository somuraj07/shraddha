"use client"
import AboutSection from '@/components/aboutus'
import Banner from '@/components/baneer'
import React from 'react'
import { motion } from "framer-motion";
import BusinessServicesSection from '@/components/services';
import ContactPage from '@/components/miniContact';

const Home = () => {
  return (
    <div>
        <Banner/>
        <BusinessServicesSection/>
        <AboutSection/>
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
      <ContactPage
        title="Ready to kickstart your journey?"
        description="Let's discuss your ideas and make your vision a reality."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Home