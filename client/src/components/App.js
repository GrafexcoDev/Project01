import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import PortfolioGrid from './components/PortfolioGrid.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import PixelOverlay from './dev/PixelOverlay.jsx';

function About() {
  return (
    <section id="about" className="section">
      <div className="text-center mb-10">
        <h2 className="font-display">About GrafexcoDev</h2>
        <p className="mt-2 text-[rgb(var(--mutedText))] max-w-3xl mx-auto">We're a passionate team committed to creating exceptional web experiences that drive business growth and user engagement.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="font-display text-2xl mb-2">Our Mission</h3>
          <p className="text-[rgb(var(--mutedText))]">To empower businesses with cutting‑edge web solutions that look stunning and deliver measurable results.</p>
          <ul className="mt-5 space-y-3">
            <li>✔ Expert team with 5+ years of experience</li>
            <li>✔ Agile development methodology</li>
            <li>✔ 24/7 support and maintenance</li>
            <li>✔ 100% satisfaction guarantee</li>
          </ul>
        </div>
        <div className="card overflow-hidden"><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="Team at work" className="w-full h-80 object-cover"/></div>
      </div>
    </section>
  );
}

function Values(){
  const items=[
    {title:'Creativity',desc:'We deliver innovative solutions that stand out in the digital landscape.',icon:'💡'},
    {title:'Reliability',desc:'Count on us for high‑quality, on‑time delivery—every single time.',icon:'🛡️'},
    {title:'Communication',desc:'Clear and transparent updates keep you in the loop at all times.',icon:'💬'}
  ]
  return (
    <section className="section">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i=> (
          <div key={i.title} className="card p-6">
            <div className="icon-badge bg-brand-100 mb-3">{i.icon}</div>
            <h3 className="font-display text-2xl mb-2">{i.title}</h3>
            <p className="text-[rgb(var(--mutedText))]">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA(){
  return (
    <section className="section">
      <div className="gradient-cta text-white rounded-[var(--r-xl)] px-8 py-12 text-center shadow">
        <h3 className="font-display text-3xl">Ready to Get Started?</h3>
        <p className="opacity-90 mt-2">Let's discuss your project and see how we can bring your vision to life.</p>
        <a href="#contact" className="inline-block mt-6 rounded-full bg-white text-[rgb(var(--text))] px-5 py-3">Start Your Project</a>
      </div>
    </section>
  );
}

function Process(){
  const steps=[
    {title:'Discovery',desc:'We start by understanding your goals, audience, and requirements.'},
    {title:'Planning',desc:'We create project plans, wireframes, and prototypes to set expectations.'},
    {title:'Development',desc:'We bring the design to life using best practices and modern tech.'},
    {title:'Launch',desc:'After testing and QA, we launch and provide ongoing support.'},
  ];
  return (
    <section className="section">
      <h2 className="font-display text-center mb-10">Our Process</h2>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        {steps.map((s,i)=> (
          <div key={s.title} className="card p-6">
            <div className="icon-badge bg-brand-100 mb-3 text-xl">{i+1}</div>
            <h3 className="font-display text-xl">{s.title}</h3>
            <p className="text-[rgb(var(--mutedText))] mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechStack(){
  const icons=['React','Node.js','JavaScript','Python','HTML5','CSS3','GitHub','AWS','Docker','Figma','MongoDB','PostgreSQL'];
  return (
    <section className="section">
      <div className="text-center mb-8">
        <h2 className="font-display">Technologies We Use</h2>
        <p className="mt-2 text-[rgb(var(--mutedText))] max-w-2xl mx-auto">We leverage cutting‑edge technologies and frameworks to build robust, scalable, and future‑proof solutions.</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {icons.map(i=> (<div key={i} className="card p-4 text-center">{i}</div>))}
      </div>
      <div className="mt-8 card p-6 text-center">
        <h3 className="font-display text-2xl">Always Learning, Always Innovating</h3>
        <p className="text-[rgb(var(--mutedText))] mt-2">We stay ahead of the curve by continuously learning new technologies and best practices.</p>
      </div>
    </section>
  );
}

export default function App(){
  return (
    <div id="top">
      <NavBar/>
      <main id="main">
        <Hero/>
        <About/>
        <Values/>
        <Services/>
        <CTA/>
        <Process/>
        <PortfolioGrid/>
        <Testimonials/>
        <TechStack/>
        <ContactForm/>
      </main>
      <Footer/>
      {/* Remove PixelOverlay in production */}
      <PixelOverlay/>
    </div>
  );
}