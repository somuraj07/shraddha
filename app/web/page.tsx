"use client";
import HeroSection from '@/components/HeroSection';
import ContactPage from '@/components/miniContact';
import DevelopmentProcessSection from '@/components/webprocess'
import WebServiceStack from '@/components/WebServiceStack';
import BusinessServicesSection from '@/components/whiteService'


import { motion } from "framer-motion";
import {  ChevronDown } from "lucide-react";
import { useState } from 'react';

const Web = () => {
      const [openFaq, setOpenFaq] = useState<number | null>(0);
    
  return (
    <div>
     <HeroSection
  tag = "WEB DEVELOPMENT SERVICES"
  title = "Custom Web Solutions for Growing Businesses"
  description = "We create custom, responsive, and user-friendly websites designed to showcase your brand and drive conversions. From simple landing pages to complex e-commerce platforms, we build web solutions that deliver results."
  primaryBtnText = "Get a Free Quote"
  primaryBtnLink = "#"
  secondaryBtnText = "View Our Work"
  secondaryBtnLink = "#"
  imageSrc = "/landing2-left-top.jpg"
/>
        <BusinessServicesSection/>
        <WebServiceStack/>
        <DevelopmentProcessSection/>

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
        title="Ready to build your website?"
        description="Discuss your web project with us and get a free quote today."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Web