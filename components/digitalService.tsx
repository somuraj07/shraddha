"use client";

import Link from "next/link";
import {
  CheckCircle,
  Search,
  MousePointerClick,
  Share2,
  Mail,
  FileText,
  BarChart2,
  LucideIcon,
} from "lucide-react";

// --- Types ---
interface Service {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

// --- Data ---
const SERVICES_DATA: Service[] = [
  {
    title: "Search Engine Optimization",
    href: "/marketing/seo",
    icon: Search,
    description:
      "Improve your website's visibility in search results with our data-driven SEO strategies.",
    features: [
      "On-page & technical SEO",
      "High-quality backlinks",
      "Improved search rankings",
    ],
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    href: "/marketing/ppc",
    icon: MousePointerClick,
    description:
      "Generate immediate traffic and leads with targeted PPC campaigns across platforms.",
    features: [
      "Google & Bing Ads",
      "Audience targeting",
      "Maximum ROI optimization",
    ],
  },
  {
    title: "Social Media Marketing",
    href: "/marketing/social",
    icon: Share2,
    description:
      "Build your brand and engage your audience with effective social media strategies.",
    features: [
      "Content creation",
      "Community management",
      "Paid social campaigns",
    ],
  },
  {
    title: "Email Marketing",
    href: "/marketing/email",
    icon: Mail,
    description:
      "Nurture leads and drive conversions with personalized email campaigns.",
    features: [
      "Automated workflows",
      "High conversion emails",
      "Audience segmentation",
    ],
  },
  {
    title: "Content Marketing",
    href: "/marketing/content",
    icon: FileText,
    description:
      "Attract and retain your audience with high-quality, relevant content.",
    features: [
      "Blogs & articles",
      "Infographics & videos",
      "Brand authority building",
    ],
  },
  {
    title: "Analytics & Reporting",
    href: "/marketing/analytics",
    icon: BarChart2,
    description:
      "Make data-driven decisions with detailed analytics and performance reports.",
    features: [
      "KPI tracking",
      "Monthly reports",
      "Actionable insights",
    ],
  },
];

// --- Card ---
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

      {/* spotlight hover */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#F54E02]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* icon */}
      <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#F54E02]/10">
        <Icon className="text-[#F54E02]" size={28} />
      </div>

      {/* title */}
      <h3 className="relative text-xl font-semibold text-black mb-3">
        {service.title}
      </h3>

      {/* description */}
      <p className="relative text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* features */}
      <ul className="relative space-y-3 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-800">
            <CheckCircle size={18} className="text-[#F54E02] mr-2 mt-1" />
            {feature}
          </li>
        ))}
      </ul>

      {/* link */}
      <Link
        href={service.href}
        className="relative text-sm font-medium text-[#F54E02] underline underline-offset-4 group-hover:tracking-wide transition-all"
      >
        Explore Service →
      </Link>
    </div>
  );
};

// --- Section ---
export default function DigitalMarketingServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-3">
            Our Digital Marketing Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive digital strategies tailored to your business goals
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            href="#"
            className="inline-block px-10 py-4 rounded-lg font-semibold text-lg bg-[#F54E02] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Start Your Digital Growth
          </Link>
        </div>

      </div>
    </section>
  );
}
