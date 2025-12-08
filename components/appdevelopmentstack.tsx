"use client";

import Image from "next/image";

export default function AppDevelopmentStack() {
  const platforms = [
    {
      name: "iOS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/1200px-IOS_logo.svg.png",
    },
    {
      name: "Android",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png",
    },
    {
      name: "React Native",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      name: "Flutter",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png",
    },
    {
      name: "Swift",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png",
    },
    {
      name: "Kotlin",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png",
    },
  ];

  const techs = [
    "Node.js",
    "Firebase",
    "AWS",
    "MongoDB",
    "GraphQL",
    "REST API",
    "Push Notifications",
    "In-App Purchases",
    "AR/VR",
  ];

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-30">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#ff4500] w-12 h-[3px]"></span>

          <h2 className="mt-3 text-3xl md:text-4xl font-fredoka">
            Platforms & <span className="font-bold">Technologies</span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            We use the latest technologies to build high-quality mobile
            applications
          </p>
        </div>

        {/* Platform Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {platforms.map((p) => (
            <div key={p.name} className="flex flex-col items-center">
              <div
                className="
                  w-[70px] h-[70px] bg-white rounded-2xl shadow-md 
                  flex items-center justify-center mb-3
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                "
              >
                <Image
                  src={p.icon}
                  alt={p.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-gray-800 text-sm">{p.name}</p>
            </div>
          ))}
        </div>

        {/* Tech Pills */}
        <div className="mt-10 text-center">
          {techs.map((t) => (
            <span
              key={t}
              className="
                inline-block px-4 py-2 rounded-full text-sm font-medium text-gray-700
                mx-2 my-1
                transition duration-300
                hover:bg-[#ff4500] hover:text-white hover:-translate-y-1
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
