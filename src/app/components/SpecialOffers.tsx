'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const offers = [
{
  id: '1',
  title: 'Flash Deal',
  name: 'OmniDrone 4K Pro',
  description: 'Capture every moment from above with 4K ultra-HD camera, 30-min flight time, and obstacle avoidance.',
  price: 349,
  originalPrice: 599,
  discount: 42,
  image: "https://images.unsplash.com/photo-1710770563074-6d9cc0d3e338",
  alt: 'Sleek black laptop on dark surface with glowing screen displaying code in dim room',
  expiresIn: '08:42:17',
  badge: '42% OFF'
},
{
  id: '2',
  title: 'Weekend Special',
  name: 'HyperGear RGB Keyboard',
  description: 'Mechanical switches, per-key RGB, 100% anti-ghosting. The competitive edge you need.',
  price: 89,
  originalPrice: 149,
  discount: 40,
  image: "https://images.unsplash.com/photo-1636059151106-5471f93f1dc9",
  alt: 'Illuminated RGB mechanical keyboard with colorful backlighting on dark gaming desk surface',
  expiresIn: '23:15:04',
  badge: '40% OFF'
}];


export default function SpecialOffers() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    );
    sectionRef?.current?.querySelectorAll('.reveal-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blob-accent opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 reveal-on-scroll">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block">
              — Limited Time
            </span>
            <h2 className="text-section-lg font-extrabold text-foreground tracking-tight">
              Special Offers
            </h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group">
            All Deals
            <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offers?.map((offer, i) =>
          <div
            key={offer?.id}
            className="reveal-on-scroll glass-card border-accent-glow rounded-2xl overflow-hidden group hover:border-primary/50 hover:glow-green-sm transition-all duration-300"
            style={{ transitionDelay: `${i * 100}ms` }}>
            
              <div className="flex flex-col sm:flex-row h-full">
                {/* Image */}
                <div className="relative sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                  <AppImage
                  src={offer?.image}
                  alt={offer?.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" />
                
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 sm:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80 sm:hidden block" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-[10px] font-bold text-primary-foreground bg-primary rounded-full glow-green-sm">
                      {offer?.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{offer?.title}</p>
                    <h3 className="text-lg font-bold text-foreground mb-2">{offer?.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{offer?.description}</p>
                  </div>

                  {/* Timer */}
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="ClockIcon" size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground">Ends in:</span>
                    <span className="text-xs font-bold text-primary font-mono animate-pulse-glow">{offer?.expiresIn}</span>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-extrabold text-primary">${offer?.price}</span>
                      <span className="ml-2 text-sm text-muted-foreground line-through">${offer?.originalPrice}</span>
                    </div>
                    <Link
                    href="/product-detail"
                    className="px-4 py-2 text-xs font-bold text-primary-foreground bg-primary rounded-lg glow-green-sm hover:bg-accent/90 hover:scale-105 transition-all duration-200">
                    
                      Grab Deal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}