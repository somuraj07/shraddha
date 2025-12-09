"use client";

import Link from "next/link";

interface ContactPageProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ContactPage: React.FC<ContactPageProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-20 bg-[#F54E02]">
      <div className="container mx-auto px-18">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-6">
          {/* Left 3 parts: Text */}
          <div className="md:col-span-3 text-white">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>

          {/* Right 1 part: Button */}
          <div className="flex justify-start md:justify-end">
            <Link
              href={buttonLink}
              className="bg-white text-[#F54E02] font-semibold px-8 py-3 rounded-lg shadow hover:opacity-90 transition"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
