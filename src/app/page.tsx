"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const brand = {
  bg: "bg-[#0d1117]",
  panel: "bg-[#111827]",
  text: "text-slate-200",
  subtext: "text-slate-400",
  accent: "#2AA8FF",
  accent2: "#00D28F",
};

function Logo({ size = 48, wordmark = true }: { size?: number; wordmark?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Axess logo">
      <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="axessGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={brand.accent} />
            <stop offset="100%" stopColor={brand.accent2} />
          </linearGradient>
        </defs>
        <path d="M10 12 L28 30 M36 38 L54 56" stroke="url(#axessGrad)" strokeWidth="8" strokeLinecap="round"/>
        <path d="M54 12 L36 30 M28 38 L10 56" stroke="url(#axessGrad)" strokeWidth="8" strokeLinecap="round"/>
        <circle cx="32" cy="34" r="6" fill="white" />
        <circle cx="32" cy="34" r="4" fill={brand.accent} />
      </svg>
      {wordmark && (
        <span className="font-semibold tracking-[0.15em] text-xl" style={{ color: brand.accent }}>
          AXESS
        </span>
      )}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className={`sticky top-0 z-40 ${brand.panel} bg-opacity-80 backdrop-blur border-b border-slate-800`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo size={36} />
          <button className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-700 text-slate-200"
            aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <ul className="hidden sm:flex items-center gap-8 text-sm text-slate-300">
            <li><a href="#platform" className="hover:text-white">Platform</a></li>
            <li><a href="#hubs" className="hover:text-white">Hubs</a></li>
            <li><a href="#fleet" className="hover:text-white">Fleet</a></li>
            <li><a href="#partners" className="hover:text-white">Partners</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        {open && (
          <ul className="sm:hidden grid gap-4 pb-6 text-slate-300">
            {["Platform","Hubs","Fleet","Partners","Contact"].map((label) => (
              <li key={label}><a href={`#${label.toLowerCase()}`}>{label}</a></li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className={`${brand.bg} ${brand.text} pt-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Logo size={72} />
          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold leading-tight">
            The hub-and-fleet platform for <span className="text-white">autonomous mobility</span>
          </h1>
          <p className={`mt-4 max-w-xl ${brand.subtext}`}>
            Axess orchestrates AV fleets and hubs as a unified network—delivering safe rides, efficient logistics, and inclusive access across every axis of movement.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#platform" className="rounded-xl px-5 py-3 font-medium border border-slate-700 hover:border-slate-500">Explore the platform</a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className={`${brand.panel} rounded-2xl p-6 border border-slate-800 shadow-2xl`}>
            <h3 className="font-medium">City Network Overview</h3>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[{k:"Active Vehicles",v:"1,240"},{k:"Avg ETA",v:"3.8 min"},{k:"Energy/km",v:"0.12 kWh"}].map(({k,v})=>(
                <div key={k} className="rounded-xl border border-slate-800 p-4 text-center">
                  <div className="text-sm text-slate-400">{k}</div>
                  <div className="text-2xl font-semibold text-white">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { title: "Precision Platform", desc: "Telematics, dispatch, and autonomy orchestration across every axis." },
    { title: "Accessible by Design", desc: "Hubs and vehicles meet inclusive standards with kerb-level boarding." },
    { title: "Infrastructure-Grade", desc: "Bankable uptime SLAs, modular hubs, and grid-integrated charging." },
  ];
  return (
    <section id="platform" className={`${brand.bg} ${brand.text} py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">A platform built for tech, people, and cities</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map(({title,desc})=>(
            <div key={title} className={`${brand.panel} rounded-2xl p-6 border border-slate-800`}>
              <h3 className="font-medium text-lg">{title}</h3>
              <p className={`mt-3 ${brand.subtext}`}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hubs() {
  const hubs = [
    { city:"Downtown Interchange", kpi:"540 rides/hr" },
    { city:"Airport AX-01", kpi:"-18% dwell time" },
    { city:"Campus West Gate", kpi:"+22 NPS" },
  ];
  return (
    <section id="hubs" className={`${brand.bg} ${brand.text} py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Modular AV hubs</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {hubs.map(h=>(
            <div key={h.city} className={`${brand.panel} rounded-2xl p-6 border border-slate-800`}>
              <div className="flex justify-between">
                <h3 className="font-medium">{h.city}</h3>
                <span className="text-xs px-2 py-1 rounded-full border border-slate-700" style={{color:brand.accent}}>KPI {h.kpi}</span>
              </div>
              <div className="mt-4 h-24 border border-slate-800 rounded-xl bg-slate-900" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const vehicles = [
    { name:"AX-Urban", range:"280 km", seats:4, use:"City rides" },
    { name:"AX-Transit", range:"360 km", seats:10, use:"Shuttle & campus" },
    { name:"AX-Cargo", range:"300 km", seats:0, use:"Last-mile logistics" },
  ];
  return (
    <section id="fleet" className={`${brand.bg} ${brand.text} py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Fleet portfolio</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {vehicles.map(v=>(
            <div key={v.name} className={`${brand.panel} rounded-2xl p-6 border border-slate-800`}>
              <div className="flex justify-between"><h3 className="font-medium">{v.name}</h3><Logo size={20} wordmark={false}/></div>
              <div className="mt-4 h-20 border border-slate-800 rounded-xl bg-slate-900"/>
              <dl className="mt-4 grid grid-cols-3 text-sm">
                <div><dt className="text-slate-400">Range</dt><dd className="font-medium">{v.range}</dd></div>
                <div><dt className="text-slate-400">Seats</dt><dd className="font-medium">{v.seats}</dd></div>
                <div><dt className="text-slate-400">Use</dt><dd className="font-medium">{v.use}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className={`${brand.bg} ${brand.text} py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Partner ecosystem</h2>
        <p className={`mt-2 ${brand.subtext}`}>We collaborate with municipalities, utilities, OEMs, and developers to deliver autonomy that works on day one.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {["CITY","UTILITY","CAMPUS","DEVELOPER","OEM","INSURER"].map(l=>(
            <div key={l} className="rounded-xl border border-slate-800 p-4 text-center text-slate-400">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={`${brand.bg} ${brand.text} py-16`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Contact Us</h2>
        <p className={`mt-3 ${brand.subtext}`}>
          We’d love to hear from you. Reach out to learn more about Axess and how we can support your mobility initiatives.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="mailto:info@axess.xyz"
            className="inline-block rounded-xl px-6 py-3 font-medium text-black"
            style={{ background: brand.accent }}
          >
            Email us at info@axess.xyz
          </a>
          <p className="text-slate-300">📍 HQ: Miami, FL</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={`${brand.panel} ${brand.text} border-t border-slate-800`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div><Logo size={32}/><p className={`mt-3 ${brand.subtext}`}>Axess unifies fleets and hubs into a resilient, accessible mobility network.</p></div>
        <div><h4 className="font-medium">Company</h4><ul className="mt-3 space-y-2 text-sm"><li><a href="#">About</a></li><li><a href="#">Careers</a></li></ul></div>
        <div><h4 className="font-medium">Solutions</h4><ul className="mt-3 space-y-2 text-sm"><li><a href="#platform">Platform</a></li><li><a href="#fleet">Fleet</a></li></ul></div>
        <div><h4 className="font-medium">Contact</h4><ul className="mt-3 space-y-2 text-sm"><li><a href="#contact">Get in touch</a></li></ul></div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Axess Mobility, Inc. All rights reserved.</div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className={`${brand.bg} min-h-screen font-sans`}>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Hubs />
        <Fleet />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
