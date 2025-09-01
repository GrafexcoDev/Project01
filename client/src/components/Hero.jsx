import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="section pt-20" aria-labelledby="hero-title">
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div>
          <motion.h1 id="hero-title" initial={{opacity:0, y: 20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="font-display">
            We Build <span className="gradient-text">Web Solutions</span> That Work
          </motion.h1>
          <p className="mt-4 max-w-xl text-[rgb(var(--mutedText))]">GrafexcoDev helps startups and businesses grow with stunning websites & apps that drive results and exceed expectations.</p>
          <div className="mt-8 flex gap-4">
            <a href="#portfolio" className="rounded-xl bg-brand-500 text-white px-5 py-3 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500">Our Work</a>
            <a href="#contact" className="rounded-xl border border-[rgb(var(--border))] px-5 py-3 bg-white">Get in Touch</a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div><div className="text-2xl font-semibold">50+</div><div className="text-[rgb(var(--mutedText))] text-sm">Projects Done</div></div>
            <div><div className="text-2xl font-semibold">98%</div><div className="text-[rgb(var(--mutedText))] text-sm">Client Satisfaction</div></div>
            <div><div className="text-2xl font-semibold">5+</div><div className="text-[rgb(var(--mutedText))] text-sm">Years Experience</div></div>
          </div>
        </div>
        <div className="relative">
          <div className="card overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" alt="Hero visual" className="w-full h-[360px] object-cover"/>
          </div>
          <div className="absolute -left-4 top-6 icon-badge bg-brand-500 text-white">📣</div>
          <div className="absolute -right-6 bottom-8 icon-badge bg-[rgb(255,193,58)] text-white">{`</>`}</div>
        </div>
      </div>
    </section>
  );
}
