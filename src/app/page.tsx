import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import CategoriesSection from './components/CategoriesSection';
import SpecialOffers from './components/SpecialOffers';
import ReviewsSection from './components/ReviewsSection';
import NewsletterSection from './components/NewsletterSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <SpecialOffers />
      <ReviewsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}