"use client";
import Link from 'next/link';
import { MouseEventHandler, CSSProperties } from 'react';
import { CheckCircle, Code, Smartphone, BarChart3, Cloud, Layout, ShieldCheck, LucideIcon } from 'lucide-react';

// --- Configuration ---
const BG_DARK: string = '#212529';        
const BRAND_COLOR: string = '#F54E02';    
const HOVER_GRADIENT: string = 'linear-gradient(to right, #F54E02, #FF7530, #F54E02)';    

// --- Type Definition ---
interface Service {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

// --- Data ---
const SERVICES_DATA: Service[] = [
  { title: "Web Development", href: "/webservices", icon: Code, description: "Custom, responsive, and user-friendly websites designed to showcase your brand and drive conversions.", features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization"] },
  { title: "App Development", href: "/appdevelopment", icon: Smartphone, description: "Native and cross-platform mobile applications that engage users and enhance your business operations.", features: ["iOS & Android Apps", "Cross-Platform Solutions", "UI/UX Design", "App Store Optimization"] },
  { title: "Digital Marketing", href: "/digitalmarketing", icon: BarChart3, description: "Strategic digital marketing campaigns designed to increase brand awareness and drive targeted traffic.", features: ["SEO & Content Strategy", "Social Media Marketing", "PPC Advertising", "Analytics & Reporting"] },
  { title: "Cloud Solutions", href: "#", icon: Cloud, description: "Scalable cloud infrastructure and services to optimize your business operations and reduce costs.", features: ["Cloud Migration", "AWS, Azure & Google Cloud", "DevOps Solutions", "Managed Cloud Services"] },
  { title: "UI/UX Design", href: "#", icon: Layout, description: "User-centered design services that create intuitive, engaging digital experiences for your customers.", features: ["User Research", "Wireframing & Prototyping", "Usability Testing", "Design Systems"] },
  { title: "Cybersecurity", href: "#", icon: ShieldCheck, description: "Comprehensive security services to protect your digital assets and ensure business continuity.", features: ["Security Assessments", "Penetration Testing", "Security Monitoring", "Incident Response"] }
];

// --- CTA Button ---
const CtaButtonStyle: CSSProperties = { backgroundColor: BRAND_COLOR, color: 'white' };
const handleCtaButtonHover: MouseEventHandler<HTMLAnchorElement> = (e) => { e.currentTarget.style.backgroundColor = '#FF7530'; };
const handleCtaButtonLeave: MouseEventHandler<HTMLAnchorElement> = (e) => { e.currentTarget.style.backgroundColor = BRAND_COLOR; };

// --- Service Card Component ---
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const Icon = service.icon; 

    return (
        <div className="relative flex flex-col p-8 rounded-lg shadow-xl bg-[#1c1f21] transition-all duration-300 overflow-hidden">
            
            {/* Gradient Border Overlay */}
            <span
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                    padding: '2px',
                    background: 'transparent',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    transition: 'all 0.3s'
                }}
            ></span>

            {/* Inner Card Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                    <Icon size={24} style={{ color: BRAND_COLOR }} className="mr-3" />
                    <h3 className="text-xl font-semibold" style={{ color: BRAND_COLOR }}>
                        {service.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base mb-6 flex-grow leading-relaxed">
                    {service.description}
                </p>

                {/* Features List */}
                <ul className="list-none p-0 mb-6 space-y-3">
                    {service.features.map((feature, index) => (
                        <li 
                            key={index} 
                            className="flex items-start text-white text-base transition-colors duration-300 hover:text-orange-500"
                        >
                            <CheckCircle size={16} className="mt-1 mr-2 flex-shrink-0" style={{ color: BRAND_COLOR }} />
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Learn More Button */}
                <Link
                    href={service.href}
                    className="mt-auto px-6 py-3 text-center text-sm font-medium rounded-md border transition-all duration-200"
                    style={{ borderColor: BRAND_COLOR, color: BRAND_COLOR }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND_COLOR; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = BRAND_COLOR; }}
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

// --- Main Section Component ---
export default function BusinessServicesSection() {
  return (
    <section className="py-24" style={{ backgroundColor: BG_DARK }}>
        <div className="container mx-auto px-8 lg:px-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold text-white mb-2">Business Services</h2>
                <p className="text-gray-400 text-lg">Professional technology solutions to help your business grow</p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {SERVICES_DATA.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>

            {/* Footer CTA Button */}
            <div className="text-center mt-16">
                <Link
                    href="#"
                    className="inline-block px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={CtaButtonStyle}
                    onMouseEnter={handleCtaButtonHover}
                    onMouseLeave={handleCtaButtonLeave}
                >
                    Request a Free Consultation
                </Link>
            </div>
        </div>
    </section>
  );
}
