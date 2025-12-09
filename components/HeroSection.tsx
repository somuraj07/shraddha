"use client";

import Image from "next/image";

export default function HeroSection({
    tag = "ABOUT US",
    title = "Empowering Tech Careers Through Quality Education",
    description = "Shraddha is India's premier EdTech platform, bridging the gap between education and industry requirements through comprehensive training and placement services.",
    primaryBtnText = "Our Mission",
    primaryBtnLink = "#",
    secondaryBtnText = "Our Leadership",
    secondaryBtnLink = "#",
    imageSrc = "/aboutus-section1-img-new.png"
}) {
    return (
        <section className="w-full bg-black py-20 px-40">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">

                {/* LEFT CONTENT */}
                <div className="flex-1 text-white">
                    <p className="text-orange-500 font-semibold tracking-wide mb-3">
                        {tag}
                    </p>

                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        {title}
                    </h1>

                    <p className="text-white/70 mb-8 max-w-lg">
                        {description}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4">
                        <a
                            href={primaryBtnLink}
                            className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {primaryBtnText}
                        </a>

                        <a
                            href={secondaryBtnLink}
                            className="px-6 py-3 border border-white text-white font-medium rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
                        >
                            {secondaryBtnText}
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src={imageSrc}
                        alt="Hero Section Image"
                        width={550}
                        height={400}
                        className="rounded-2xl object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
