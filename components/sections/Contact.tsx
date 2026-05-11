'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { Container } from '../ui/Container';
import { FadeIn } from '../animations/FadeIn';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-800"
    >
      <Container size="sm">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            Get in touch
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">
            Let&apos;s build something.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-md">
            I&apos;m open to collaborations, freelance work, and conversations about
            interesting projects.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <FadeIn delay={0.3} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-widest"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-white focus:outline-none text-neutral-900 dark:text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-widest"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-white focus:outline-none text-neutral-900 dark:text-white transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-white focus:outline-none text-neutral-900 dark:text-white resize-none transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'sending' && 'Sending...'}
                {status === 'idle' && (
                  <>
                    Send message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
                {status === 'sent' && 'Message sent ✓'}
                {status === 'error' && 'Error, please try again'}
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.4} className="md:col-span-2">
            <div className="space-y-1">
              <ContactLink
                label="Email"
                href="mailto:hello@wiscod.dev"
                value="hello@wiscod.dev"
              />
              <ContactLink
                label="GitHub"
                href="https://github.com/wiscod"
                value="@wiscod"
              />
              <ContactLink
                label="Twitter"
                href="https://twitter.com/Wiscod_"
                value="@Wiscod_"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function ContactLink({ label, href, value }: { label: string; href: string; value: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between py-4 border-b border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white transition-colors"
    >
      <div>
        <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-1">
          {label}
        </div>
        <div className="text-base text-neutral-900 dark:text-white">{value}</div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
