'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] blob-accent opacity-15" />
      </div>

      {/* HUD ring decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 hud-ring rounded-full opacity-20 animate-rotate-ring" />
      <div className="absolute bottom-8 right-8 w-16 h-16 hud-ring rounded-full opacity-15" style={{ animationDirection: 'reverse' }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full glass-card border-accent-glow text-primary text-xs font-semibold tracking-wider uppercase">
          <Icon name="BellIcon" size={12} className="text-primary" />
          Stay Connected
        </div>

        <h2 className="text-section-lg font-extrabold text-foreground tracking-tight mb-4">
          Get Exclusive Drops &{' '}
          <span className="text-primary glow-green-text">Deals</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          Join 48,000+ subscribers. Get early access to new products, flash sales, and Omnitrix-exclusive offers — delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 px-6 py-4 glass-card border-accent-glow rounded-xl">
            <span className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
              <Icon name="CheckIcon" size={16} className="text-primary" />
            </span>
            <p className="text-foreground font-semibold">You&apos;re on the list! Welcome to OmniStore.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 text-sm text-foreground bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-bold text-primary-foreground bg-primary rounded-xl glow-green hover:bg-accent/90 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 flex-shrink-0"
            >
              <Icon name="BoltIcon" size={16} />
              Activate
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe anytime. Privacy guaranteed.</p>
      </div>
    </section>
  );
}