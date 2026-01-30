"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AXSFTWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const scrollPos = window.scrollY + 120;
      let current = '';
      for (const sec of sections) {
        const top = sec.offsetTop;
        if (scrollPos >= top) {
          current = `#${sec.id}`;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">

      {/* Navbar */}
      <motion.header
        className={`sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800 transition-all ${scrolled ? 'shadow-lg bg-slate-950/95' : ''}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={`container mx-auto px-6 flex justify-between items-center transition-all ${scrolled ? 'py-2' : 'py-4'}`}>
          <motion.h1
            className="text-2xl font-bold tracking-wide cursor-pointer"
            whileHover={{ scale: 1.06, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileOpen(false); }}
          >
            AXSFT
          </motion.h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 text-slate-300 items-center">
            {[
              {href: "#services", label: "Services"},
              {href: "#about", label: "About"},
              {href: "#process", label: "Process"},
              {href: "#contact", label: "Contact"},
            ].map(item => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative py-1 ${active === item.href ? 'text-white font-semibold' : 'text-slate-300'}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.15 }}
                onClick={() => setMobileOpen(false)}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  className="absolute left-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded"
                  layout
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  animate={{ width: active === item.href ? '100%' : '0%' }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-4 p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          </button>

          {/* Mobile backdrop (click to close) */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: mobileOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
            onClick={() => setMobileOpen(false)}
            aria-hidden={!mobileOpen}
          />

          {/* Mobile nav drawer */}
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: mobileOpen ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur z-50 md:hidden p-6"
            role="dialog"
            aria-modal={mobileOpen}
          >
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">Menu</div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              {[
                {href: "#services", label: "Services"},
                {href: "#about", label: "About"},
                {href: "#process", label: "Process"},
                {href: "#contact", label: "Contact"},
              ].map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-lg ${active === item.href ? 'text-white font-semibold' : 'text-slate-300'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>

        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-28 text-center relative overflow-hidden">
        {/* Animated background orbs - Layer 1 */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Additional orbs - Layer 2 */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [-50, 50, -50]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ 
            scale: [1, 0.8, 1],
            y: [50, -50, 50]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Glowing rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-indigo-500/30 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-500/20 rounded-full"
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating particles - More particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-40"
            animate={{
              y: [Math.random() * 100, -Math.random() * 500],
              x: [Math.random() * 50, Math.random() * 50],
              opacity: [0.3, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Content */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold relative z-10"
        >
          AXSFT
        </motion.h1>
        <p className="mt-4 text-2xl text-indigo-300 relative z-10">
          Software Development & Digital Solutions Company
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg relative z-10">
          AXSFT is a Hyderabad-based software development startup delivering
          high-quality websites, web applications, mobile applications, and
          custom software solutions to businesses across India and globally.
        </p>
        <div className="mt-10 flex justify-center gap-6 relative z-10">
          <Button className="px-8 py-6 text-lg">
            Get a Quote
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg">
            View Services
          </Button>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-black/30 py-20">
        <p className="text-center text-3xl italic text-indigo-300 max-w-4xl mx-auto">
          "We don’t just build software — we build solutions that grow your business."
        </p>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title: "Website Design & Development", displayTitle: "Website  Design & Development", desc: "Modern, SEO-friendly business websites.", icon: "🌐"},
            {title: "Web Applications", displayTitle: "Web  Applications", desc: "Secure and scalable web platforms.", icon: "💼"},
            {title: "Mobile Applications", displayTitle: "Mobile  Applications", desc: "Android & iOS app development.", icon: "📱"},
            {title: "Custom Software", displayTitle: "Custom  Software", desc: "Tailored solutions for businesses.", icon: "⚙️"},
            {title: "Project Development", displayTitle: "Project  Development", desc: "Startup & enterprise projects.", icon: "🚀"},
            {title: "Maintenance & Support", displayTitle: "Maintenance  Support", desc: "Long-term software support.", icon: "🛠️"}
          ].map(({title, displayTitle, desc, icon}, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full group cursor-pointer">
                <CardContent className="flex flex-col items-center text-center p-4">
                  <div className="text-5xl mb-3 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-indigo-400 transition-colors">{displayTitle}</h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors flex-grow">{desc}</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 mt-3 rounded w-full"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-indigo-950/40 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center"
          >
            <h2 className="text-4xl font-semibold mb-12">About AXSFT</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-slate-300 text-lg leading-relaxed"
              >
                AXSFT is a software development company based in Hyderabad, India,
                helping businesses transform ideas into scalable digital products.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="grid md:grid-cols-3 gap-8 mt-12"
              >
                {[
                  {title: "Expertise", desc: "2+ years in web & mobile development"},
                  {title: "Quality", desc: "100% dedicated to client satisfaction"},
                  {title: "Innovation", desc: "Cutting-edge tech & best practices"}
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 hover:border-indigo-600 transition-colors"
                  >
                    <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold text-center mb-16">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {step: "Requirement Analysis", desc: "Understanding your needs and project goals", icon: "🎯"},
            {step: "Design & Planning", desc: "Creating detailed plans and mockups", icon: "📐"},
            {step: "Development", desc: "Building robust and scalable solutions", icon: "💻"},
            {step: "Delivery & Support", desc: "Launch and ongoing maintenance", icon: "🚀"}
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-1 bg-gradient-to-r from-indigo-600 to-transparent" />
                )}
                
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 h-full hover:border-indigo-600 hover:bg-slate-900/80 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-600/20">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-6xl mb-4 h-16 flex items-center justify-center">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.step}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black/40 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center"
          >
            <h2 className="text-4xl font-semibold mb-16">Contact  AXSFT</h2>
            
            <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
              {[
                {icon: "✉️", label: "Email", value: "axsft01@gmail.com", link: "mailto:axsft01@gmail.com"},
                {icon: "📱", label: "Phone", value: "+91 62818 7094", link: "tel:+91628187094"},
                {icon: "📍", label: "Location", value: "Hyderabad, India", link: "#"}
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-indigo-600 hover:bg-slate-900/80 transition-all duration-300 h-full">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-indigo-400 group-hover:text-indigo-300">{item.label}</h3>
                    <p className="text-slate-300 group-hover:text-white transition-colors font-medium">{item.value}</p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 mt-6 rounded mx-auto"
                    />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-12"
            >
              <p className="text-slate-400 text-lg">We'd love to hear from you!</p>
              <p className="text-slate-500 mt-2">Get in touch with us for your next project</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © {new Date().getFullYear()} AXSFT. All rights reserved.
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91628187094"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl"
      >
        💬
      </a>
    </div>
  );
}
