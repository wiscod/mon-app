'use client';

import Link from 'next/link';
import { Mail, Globe, X } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Have a project in mind? Let's talk!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
          </form>

          {/* Contact Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Other ways to connect
              </h3>
              <div className="space-y-4">
                <Link
                  href="mailto:hello@wiscod.dev"
                  className="flex items-center gap-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">
                      Email
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-xs">
                      hello@wiscod.dev
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://github.com/wiscod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Globe className="w-5 h-5 text-slate-900 dark:text-white" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">
                      GitHub
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-xs">
                      github.com/wiscod
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://twitter.com/Wiscod_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">
                      Twitter
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-xs">
                      @Wiscod_
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
