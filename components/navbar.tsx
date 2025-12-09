"use client";

import Link from "next/link";
import { useState } from "react";

const BRAND_COLOR = "#D94500";
const BG_COLOR = "#000000";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutt" },
];

const SERVICES = [
  { name: "Web Development", href: "/web" },
  { name: "App Development", href: "/appDevelop" },
  { name: "Digital Marketing", href: "/digital" },
];

export default function ExactNavbarAligned() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className="fixed top-0 z-50 w-full"
        style={{ backgroundColor: BG_COLOR }}
      >
        <div className="mx-auto flex h-20 max-w-8xl items-center px-6 md:px-10 lg:px-16">
          
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/shraddha-logo-navbar.svg"
                alt="Shraddha Logo"
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="ml-auto hidden items-center space-x-12 md:flex">
            <ul className="flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white text-base font-normal hover:text-[#D94500] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Our Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-white text-base font-normal hover:text-[#D94500] transition">
                  Our Services
                </button>

                {servicesOpen && (
                  <div className="absolute top-full mt-2 w-55 rounded bg-black shadow-lg overflow-hidden">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-white hover:bg-[#D94500] transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="rounded px-6 py-2 text-base font-normal text-white hover:opacity-90"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Contact Now
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="ml-auto flex flex-col gap-1 md:hidden"
            onClick={() => setOpen(true)}
          >
            <span className="h-0.5 w-7 bg-white"></span>
            <span className="h-0.5 w-7 bg-white"></span>
            <span className="h-0.5 w-7 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* ===== MOBILE OVERLAY ===== */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== MOBILE SIDEBAR ===== */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-black px-6 py-8 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="mb-10 flex items-center justify-between">
          <img
            src="/shraddha-logo-navbar.svg"
            alt="Shraddha Logo"
            className="h-8"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-white"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-6 text-white text-lg">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}

          {/* Mobile Services */}
          <li className="pt-4 border-t border-white/20">
            <p className="mb-3 font-semibold">Our Services</p>
            <div className="space-y-3 pl-2">
              {SERVICES.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={() => setOpen(false)}
                  className="block text-white hover:text-[#D94500]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </li>

          {/* Contact Button */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 block rounded px-4 py-2 text-center text-white"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            Contact Now
          </Link>
        </ul>
      </aside>

      {/* OFFSET FOR FIXED NAV */}
      <div className="h-20" />
    </>
  );
}
