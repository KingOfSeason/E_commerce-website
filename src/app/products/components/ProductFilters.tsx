'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const categories = ['All', 'Smart Watches', 'Gaming', 'Audio', 'Sneakers', 'Backpacks', 'Gadgets', 'Accessories'];
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $150', min: 50, max: 150 },
  { label: '$150 – $300', min: 150, max: 300 },
  { label: '$300+', min: 300, max: Infinity },
];
const ratings = [5, 4, 3];

interface Props {
  selectedCategory: string;
  selectedPrice: string;
  selectedRating: number;
  onCategoryChange: (c: string) => void;
  onPriceChange: (p: string) => void;
  onRatingChange: (r: number) => void;
  onReset: () => void;
}

export default function ProductFilters({
  selectedCategory,
  selectedPrice,
  selectedRating,
  onCategoryChange,
  onPriceChange,
  onRatingChange,
  onReset,
}: Props) {
  const [catOpen, setCatOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [ratingOpen, setRatingOpen] = useState(true);

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="glass-card border-accent-glow rounded-2xl p-5 sticky top-24">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Filters</h3>
          <button
            onClick={onReset}
            className="text-xs text-primary hover:text-accent transition-colors font-medium"
          >
            Reset All
          </button>
        </div>

        {/* Category */}
        <div className="mb-5 pb-5 border-b border-border">
          <button
            onClick={() => setCatOpen(!catOpen)}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</span>
            <Icon name={catOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={14} className="text-muted-foreground" />
          </button>
          {catOpen && (
            <div className="flex flex-col gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-primary/15 text-primary border border-primary/30 font-semibold' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-5 pb-5 border-b border-border">
          <button
            onClick={() => setPriceOpen(!priceOpen)}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Price Range</span>
            <Icon name={priceOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={14} className="text-muted-foreground" />
          </button>
          {priceOpen && (
            <div className="flex flex-col gap-1.5">
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => onPriceChange(range.label)}
                  className={`text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                    selectedPrice === range.label
                      ? 'bg-primary/15 text-primary border border-primary/30 font-semibold' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Rating */}
        <div>
          <button
            onClick={() => setRatingOpen(!ratingOpen)}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Min Rating</span>
            <Icon name={ratingOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={14} className="text-muted-foreground" />
          </button>
          {ratingOpen && (
            <div className="flex flex-col gap-1.5">
              {ratings.map((r) => (
                <button
                  key={r}
                  onClick={() => onRatingChange(r)}
                  className={`flex items-center gap-2 text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                    selectedRating === r
                      ? 'bg-primary/15 border border-primary/30' :'hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className={`w-3 h-3 ${s <= r ? 'text-primary' : 'text-muted'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className={`text-xs ${selectedRating === r ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                    {r}+ Stars
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}