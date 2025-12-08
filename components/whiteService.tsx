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
  href: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

// --- Data (CONTENT REPLACED ONLY) ---
const SERVICES_DATA: Service[] = [
  {
    title: "Custom Website Development",
    href: "/webservices/custom-website-development",
    icon: Code,
    description:
      "Bespoke website solutions designed to meet your specific business requirements. We build custom websites that stand out from the crowd.",
    features: [
      "Unique design tailored to your brand identity",
      "Clean, efficient code for optimal performance",
      "Scalable architecture for future growth",
    ],
  },
  {
    title: "E-Commerce Solutions",
    href: "/webservices/ecommerce-solutions",
    icon: Smartphone,
    description:
      "Powerful online stores that drive sales and provide exceptional shopping experiences for your customers.",
    features: [
      "Secure payment gateway integration",
      "Inventory management systems",
      "Customer account management",
    ],
  },
  {
    title: "Responsive Web Design",
    href: "/webservices/responsive-web-design",
    icon: Layout,
    description:
      "Websites that look and function perfectly on all devices, from desktops to smartphones and tablets.",
    features: [
      "Mobile-first design approach",
      "Consistent user experience across all devices",
      "Fast loading times on mobile networks",
    ],
  },
  {
    title: "CMS Integration",
    href: "/webservices/cms-integration",
    icon: Layout,
    description:
      "Easy-to-use content management systems that give you full control over your website's content.",
    features: [
      "WordPress, Drupal, and custom CMS solutions",
      "User-friendly admin interfaces",
      "Training and support for your team",
    ],
  },
  {
    title: "SEO Optimization",
    href: "/webservices/seo-optimization",
    icon: Search,
    description:
      "Websites built with search engines in mind to help your business rank higher in search results.",
    features: [
      "SEO-friendly code structure",
      "Fast page loading speeds",
      "Mobile optimization for better rankings",
    ],
  },
  {
    title: "Website Maintenance",
    href: "/webservices/website-maintenance",
    icon: Wrench,
    description:
      "Ongoing support and maintenance to keep your website secure, up-to-date, and performing at its best.",
    features: [
      "Regular security updates and patches",
      "Performance monitoring and optimization",
      "Content updates and feature additions",
    ],
  },
];

// --- Service Card ---
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
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
          <li key={index} className="flex items-start text-gray-800">
            <CheckCircle size={18} className="text-[#F54E02] mr-2 mt-1" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className="inline-block mt-auto px-6 py-3 text-sm font-medium rounded-md border border-[#F54E02] text-[#F54E02] transition-all duration-300 hover:bg-[#F54E02] hover:text-white"
      >
        Learn More
      </Link>
    </div>
  );
};

// --- Main Section ---
export default function BusinessServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header (CONTENT REPLACED) */}
        <div className="text-center mb-16">
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
            href="#"
            className="inline-block px-10 py-4 rounded-lg font-semibold text-lg bg-[#F54E02] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Request a Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
