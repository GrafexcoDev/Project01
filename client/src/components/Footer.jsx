import React from 'react';
export default function Footer(){
  return (
    <footer className="mt-24 bg-[#0b1220] text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-display text-xl text-white">GrafexcoDev</div>
          <p className="mt-3 text-white/70">We build web solutions that work. Transforming ideas into digital experiences that drive growth and success.</p>
          <div className="mt-4 flex gap-3">🐦 in  ◎</div>
        </div>
        <div>
          <div className="font-medium text-white">Quick Links</div>
          <ul className="mt-3 space-y-2">
            <li><a href="#top" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-white">Services</div>
          <ul className="mt-3 space-y-2">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>E‑commerce Solutions</li>
            <li>Branding</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-white">Contact info</div>
          <ul className="mt-3 space-y-2">
            <li>📧 hello@grafexcodev.com</li>
            <li>📞 +1 (555) 123‑4567</li>
            <li>📍 123 Tech Street, Digital City, DC 12345</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <span>© {new Date().getFullYear()} GrafexcoDev. All rights reserved.</span>
          <div className="flex gap-4"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Policy</a></div>
        </div>
      </div>
    </footer>
  );
}
