import React from 'react';

const services = [
  { title: 'Web Development', icon:'</>', desc: 'Custom websites and web apps using modern stacks for performance and scalability.', bullets:['React & Next.js','Node.js & Express','Database Integration'] },
  { title: 'UI/UX Design', icon:'🎨', desc: 'User-centered design that turns visitors into customers.', bullets:['User Research','Wireframing & Prototyping','Visual Design'] },
  { title: 'Branding', icon:'✒️', desc: 'Identity systems that make your brand stand out.', bullets:['Logo Design','Brand Guidelines','Marketing Materials'] },
  { title: 'E-commerce Solutions', icon:'🛒', desc: 'Seamless shopping experiences & secure payments.', bullets:['Shopify & WooCommerce','Payment Integration','Inventory Management'] }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="text-center mb-10">
        <h2 className="font-display">Our Services</h2>
        <p className="mt-2 text-[rgb(var(--mutedText))] max-w-2xl mx-auto">From concept to launch, we provide comprehensive digital solutions tailored to your business needs and goals.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((s)=> (
          <div key={s.title} className={`card p-6`}>
            <div className="icon-badge bg-brand-100 text-brand-700 mb-4">{s.icon}</div>
            <h3 className="font-display text-2xl mb-2">{s.title}</h3>
            <p className="text-[rgb(var(--mutedText))] mb-3">{s.desc}</p>
            <ul className="space-y-1 text-sm text-[rgb(var(--mutedText))]">
              {s.bullets.map(b=> <li key={b}>✔ {b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

