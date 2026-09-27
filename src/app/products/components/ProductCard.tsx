import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  alt: string;
  category: string;
  discount: number;
  badge?: string;
  inStock: boolean;
}

interface Props {
  product: Product;
  index: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3 h-3 ${s <= Math.floor(rating) ? 'text-primary' : 'text-muted'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product, index }: Props) {
  return (
    <Link
      href="/product-detail"
      className="reveal-on-scroll group glass-card border-accent-glow rounded-2xl overflow-hidden hover:border-primary/40 hover:glow-green-sm transition-all duration-300 flex flex-col"
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <AppImage
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="px-2 py-0.5 text-[10px] font-bold text-primary-foreground bg-primary rounded-full">
              {product.badge}
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-0.5 text-[10px] font-bold text-foreground bg-muted rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {product.discount > 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 text-[10px] font-bold text-foreground bg-muted/90 rounded-full border border-border">
              -{product.discount}%
            </span>
          </div>
        )}

        {/* Wishlist button */}
        <button
          className="absolute top-3 right-3 w-8 h-8 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:border-primary/50 hover:text-primary text-muted-foreground"
          style={{ top: product.discount > 0 ? '2.5rem' : '0.75rem' }}
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
        >
          <Icon name="HeartIcon" size={14} />
        </button>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            className="w-full py-2 text-xs font-bold text-primary-foreground bg-primary rounded-lg glow-green-sm hover:bg-accent/90 transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{product.category}</p>
        <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-[10px] text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-center gap-2 mt-auto pt-2">
          <span className="text-base font-bold text-primary">${product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}