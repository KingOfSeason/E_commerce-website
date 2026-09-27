import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsGrid from './components/ProductsGrid';

export const metadata = {
  title: 'Products — OmniStore Tech & Gadgets',
  description: 'Browse 2,400+ premium smart watches, gaming accessories, audio gear, sneakers, and tech gadgets. Filter by category, price, and rating.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 blob-accent opacity-20" />
        {/* HUD ring */}
        <div className="absolute bottom-0 left-8 w-24 h-24 hud-ring rounded-full opacity-15 animate-rotate-ring" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
            <span>/</span>
            <span className="text-primary">Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            All <span className="text-primary glow-green-text">Products</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Discover our full catalog of premium tech gadgets, gaming gear, and lifestyle products.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <ProductsGrid />
      </div>

      <Footer />
    </main>
  );
}