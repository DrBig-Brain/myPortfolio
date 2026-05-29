    import React, { useState } from 'react';
    import axios from 'axios';
    import "../styles.css";

    export const Cta = () => {
      const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
      const [submitting, setSubmitting] = useState(false);
      const [done, setDone] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
          await axios.post('https://myportfolio-tawv.onrender.com/api/submit', formData);
          setDone(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
          setTimeout(() => setDone(false), 3000);
        } catch (err) {
          alert('Error submitting form');
        } finally {
          setSubmitting(false);
        }
      };

      return (
          <section id="cta" className="min-h-200 w-full bg-background flex flex-col md:flex-row">
            {/* Left decorative area (2/3) */}
            <div className="w-full md:w-2/3 relative overflow-hidden flex flex-col justify-center px-6 md:px-16 scroll-mt-28 py-8 md:py-0">
            <svg className="absolute -right-40 -top-28 opacity-20" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <circle cx="300" cy="300" r="280" stroke="var(--color-action-primary)" strokeWidth="2"/>
              <rect x="50" y="420" width="500" height="100" rx="12" stroke="var(--color-action-primary)" strokeWidth="1" />
            </svg>

            <h1 className="text-2xl sm:text-4xl md:text-7xl text-action-primary font-bold leading-tight">What I can do</h1>
            <h2 className="text-xl sm:text-2xl md:text-5xl text-action-secondary mt-4 mb-6">Contribute, collaborate or just say hi.</h2>
            <p className="text-base sm:text-lg md:text-3xl text-action-secondary max-w-xl">I build production-ready web apps and ML systems. Use this form to offer work, ask about a project, request feedback, or just chit-chat, I respond to reasonable messages quickly.</p>

            <div className="mt-10 flex gap-8 items-start">
              <div>
                <p className="text-action-primary text-3xl font-semibold">Offer</p>
                <p className="text-action-secondary text-lg max-w-md">Hiring, contracting, or project proposals — include budget & timeline.</p>
              </div>

              <div>
                <p className="text-action-primary text-3xl font-semibold">Ask</p>
                <p className="text-action-secondary text-lg max-w-md">Questions on tech choices, implementations, or case studies.</p>
              </div>
            </div>
          </div>

          {/* Right form area (1/3) */}
          <aside className="w-full md:w-1/3 flex items-center justify-center p-6 md:p-8">
            <div className="w-full max-w-md bg-background-secondary border border-action-primary/20 rounded-2xl p-6 md:p-8 shadow-md">
              <h2 className="text-center text-2xl md:text-5xl text-action-primary mb-6">Get in Touch</h2>

              <form onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 mb-3 bg-transparent border border-action-primary/30 rounded-md text-action-secondary placeholder:opacity-60 outline-none focus:ring-2 focus:ring-action-primary"
                />

                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 mb-3 bg-transparent border border-action-primary/30 rounded-md text-action-secondary placeholder:opacity-60 outline-none focus:ring-2 focus:ring-action-primary"
                />

                <label className="sr-only" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 mb-3 bg-transparent border border-action-primary/30 rounded-md text-action-secondary placeholder:opacity-60 outline-none focus:ring-2 focus:ring-action-primary"
                />

                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                  rows="5"
                  className="w-full px-4 py-3 mb-4 bg-transparent border border-action-primary/30 rounded-md text-action-secondary placeholder:opacity-60 font-sans outline-none focus:ring-2 focus:ring-action-primary"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 rounded-xl text-black font-semibold ${submitting ? 'bg-action-primary/50 cursor-not-allowed' : 'bg-action-primary hover:bg-action-primary/90'}`}
                >
                  {submitting ? 'Sending...' : 'Submit'}
                </button>

                {done && (
                  <p className="text-center mt-4 text-action-primary text-sm">Thanks! We'll be in touch.</p>
                )}
              </form>
            </div>
          </aside>
        </section>
      );
    };
