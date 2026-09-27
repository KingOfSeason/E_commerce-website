'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
{ icon: 'CpuChipIcon', label: 'Products', value: '2,400+' },
{ icon: 'StarIcon', label: 'Rating', value: '4.9 / 5' },
{ icon: 'BoltIcon', label: 'Fast Delivery', value: '24–48h' },
{ icon: 'ShieldCheckIcon', label: 'Satisfaction', value: '99.2%' }];


export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const mx = (clientX / innerWidth - 0.5) * 30;
      const my = (clientY / innerHeight - 0.5) * 20;
      const blob = el.querySelector('.hero-blob') as HTMLElement;
      if (blob) {
        blob.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_164dac7cd-1772160765994.png"
          alt="Dark futuristic circuit board technology with glowing green elements and electronic components"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw" />
        
        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 grid-bg animate-grid-shift opacity-60" />

      {/* Blob accent */}
      <div
        className="hero-blob absolute top-1/3 right-1/4 w-96 h-96 blob-accent z-0 transition-transform duration-700 ease-out" />
      
      <div className="absolute top-20 left-1/4 w-64 h-64 blob-accent z-0 opacity-50" />

      {/* HUD Ring decoration */}
      <div className="absolute top-24 right-8 w-32 h-32 md:w-48 md:h-48 hud-ring rounded-full animate-rotate-ring z-0 opacity-40" />
      <div className="absolute top-32 right-16 w-16 h-16 md:w-24 md:h-24 hud-ring rounded-full opacity-20 z-0" style={{ animationDirection: 'reverse', animationDuration: '5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full glass-card border-accent-glow text-primary text-xs font-semibold tracking-wider uppercase animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Omnitrix Technology Store
          </div>

          {/* Headline */}
          <h1 className="text-hero-xl font-extrabold text-foreground tracking-tight mb-6 animate-fade-in-up delay-100">
            Gear Up for the{' '}
            <span className="text-primary glow-green-text">Future</span>
            <br />
            of Tech.
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg animate-fade-in-up delay-200">
            Premium smart gadgets, gaming accessories, and cutting-edge tech — all in one futuristic store. Activate your upgrade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-primary-foreground bg-primary rounded-xl glow-green hover:bg-accent/90 hover:scale-105 transition-all duration-200">
              
              <Icon name="BoltIcon" size={18} />
              Shop Now
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-primary border border-primary/30 rounded-xl glass-card hover:border-primary hover:glow-green-sm transition-all duration-200">
              
              Browse Deals
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Stats Strip */}
      <div className="absolute bottom-8 left-4 right-4 z-20">
        <div className="max-w-4xl mx-auto glass-card border-accent-glow rounded-2xl px-4 py-4 md:px-8 md:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-border">
            {stats.map((stat, i) =>
            <div key={i} className="flex items-center gap-3 md:px-6 first:pl-0 last:pr-0">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={stat.icon as any} size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  <p className="text-base font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}