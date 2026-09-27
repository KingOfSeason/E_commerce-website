'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const variants = [
  { label: '40mm', available: true },
  { label: '44mm', available: true },
  { label: '48mm', available: true },
];

const colors = [
  { label: 'Midnight Black', hex: '#1a1a1a', available: true },
  { label: 'Neon Green', hex: '#00FF41', available: true },
  { label: 'Steel Gray', hex: '#6b7280', available: true },
  { label: 'Deep Red', hex: '#7f1d1d', available: false },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} className={`w-4 h-4 ${s <= Math.floor(rating) ? 'text-primary' : 'text-muted'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-semibold text-foreground">{rating}</span>
      <span className="text-sm text-muted-foreground">({reviews.toLocaleString()} reviews)</span>
    </div>
  );
}

export default function ProductInfo() {
  const [selectedVariant, setSelectedVariant] = useState('44mm');
  const [selectedColor, setSelectedColor] = useState('Midnight Black');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
        <span>/</span>
        <span className="text-primary">OmniWatch Pro X</span>
      </div>

      {/* Category + Badge */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="px-2.5 py-1 text-[10px] font-bold text-primary-foreground bg-primary rounded-full">Best Seller</span>
        <span className="px-2.5 py-1 text-[10px] font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full">Smart Watches</span>
        <span className="flex items-center gap-1 text-xs text-primary">
          <Icon name="CheckBadgeIcon" size={14} />
          In Stock
        </span>
      </div>

      {/* Name */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
        OmniWatch Pro X
      </h1>

      {/* Rating */}
      <StarRating rating={4.9} reviews={2847} />

      {/* Price */}
      <div className="flex items-end gap-3">
        <span className="text-4xl font-extrabold text-primary glow-green-text">$299</span>
        <span className="text-xl text-muted-foreground line-through mb-1">$399</span>
        <span className="px-2.5 py-1 text-sm font-bold text-primary-foreground bg-primary rounded-lg mb-1">25% OFF</span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        The OmniWatch Pro X combines military-grade durability with cutting-edge health monitoring. Track your fitness, receive smart notifications, and monitor your biometrics — all from a sleek 1.9" AMOLED display with 14-day battery life.
      </p>

      {/* Key features */}
      <div className="grid grid-cols-2 gap-2">
        {['1.9" AMOLED Display', '14-Day Battery', 'GPS + Heart Rate', 'Water Resistant 5ATM'].map((feat) => (
          <div key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="CheckIcon" size={12} className="text-primary flex-shrink-0" />
            {feat}
          </div>
        ))}
      </div>

      <div className="border-t border-border" />

      {/* Size Variant */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Size: <span className="text-foreground">{selectedVariant}</span>
        </p>
        <div className="flex gap-2">
          {variants.map((v) => (
            <button
              key={v.label}
              onClick={() => v.available && setSelectedVariant(v.label)}
              disabled={!v.available}
              className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-200 ${
                selectedVariant === v.label
                  ? 'border-primary bg-primary/15 text-primary glow-green-sm'
                  : v.available
                  ? 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  : 'border-border text-muted opacity-40 cursor-not-allowed line-through'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Color: <span className="text-foreground">{selectedColor}</span>
        </p>
        <div className="flex gap-2.5">
          {colors.map((c) => (
            <button
              key={c.label}
              onClick={() => c.available && setSelectedColor(c.label)}
              disabled={!c.available}
              title={c.label}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                selectedColor === c.label
                  ? 'border-primary scale-110 glow-green-sm'
                  : c.available
                  ? 'border-border hover:border-primary/50 hover:scale-105' :'border-border opacity-30 cursor-not-allowed'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quantity</p>
        <div className="inline-flex items-center gap-0 glass-card border-accent-glow rounded-xl overflow-hidden">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Decrease quantity"
          >
            <Icon name="MinusIcon" size={16} />
          </button>
          <span className="w-12 h-10 flex items-center justify-center text-sm font-bold text-foreground border-x border-border">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Increase quantity"
          >
            <Icon name="PlusIcon" size={16} />
          </button>
        </div>
      </div>

      <div className="border-t border-border" />

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAddToCart}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold rounded-xl transition-all duration-200 ${
            addedToCart
              ? 'bg-primary/20 text-primary border border-primary glow-green-sm' :'bg-primary text-primary-foreground glow-green hover:bg-accent/90 hover:scale-105'
          }`}
        >
          <Icon name={addedToCart ? 'CheckIcon' : 'ShoppingCartIcon'} size={18} />
          {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
        </button>
        <Link
          href="/"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-foreground border border-border rounded-xl glass-card hover:border-primary/50 hover:text-primary transition-all duration-200"
        >
          <Icon name="BoltIcon" size={18} className="text-primary" />
          Buy Now
        </Link>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: 'TruckIcon', label: 'Free Delivery', sub: 'Orders over $50' },
          { icon: 'ArrowPathIcon', label: '30-Day Returns', sub: 'Hassle-free' },
          { icon: 'ShieldCheckIcon', label: '2-Year Warranty', sub: 'Full coverage' },
        ].map(({ icon, label, sub }) => (
          <div key={label} className="flex flex-col items-center gap-1.5 p-3 glass-card border-accent-glow rounded-xl text-center">
            <Icon name={icon as any} size={18} className="text-primary" />
            <p className="text-[10px] font-semibold text-foreground leading-tight">{label}</p>
            <p className="text-[9px] text-muted-foreground">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}