import React from 'react';
import { fetchJSON } from '../lib/api.js';

export default function Testimonials() {
  const [items, setItems] = React.useState([]);
  React.useEffect(()=>{ fetchJSON('/api/testimonials').then(setItems).catch(console.error); },[]);
  const stars = '★★★★★';
  return (
    <section id="testimonials" className="section">
      <div className="text-center mb-10">
        <h2 className="font-display">What Our Clients Say</h2>
        <p className="mt-2 text-[rgb(var(--mutedText))] max-w-2xl mx-auto">Don’t just take our word for it. Here’s what our clients say about working with GrafexcoDev.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.concat(items).slice(0,6).map((t, i)=> (
          <figure key={i} className="card p-6">
            <figcaption className="font-medium">{t.name} <span className="text-[rgb(var(--mutedText))]">— {t.company}</span></figcaption>
            <div className="mt-2 text-yellow-400" aria-label={`${5} out of 5 stars`}>{stars}</div>
            <p className="mt-3">“{t.quote}”</p>
          </figure>
        ))}
      </div>
      <div className="text-center mt-6 text-[rgb(var(--mutedText))]">4.9/5 — Based on 50+ reviews</div>
    </section>
  );
}
