'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const products = [
{
  id: '1',
  name: 'OmniWatch Pro X',
  price: 299,
  originalPrice: 399,
  rating: 4.9,
  reviews: 2847,
  badge: 'Best Seller',
  image: "https://images.unsplash.com/photo-1676904674033-f0b5f12696af",
  alt: 'Premium smart watch with dark metallic band on dark background with subtle green accent lighting',
  category: 'Smart Watches',
  discount: 25
},
{
  id: '2',
  name: 'NexGen Gaming Headset',
  price: 149,
  originalPrice: 199,
  rating: 4.8,
  reviews: 1923,
  badge: 'Hot Deal',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d5ff1a26-1770408083454.png",
  alt: 'Professional gaming headphones with sleek black design on dark studio background',
  category: 'Gaming',
  discount: 25
},
{
  id: '3',
  name: 'AirPods Quantum',
  price: 189,
  originalPrice: 249,
  rating: 4.7,
  reviews: 3412,
  badge: 'New',
  image: "https://images.unsplash.com/photo-1674008748851-70daaabfda53",
  alt: 'White wireless earbuds in charging case on clean dark surface with soft lighting',
  category: 'Audio',
  discount: 24
},
{
  id: '4',
  name: 'TechRunner Sneakers',
  price: 220,
  originalPrice: 280,
  rating: 4.6,
  reviews: 891,
  badge: 'Trending',
  image: "https://images.unsplash.com/photo-1606890657264-e5a411daf9ef",
  alt: 'Bright red Nike sneaker with bold design floating against clean white background',
  category: 'Footwear',
  discount: 21
}];


function StarRating({ rating }: {rating: number;}) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) =>
      <svg key={s} className={`w-3 h-3 ${s <= Math.floor(rating) ? 'text-primary' : 'text-muted'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </div>);

}

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 blob-accent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 reveal-on-scroll">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block">
              — Featured Collection
            </span>
            <h2 className="text-section-lg font-extrabold text-foreground tracking-tight">
              Top Picks This Week
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group">
            
            View All Products
            <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid — Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) =>
          <Link
            key={product.id}
            href="/product-detail"
            className="reveal-on-scroll group glass-card rounded-2xl overflow-hidden hover:border-primary/40 hover:glow-green-sm transition-all duration-300 cursor-pointer flex flex-col"
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <AppImage
                src={product.image}
                alt={product.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700" />
              
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 text-[10px] font-bold text-primary-foreground bg-primary rounded-full">
                    {product.badge}
                  </span>
                </div>
                {/* Discount */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-[10px] font-bold text-foreground bg-muted rounded-full border border-border">
                    -{product.discount}%
                  </span>
                </div>
                {/* Quick add overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-2 text-xs font-bold text-primary-foreground bg-primary rounded-lg glow-green-sm hover:bg-accent/90 transition-colors">
                    Quick Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{product.category}</p>
                <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <StarRating rating={product.rating} />
                  <span className="text-[10px] text-muted-foreground">({product.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <span className="text-base font-bold text-primary">${product.price}</span>
                  <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}