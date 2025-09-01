import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--bg)/0.6)]">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-display text-xl">GrafexcoDev</a>
        <button className="md:hidden" aria-expanded={open} aria-controls="menu" onClick={()=>setOpen(!open)}>☰</button>
        <ul id="menu" className={`md:flex gap-6 items-center ${open? 'block' : 'hidden md:flex'}`}>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><ThemeToggle/></li>
          <li><a href="#contact" className="ml-2 rounded-full gradient-cta text-white px-4 py-2 shadow-sm">Get Started</a></li>
        </ul>
      </nav>
    </header>
  );
}
