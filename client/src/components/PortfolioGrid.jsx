import React from 'react';
import { fetchJSON } from '../lib/api.js';

export default function PortfolioGrid() {
  const [items, setItems] = React.useState([]);
  React.useEffect(()=>{ fetchJSON('/api/projects').then(setItems).catch(console.error); },[]);
  return (
    <section id="portfolio" className="section">
      <div className="text-center mb-10">
        <h2 className="font-display">Our Portfolio</h2>
        <p className="mt-2 text-[rgb(var(--mutedText))] max-w-2xl mx-auto">Explore our recent projects and see how we help businesses achieve their digital goals.</p>
        <div className="mt-4 flex gap-3 justify-center">
          <button className="pill">All Projects</button>
          <button className="pill">Web Apps</button>
          <button className="pill">E‑commerce</button>
          <button className="pill">Branding</button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((p)=> (
          <article key={p.slug} className="card overflow-hidden">
            <img src={p.coverUrl} alt="" className="w-full h-52 object-cover"/>
            <div className="p-4"><h3 className="font-display text-xl">{p.title}</h3></div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8"><a className="pill" href="#portfolio">View All Projects</a></div>
    </section>
  );
}
