"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const BRAND_COLOR = "#D94500";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutt" },
  { name: "Team", href: "/team" },
];

const SERVICES = [
  { name: "Web Development", href: "/web" },
  { name: "App Development", href: "/appDevelop" },
  { name: "Digital Marketing", href: "/digital" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ SCROLL DETECTION
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300
          ${scrolled ? "bg-black shadow-md" : "bg-transparent"}
        `}
      >
        <div className="mx-auto flex h-20 max-w-8xl items-center px-6 md:px-10 lg:px-16">
          
          {/* LOGO */}
          <Link href="/">
            <img
              src="/shraddha-logo-navbar.svg"
              alt="Logo"
              className="h-9 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="ml-auto hidden items-center space-x-12 md:flex">
            <ul className="flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white transition hover:text-[#D94500]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* SERVICES DROPDOWN */}
              <li
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-white transition hover:text-[#D94500]">
                  Our Services
                </button>

                {servicesOpen && (
                  <div className="absolute top-full mt-2 w-56 overflow-hidden rounded bg-black shadow-lg">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-white hover:bg-[#D94500]"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="rounded px-6 py-2 text-white transition hover:opacity-90"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Contact Now
            </Link>
          </div>

          {/* MOBILE BTN */}
          <button
            onClick={() => setOpen(true)}
            className="ml-auto flex flex-col gap-1 md:hidden"
          >
            <span className="h-0.5 w-7 bg-white" />
            <span className="h-0.5 w-7 bg-white" />
            <span className="h-0.5 w-7 bg-white" />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-black px-6 py-8 transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="mb-10 flex items-center justify-between">
          <img src="/shraddha-logo-navbar.svg" className="h-8" />
          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-white"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-6 text-lg text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}

          <li className="border-t border-white/20 pt-4">
            <p className="mb-3 font-semibold">Our Services</p>
            <div className="space-y-3 pl-2">
              {SERVICES.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#D94500]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </li>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 block rounded bg-[#D94500] px-4 py-2 text-center"
          >
            Contact Now
          </Link>
        </ul>
      </aside>

      {/* OFFSET */}
      <div className="h-20" />
    </>
  );
}
