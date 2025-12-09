"use client";

import React from "react";
import { Target, Eye, Check } from "lucide-react";

const BRAND_COLOR = "#F54E02";

const missionPoints = [
  "Providing cutting-edge technical curriculum aligned with industry demands",
  "Creating a supportive learning environment that encourages growth and innovation",
  "Connecting talented individuals with employment opportunities in leading companies",
];

const visionPoints = [
  "Becoming the preferred training partner for both students and corporations",
  "Expanding our reach to provide quality education across all of India",
  "Building a community of lifelong learners and technology innovators",
];

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-white" id="mission-vision">
      <div className="container mx-auto px-34 lg:px-18 ">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="w-12 h-1 mx-auto mb-3"
            style={{ backgroundColor: BRAND_COLOR }}
          />
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            Guiding principles that define our approach to education and success
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Mission Card */}
          <div className="bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-6">
              <Target className="text-[#F54E02] w-10 h-10" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-900 mb-4">
              To democratize quality technical education by making it accessible, affordable,
              and directly relevant to industry needs. We aim to transform students into
              industry-ready professionals through practical skill development and
              personalized career guidance.
            </p>
            <ul className="space-y-3">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1  text-[#F54E02] flex-shrink-0" />
                  <span className="text-gray-900">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="text-[#F54E02] w-10 h-10" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-900 mb-4">
              To be recognized as India's leading platform for technical education and
              professional development, known for producing skilled professionals who drive
              innovation and excellence in the technology sector globally.
            </p>
            <ul className="space-y-3">
              {visionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 text-[#F54E02] flex-shrink-0" />
                  <span className="text-gray-900">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
