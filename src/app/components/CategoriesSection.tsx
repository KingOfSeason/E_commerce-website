'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const categories = [
{
  name: 'Smart Watches',
  count: 48,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14071888e-1772305512168.png",
  alt: 'Modern smartwatch with black band displaying fitness data on dark background with blue ambient lighting',
  span: 'col-span-1 row-span-1'
},
{
  name: 'Gaming Gear',
  count: 124,
  image: "https://images.unsplash.com/photo-1562503407-baca05b00c59",
  alt: 'RGB gaming keyboard and mouse setup with colorful lighting on dark desk in dimly lit room',
  span: 'col-span-1 sm:col-span-2 row-span-1'
},
{
  name: 'Audio',
  count: 67,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1119295e3-1765076790006.png",
  alt: 'Premium wireless over-ear headphones in black with cushioned earpads on clean dark surface',
  span: 'col-span-1 row-span-1'
},
{
  name: 'Sneakers',
  count: 89,
  image: "https://images.unsplash.com/photo-1606890657264-e5a411daf9ef",
  alt: 'Bright red Nike sneaker with bold design floating against clean white background',
  span: 'col-span-1 row-span-1'
},
{
  name: 'Backpacks',
  count: 35,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12367e09c-1766973296429.png",
  alt: 'Sleek urban backpack in black with multiple compartments on minimalist background',
  span: 'col-span-1 row-span-1'
}];


export default function CategoriesSection() {
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
    <section ref={sectionRef} className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 blob-accent opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 reveal-on-scroll">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block">
            — Categories
          </span>
          <h2 className="text-section-lg font-extrabold text-foreground tracking-tight">
            Shop by Category
          </h2>
        </div>

        {/* BENTO GRID AUDIT:
           Array has 5 cards: [SmartWatches, GamingGear, Audio, Sneakers, Backpacks]
           Row 1 (3-col): [col-1: SmartWatches cs-1] [col-2+3: GamingGear cs-2]
           Row 2 (3-col): [col-1: Audio cs-1] [col-2: Sneakers cs-1] [col-3: Backpacks cs-1]
           Placed 5/5 cards ✓
          */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[220px]">
          {/* Card 1: SmartWatches cs-1 */}
          <Link href="/products" className="reveal-on-scroll group relative overflow-hidden rounded-2xl glass-card border-accent-glow hover:border-primary/50 hover:glow-green-sm transition-all duration-300">
            <AppImage
              src={categories?.[0]?.image}
              alt={categories?.[0]?.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-base font-bold text-foreground">{categories?.[0]?.name}</h3>
              <p className="text-xs text-primary mt-0.5">{categories?.[0]?.count} products</p>
            </div>
          </Link>

          {/* Card 2: GamingGear cs-2 */}
          <Link href="/products" className="reveal-on-scroll sm:col-span-2 group relative overflow-hidden rounded-2xl glass-card border-accent-glow hover:border-primary/50 hover:glow-green-sm transition-all duration-300" style={{ transitionDelay: '80ms' }}>
            <AppImage
              src={categories?.[1]?.image}
              alt={categories?.[1]?.alt}
              fill
              sizes="(max-width: 640px) 100vw, 66vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-foreground">{categories?.[1]?.name}</h3>
              <p className="text-xs text-primary mt-0.5">{categories?.[1]?.count} products</p>
            </div>
          </Link>

          {/* Card 3: Audio cs-1 */}
          <Link href="/products" className="reveal-on-scroll group relative overflow-hidden rounded-2xl glass-card border-accent-glow hover:border-primary/50 hover:glow-green-sm transition-all duration-300" style={{ transitionDelay: '160ms' }}>
            <AppImage
              src={categories?.[2]?.image}
              alt={categories?.[2]?.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-base font-bold text-foreground">{categories?.[2]?.name}</h3>
              <p className="text-xs text-primary mt-0.5">{categories?.[2]?.count} products</p>
            </div>
          </Link>

          {/* Card 4: Sneakers cs-1 */}
          <Link href="/products" className="reveal-on-scroll group relative overflow-hidden rounded-2xl glass-card border-accent-glow hover:border-primary/50 hover:glow-green-sm transition-all duration-300" style={{ transitionDelay: '240ms' }}>
            <AppImage
              src={categories?.[3]?.image}
              alt={categories?.[3]?.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-base font-bold text-foreground">{categories?.[3]?.name}</h3>
              <p className="text-xs text-primary mt-0.5">{categories?.[3]?.count} products</p>
            </div>
          </Link>

          {/* Card 5: Backpacks cs-1 */}
          <Link href="/products" className="reveal-on-scroll group relative overflow-hidden rounded-2xl glass-card border-accent-glow hover:border-primary/50 hover:glow-green-sm transition-all duration-300" style={{ transitionDelay: '320ms' }}>
            <AppImage
              src={categories?.[4]?.image}
              alt={categories?.[4]?.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-base font-bold text-foreground">{categories?.[4]?.name}</h3>
              <p className="text-xs text-primary mt-0.5">{categories?.[4]?.count} products</p>
            </div>
          </Link>
        </div>
      </div>
    </section>);

}