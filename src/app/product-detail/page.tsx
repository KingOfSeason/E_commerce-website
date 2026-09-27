import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabsComplete from './components/ProductTabsComplete';
import RelatedProducts from './components/RelatedProducts';

export const metadata = {
  title: 'OmniWatch Pro X — OmniStore',
  description: 'Shop the OmniWatch Pro X — 1.9" AMOLED display, 14-day battery, GPS, heart rate monitoring. Premium smart watch at $299. Free delivery on orders over $50.',
};

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page content */}
      <div className="pt-24 pb-16">
        {/* Ambient background effects */}
        <div className="fixed top-1/3 right-0 w-96 h-96 blob-accent opacity-10 pointer-events-none" />
        <div className="fixed bottom-1/3 left-0 w-80 h-80 blob-accent opacity-8 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {/* Gallery */}
            <div>
              <ProductGallery />
            </div>
            {/* Info */}
            <div>
              <ProductInfo />
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-12">
            <ProductTabsComplete />
          </div>

          {/* Related Products */}
          <RelatedProducts />
        </div>
      </div>

      <Footer />
    </main>
  );
}