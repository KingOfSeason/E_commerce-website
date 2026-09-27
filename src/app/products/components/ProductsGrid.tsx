'use client';
import React, { useState, useEffect, useRef } from 'react';
import ProductCard, { Product } from './ProductCard';
import ProductFilters from './ProductFilters';
import Icon from '@/components/ui/AppIcon';

const allProducts: Product[] = [
{ id: '1', name: 'OmniWatch Pro X', price: 299, originalPrice: 399, rating: 4.9, reviews: 2847, image: "https://images.unsplash.com/photo-1676904674033-f0b5f12696af", alt: 'Premium smart watch with dark metallic band on dark background with subtle green accent lighting', category: 'Smart Watches', discount: 25, badge: 'Best Seller', inStock: true },
{ id: '2', name: 'NexGen Gaming Headset', price: 149, originalPrice: 199, rating: 4.8, reviews: 1923, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d5ff1a26-1770408083454.png", alt: 'Professional gaming headphones with sleek black design on dark studio background', category: 'Gaming', discount: 25, badge: 'Hot Deal', inStock: true },
{ id: '3', name: 'AirPods Quantum', price: 189, originalPrice: 249, rating: 4.7, reviews: 3412, image: "https://images.unsplash.com/photo-1674008748851-70daaabfda53", alt: 'White wireless earbuds in charging case on clean dark surface with soft lighting', category: 'Audio', discount: 24, badge: 'New', inStock: true },
{ id: '4', name: 'TechRunner Sneakers', price: 220, originalPrice: 280, rating: 4.6, reviews: 891, image: "https://images.unsplash.com/photo-1606890657264-e5a411daf9ef", alt: 'Bright red Nike sneaker with bold design floating against clean white background', category: 'Sneakers', discount: 21, badge: 'Trending', inStock: true },
{ id: '5', name: 'OmniPack Urban X', price: 89, originalPrice: 120, rating: 4.5, reviews: 654, image: "https://img.rocket.new/generatedImages/rocket_gen_img_12367e09c-1766973296429.png", alt: 'Sleek urban backpack in black with multiple compartments on minimalist background', category: 'Backpacks', discount: 26, inStock: true },
{ id: '6', name: 'HyperGear RGB Keyboard', price: 89, originalPrice: 149, rating: 4.7, reviews: 2103, image: "https://images.unsplash.com/photo-1636059151106-5471f93f1dc9", alt: 'Illuminated RGB mechanical keyboard with colorful backlighting on dark gaming desk surface', category: 'Gaming', discount: 40, inStock: true },
{ id: '7', name: 'OmniWatch Lite', price: 149, originalPrice: 199, rating: 4.4, reviews: 1205, image: "https://images.unsplash.com/photo-1727174659002-400dbe827980", alt: 'Sleek smartwatch with circular display and leather band on clean white surface', category: 'Smart Watches', discount: 25, inStock: true },
{ id: '8', name: 'ProBass Wireless', price: 199, originalPrice: 269, rating: 4.8, reviews: 1876, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1119295e3-1765076790006.png", alt: 'Premium wireless over-ear headphones in black with cushioned earpads on clean dark surface', category: 'Audio', discount: 26, badge: 'Popular', inStock: true },
{ id: '9', name: 'ZeroGravity Sneakers', price: 165, originalPrice: 210, rating: 4.5, reviews: 723, image: "https://images.unsplash.com/photo-1713603577859-b6d39c908123", alt: 'White and black athletic sneakers with modern design on clean background', category: 'Sneakers', discount: 21, inStock: true },
{ id: '10', name: 'NanoTrack GPS Watch', price: 329, originalPrice: 449, rating: 4.9, reviews: 987, image: "https://images.unsplash.com/photo-1627794205161-b0398d3cf526", alt: 'Active sports GPS watch with bright display being worn during outdoor activity', category: 'Smart Watches', discount: 27, badge: 'Premium', inStock: true },
{ id: '11', name: 'GlitchPad Pro Controller', price: 69, originalPrice: 99, rating: 4.6, reviews: 1456, image: "https://images.unsplash.com/photo-1717521448080-bdbc44a5f1f3", alt: 'Modern game controller with ergonomic design on dark reflective surface', category: 'Gaming', discount: 30, inStock: false },
{ id: '12', name: 'OmniPack Trek 45L', price: 129, originalPrice: 179, rating: 4.4, reviews: 432, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1ad203b-1775828717287.png", alt: 'Large hiking backpack in dark green with multiple pockets on outdoor trail background', category: 'Backpacks', discount: 28, inStock: true }];


const ITEMS_PER_PAGE = 9;
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Highest Rated', 'Most Reviews'];

export default function ProductsGrid() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState('Featured');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [filterOpen, setFilterOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    );
    gridRef.current?.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [visibleCount, selectedCategory, search]);

  const priceFilter = (p: Product) => {
    if (!selectedPrice) return true;
    if (selectedPrice === 'Under $50') return p.price < 50;
    if (selectedPrice === '$50 – $150') return p.price >= 50 && p.price <= 150;
    if (selectedPrice === '$150 – $300') return p.price > 150 && p.price <= 300;
    if (selectedPrice === '$300+') return p.price > 300;
    return true;
  };

  const filtered = allProducts.
  filter((p) => selectedCategory === 'All' || p.category === selectedCategory).
  filter((p) => search === '' || p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())).
  filter(priceFilter).
  filter((p) => selectedRating === 0 || p.rating >= selectedRating).
  sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    if (sortBy === 'Highest Rated') return b.rating - a.rating;
    if (sortBy === 'Most Reviews') return b.reviews - a.reviews;
    return 0;
  });

  const visible = filtered.slice(0, visibleCount);

  const activeFilters = [
  selectedCategory !== 'All' ? selectedCategory : null,
  selectedPrice || null,
  selectedRating > 0 ? `${selectedRating}+ Stars` : null].
  filter(Boolean) as string[];

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedPrice('');
    setSelectedRating(0);
    setSearch('');
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div ref={gridRef}>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Icon name="MagnifyingGlassIcon" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => {setSearch(e.target.value);setVisibleCount(ITEMS_PER_PAGE);}}
            placeholder="Search products..."
            className="w-full pl-9 pr-4 py-2.5 text-sm text-foreground bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground transition-all" />
          
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2.5 text-sm text-foreground bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary cursor-pointer appearance-none">
          
          {sortOptions.map((opt) =>
          <option key={opt} value={opt}>{opt}</option>
          )}
        </select>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="lg:hidden flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground glass-card border-accent-glow rounded-xl hover:border-primary/50 transition-all">
          
          <Icon name="AdjustmentsHorizontalIcon" size={16} className="text-primary" />
          Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
        </button>
      </div>

      {/* Active filters */}
      {activeFilters.length > 0 &&
      <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="text-xs text-muted-foreground">Active:</span>
          {activeFilters.map((f) =>
        <span key={f} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full">
              {f}
            </span>
        )}
          <button onClick={handleReset} className="text-xs text-muted-foreground hover:text-primary transition-colors underline">
            Clear all
          </button>
        </div>
      }

      <div className="flex gap-8">
        {/* Filters Sidebar — Desktop */}
        <div className="hidden lg:block">
          <ProductFilters
            selectedCategory={selectedCategory}
            selectedPrice={selectedPrice}
            selectedRating={selectedRating}
            onCategoryChange={(c) => {setSelectedCategory(c);setVisibleCount(ITEMS_PER_PAGE);}}
            onPriceChange={(p) => {setSelectedPrice(p);setVisibleCount(ITEMS_PER_PAGE);}}
            onRatingChange={(r) => {setSelectedRating(r);setVisibleCount(ITEMS_PER_PAGE);}}
            onReset={handleReset} />
          
        </div>

        {/* Mobile Filters Drawer */}
        {filterOpen &&
        <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setFilterOpen(false)} />
            <div className="relative ml-auto w-72 h-full bg-secondary border-l border-border overflow-y-auto p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">Filters</h3>
                <button onClick={() => setFilterOpen(false)}>
                  <Icon name="XMarkIcon" size={20} className="text-muted-foreground hover:text-foreground" />
                </button>
              </div>
              <ProductFilters
              selectedCategory={selectedCategory}
              selectedPrice={selectedPrice}
              selectedRating={selectedRating}
              onCategoryChange={(c) => {setSelectedCategory(c);setVisibleCount(ITEMS_PER_PAGE);setFilterOpen(false);}}
              onPriceChange={(p) => {setSelectedPrice(p);setVisibleCount(ITEMS_PER_PAGE);}}
              onRatingChange={(r) => {setSelectedRating(r);setVisibleCount(ITEMS_PER_PAGE);}}
              onReset={handleReset} />
            
            </div>
          </div>
        }

        {/* Grid */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-foreground font-semibold">{visible.length}</span> of <span className="text-foreground font-semibold">{filtered.length}</span> products
            </p>
          </div>

          {visible.length === 0 ?
          <div className="flex flex-col items-center justify-center py-20 glass-card border-accent-glow rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Icon name="MagnifyingGlassIcon" size={28} className="text-primary opacity-50" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">No Products Found</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center max-w-xs">
                No products match your current filters. Try adjusting your search or filters.
              </p>
              <button
              onClick={handleReset}
              className="px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg glow-green-sm">
              
                Reset Filters
              </button>
            </div> :

          <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {visible.map((product, i) =>
              <ProductCard key={product.id} product={product} index={i} />
              )}
              </div>

              {/* Load More */}
              {visibleCount < filtered.length &&
            <div className="text-center mt-10">
                  <button
                onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold text-primary border border-primary/30 rounded-xl glass-card hover:border-primary hover:glow-green-sm transition-all duration-200">
                
                    <Icon name="ArrowDownIcon" size={16} />
                    Load More Products ({filtered.length - visibleCount} remaining)
                  </button>
                </div>
            }
            </>
          }
        </div>
      </div>
    </div>);

}