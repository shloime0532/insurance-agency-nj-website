"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/* ─────────────── NAV ─────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
          >
            <Image
              src="/images/logo.png"
              alt="Insurance Agency NJ"
              width={36}
              height={52}
              className="h-10 sm:h-12 w-auto"
            />
            <span
              className={`font-heading font-bold text-base sm:text-lg leading-tight transition-colors ${
                scrolled ? "text-royal" : "text-white"
              }`}
            >
              Insurance
              <br />
              Agency NJ
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15512734713"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                scrolled ? "text-dark" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-dark font-medium py-2 hover:text-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15512734713"
            className="block bg-orange text-white font-semibold px-5 py-3 rounded-lg text-center hover:bg-orange-dark transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="New Jersey suburban neighborhood"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal/90 via-royal/75 to-royal/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              5.0 Stars on Google
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            New Jersey&apos;s Trusted{" "}
            <span className="text-orange">Insurance</span> Partner
          </h1>

          <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed max-w-lg">
            Independent agency with access to A-rated carriers. We shop dozens
            of companies so you get the best coverage at the lowest price.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+15512734713"
              className="bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:-translate-y-0.5 text-center"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/10 text-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TRUST BAR ─────────────── */
function TrustBar() {
  const items = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      title: "Statewide Coverage",
      desc: "All 21 NJ counties",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
        </svg>
      ),
      title: "Independent Agent",
      desc: "We work for you, not the carrier",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "A-Rated Carriers",
      desc: "Only top-rated companies",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
      ),
      title: "Bilingual Service",
      desc: "English & Spanish",
    },
  ];

  return (
    <section className="bg-silver py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="text-royal">{item.icon}</div>
              <h3 className="font-semibold text-dark text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-gray text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SERVICES ─────────────── */
function Services() {
  const services = [
    {
      title: "Home Insurance",
      desc: "Protect your most valuable asset with comprehensive homeowners coverage. Dwelling, liability, personal property — all under one policy.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      title: "Auto Insurance",
      desc: "From minimum liability to full coverage. Multi-car discounts, roadside assistance, and gap coverage available for every driver.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25m0 0V11.25A2.25 2.25 0 0018.375 9H15l-1.5-3H8.25L6.75 9H5.625a2.25 2.25 0 00-2.25 2.25v3" />
        </svg>
      ),
    },
    {
      title: "Life Insurance",
      desc: "Term, whole, and universal life policies that protect your family's future. Lock in low rates while you're young and healthy.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      title: "Commercial Insurance",
      desc: "General liability, commercial property, BOP, and professional liability. Tailored packages for NJ businesses of every size.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
    },
    {
      title: "Flood Insurance",
      desc: "Don't wait for the next storm. NFIP and private flood options for homes and businesses across every NJ flood zone.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l1.5 1.5L7.5 12m4.5 1.5l1.5 1.5 2.25-3" />
        </svg>
      ),
    },
    {
      title: "Workers Comp",
      desc: "NJ-compliant workers compensation coverage. Protect your employees and your business from workplace injury claims.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3.07 12.9a1.5 1.5 0 002.12 2.12l2.13-2.13zm0 0l1.414-1.414m2.828 2.828l5.1 5.1m0 0l3.25-2.83a1.5 1.5 0 00-2.12-2.12l-2.13 2.13zm0 0l-1.414 1.414M14.12 9.88l-5.1 5.1" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange/10 text-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            What We Cover
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-4">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            From your home to your business, we have the coverage you need — all
            from one trusted local agent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-light-gray border border-silver rounded-2xl p-8 hover:shadow-xl hover:border-orange/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-royal/10 rounded-xl flex items-center justify-center text-royal mb-6 group-hover:bg-orange/10 group-hover:text-orange transition-colors">
                {s.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-3">
                {s.title}
              </h3>
              <p className="text-gray leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ABOUT ─────────────── */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-light-gray scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.png"
                alt="Modern Insurance Agency NJ office"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-white rounded-xl shadow-xl p-5 border border-silver">
              <div className="text-3xl font-bold text-royal">5.0</div>
              <div className="flex gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-orange fill-orange"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm text-gray">Google Reviews</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-royal/10 text-royal font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-6">
              Your Neighbors,{" "}
              <span className="text-royal">Your Insurance Team</span>
            </h2>
            <p className="text-gray text-lg leading-relaxed mb-6">
              Based right here on River Avenue in Lakewood, Insurance Agency NJ
              is an independent agency that puts our clients first. Unlike
              captive agents who only sell one company&apos;s products, we have
              access to dozens of A-rated carriers — which means we can find you
              the best coverage at the most competitive price.
            </p>
            <p className="text-gray text-lg leading-relaxed mb-8">
              Whether you need to protect your home, your vehicle, your family,
              or your business, our experienced team will guide you through every
              option and make sure you never pay more than you should.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "500+", label: "Clients Protected" },
                { num: "20+", label: "Carrier Partners" },
                { num: "100%", label: "Claims Support" },
                { num: "24/7", label: "Emergency Line" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-royal">
                    {stat.num}
                  </div>
                  <div className="text-gray text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── WHY US ─────────────── */
function WhyUs() {
  const cards = [
    {
      title: "We Shop, You Save",
      desc: "As an independent agency, we compare rates from 20+ carriers to find you the lowest price for the best coverage.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
    },
    {
      title: "Claims Advocacy",
      desc: "When you need to file a claim, we fight for you. Our team handles the paperwork and negotiations so you get paid faster.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: "Local & Personal",
      desc: "Walk into our Lakewood office anytime. Talk to a real person who knows your name and understands your coverage needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: "Bundle & Save More",
      desc: "Combine your home, auto, and umbrella policies for multi-policy discounts that can save you hundreds every year.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-royal scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/15 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            The Insurance Agency NJ Difference
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Not all insurance agencies are created equal. Here&apos;s why
            hundreds of New Jersey families trust us with their coverage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-orange/20 rounded-xl flex items-center justify-center text-orange mb-5">
                {card.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-white/75 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA BANNER ─────────────── */
function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-orange to-orange-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Save on Insurance?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          Get a free, no-obligation quote in minutes. Call us now or stop by our
          Lakewood office.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+15512734713"
            className="bg-white text-orange hover:text-orange-dark font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            (551) 273-4713
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/10"
          >
            Find Our Office
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CONTACT ─────────────── */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange/10 text-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-4">
            Visit Us in Lakewood
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Stop by our office, give us a call, or request a quote online. We
            make insurance easy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.8!2d-74.2245!3d40.0835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c18b0e8a97b6e3%3A0x12345!2s1166+River+Ave%2C+Lakewood%2C+NJ+08701!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Insurance Agency NJ location"
            />
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-5 p-6 bg-light-gray rounded-2xl border border-silver">
              <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center text-royal shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-1">Our Office</h3>
                <p className="text-gray">1166 River Ave</p>
                <p className="text-gray">Lakewood, NJ 08701</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 p-6 bg-light-gray rounded-2xl border border-silver">
              <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center text-royal shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-1">Call Us</h3>
                <a
                  href="tel:+15512734713"
                  className="text-royal hover:text-orange transition-colors font-medium text-lg"
                >
                  (551) 273-4713
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5 p-6 bg-light-gray rounded-2xl border border-silver">
              <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center text-royal shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">Office Hours</h3>
                <div className="space-y-1 text-gray">
                  <div className="flex justify-between gap-6">
                    <span>Monday – Thursday</span>
                    <span className="font-medium text-dark">
                      9:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Friday</span>
                    <span className="font-medium text-dark">
                      9:00 AM – 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Saturday – Sunday</span>
                    <span className="font-medium text-dark">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:+15512734713"
              className="block bg-royal hover:bg-royal-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl text-center"
            >
              Call for a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Insurance Agency NJ"
                width={28}
                height={40}
                className="h-10 w-auto opacity-90"
              />
              <span className="font-heading font-bold text-white text-base leading-tight">
                Insurance
                <br />
                Agency NJ
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Independent insurance agency serving Lakewood and all of New
              Jersey. Your coverage, our commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "About", "Why Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/50 hover:text-orange transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-semibold text-white mb-4">Coverage</h4>
            <ul className="space-y-3">
              {[
                "Home Insurance",
                "Auto Insurance",
                "Life Insurance",
                "Commercial",
                "Flood Insurance",
                "Workers Comp",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-orange transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>1166 River Ave</li>
              <li>Lakewood, NJ 08701</li>
              <li>
                <a
                  href="tel:+15512734713"
                  className="hover:text-orange transition-colors"
                >
                  (551) 273-4713
                </a>
              </li>
              <li>Mon–Thu: 9AM–6PM</li>
              <li>Fri: 9AM–2PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Insurance Agency NJ. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs">
            Website by{" "}
            <a
              href="https://maivenai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange transition-colors"
            >
              Maiven
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── PAGE ─────────────── */
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <WhyUs />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
