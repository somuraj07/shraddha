"use client";

import Link from "next/link";
import {
  CheckCircle,
  Code,
  Smartphone,
  Layout,
  Search,
  Wrench,
  LucideIcon,
} from "lucide-react";

// --- Types ---
interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

// --- Data (CONTENT REPLACED ONLY) ---
const SERVICES_DATA: Service[] = [
  {
    title: "Custom Website Development",
    icon: Code,
    description:
      "Tailored website solutions built to match your brand, deliver performance, and support future growth.",
    features: [
      "Custom brand-focused design",
      "Clean and fast-coded build",
      "Fully scalable project structure",
    ],
  },
  {
    title: "E-Commerce Solutions",
    icon: Smartphone,
    description:
      "High-performance online stores designed to boost sales and enhance customer shopping experiences.",
    features: [
      "Secure payment gateway setup",
      "Advanced inventory control system",
      "Smooth customer account handling",
    ],
  },
  {
    title: "Responsive Web Design",
    icon: Layout,
    description:
      "Fully responsive websites that work smoothly across desktops, tablets, and mobile devices.",
    features: [
      "Mobile-first responsive layout",
      "Consistent user-friendly experience",
      "Optimized fast-loading pages",
    ],
  },
  {
    title: "CMS Integration",
    icon: Layout,
    description:
      "Content management systems that give you full control with simple, user-friendly admin tools.",
    features: [
      "WordPress and custom CMS setups",
      "Easy-to-use admin interface",
      "Detailed training and guidance",
    ],
  },
  {
    title: "SEO Optimization",
    icon: Search,
    description:
      "Optimized websites designed to increase visibility, rank higher, and attract more organic traffic.",
    features: [
      "SEO-friendly code structure",
      "Fast and stable performance",
      "Mobile-optimized ranking boost",
    ],
  },
  {
    title: "Website Maintenance",
    icon: Wrench,
    description:
      "Ongoing updates, security improvements, and performance optimization to keep your site running smoothly.",
    features: [
      "Regular security patch updates",
      "Continuous performance monitoring",
      "Content and feature improvements",
    ],
  },
];


// --- Service Card ---
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative bg-white shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex items-center mb-5">
        <Icon size={30} className="text-[#F54E02] mr-3" />
        <h3 className="text-xl font-semibold text-black">
          {service.title}
        </h3>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>

      <ul className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-800 transition-all duration-300 hover:translate-x-2">
            <CheckCircle size={18} className="text-[#F54E02] mr-2 mt-1" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Section ---
export default function BusinessServicesSection() {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-2rem mx-auto px-6 lg:px-18">

        {/* Header (CONTENT REPLACED) */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-600 w-14 h-[3px] mb-4"></span>
          <h2 className="text-4xl font-bold text-black mb-3">
            Our Web Development Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive web solutions tailored to your specific business needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-semibold text-lg bg-[#F54E02] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Request a Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
