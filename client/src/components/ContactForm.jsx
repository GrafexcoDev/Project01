import React from 'react';
import { fetchJSON } from '../lib/api.js';

export default function ContactForm() {
  const [state, setState] = React.useState({ first:'', last:'', email:'', phone:'', type:'', budget:'', details:''});
  const [ok, setOk] = React.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault(); setOk(false);
    try {
      const message = `Name: ${state.first} ${state.last}
Email: ${state.email}
Phone: ${state.phone}
Type: ${state.type}
Budget: ${state.budget}
Details: ${state.details}`;
      await fetchJSON('/api/contact', { method: 'POST', body: JSON.stringify({ name: `${state.first} ${state.last}`.trim(), email: state.email, message }) });
      setOk(true); setState({ first:'', last:'', email:'', phone:'', type:'', budget:'', details:''});
    } catch(e) { alert('Failed to send.'); }
  };
  return (
    <section id="contact" className="section">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-[#0f172a] text-white rounded-[var(--r-xl)] p-8">
          <h2 className="font-display">Let’s Build Something Amazing Together</h2>
          <p className="text-white/70 mt-3">Ready to transform your digital presence? Get in touch and let’s discuss how we can bring your vision to life.</p>
          <ul className="mt-8 space-y-4">
            <li>📧 hello@grafexcodev.com</li>
            <li>📞 +1 (555) 123‑4567</li>
            <li>📍 123 Tech Street, Digital City, DC 12345</li>
          </ul>
          <div className="mt-6 flex gap-3 text-white/80">
            <a href="#">🐦</a><a href="#">in</a><a href="#"></a><a href="#">◎</a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="card p-6 grid gap-4" aria-label="Contact form">
          {ok && <div className="mb-2 rounded-lg bg-brand-100 px-4 py-3 text-brand-700">Thanks! We’ll get back to you shortly.</div>}
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1"><span>First Name</span><input required value={state.first} onChange={e=>setState({...state, first:e.target.value})} className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 bg-transparent"/></label>
            <label className="grid gap-1"><span>Last Name</span><input value={state.last} onChange={e=>setState({...state, last:e.target.value})} className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 bg-transparent"/></label>
          </div>
          <label className="grid gap-1"><span>Email Address</span><input required type="email" value={state.email} onChange={e=>setState({...state, email:e.target.value})} className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 bg-transparent"/></label>
          <label className="grid gap-1"><span>Phone Number</span><input value={state.phone} onChange={e=>setState({...state, phone:e.target.value})} className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 bg-transparent"/></label>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1"><span>Project Type</span>
              <select value={state.type} onChange={e=>setState({...state, type:e.target.value})} className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 bg-transparent">
                <option value="">Select a service...</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Branding</option>
                <option>E‑commerce</option>
              </select>
            </label>
            <label className="grid gap-1"><span>Project Budget</span>
              <select value={state.budget} onChange={e=>setState({...state, budget:e.target.value})} className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 bg-transparent">
                <option value="">Select budget range...</option>
                <option>$1k — $5k</option>
                <option>$5k — $15k</option>
                <option>$15k — $50k</option>
                <option>$50k+</option>
              </select>
            </label>
          </div>
          <label className="grid gap-1"><span>Project Details</span><textarea rows="6" value={state.details} onChange={e=>setState({...state, details:e.target.value})} className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 bg-transparent"/></label>
          <button className="justify-self-start rounded-xl gradient-cta text-white px-5 py-3 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-brand-500">Send Message</button>
        </form>
      </div>
    </section>
  );
}

