"use client";

import Link from "next/link";
import { useState } from "react";

const BRAND_COLOR = "#D94500";
const BG_COLOR = "#000000";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
];

export default function ExactNavbarAligned() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className="fixed top-0 z-50 w-full"
        style={{ backgroundColor: BG_COLOR }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6 md:px-10 lg:px-16">
          
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

          {/* DESKTOP MENU (right aligned) */}
          <div className="ml-auto hidden items-center space-x-12 md:flex">
            <ul className="flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white text-base font-normal transition-colors duration-200 hover:text-[#D94500]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="rounded px-6 py-2 text-base font-normal text-white transition hover:opacity-90"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Contact Now
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (right side) */}
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
        <ul className="space-y-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-lg text-white hover:text-[#D94500]"
              >
                {link.name}
              </Link>
            </li>
          ))}

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
