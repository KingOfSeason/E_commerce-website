'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface CartItem {
  count: number;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState<number>(3);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const handleScroll = () => setMobileOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Deals', href: '/products' },
    { label: 'About', href: '/' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <AppLogo
                size={36}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                Omni<span className="text-primary">Store</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Search */}
              <div className={`flex items-center transition-all duration-300 ${searchOpen ? 'w-48' : 'w-9'} overflow-hidden`}>
                {searchOpen && (
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-muted text-foreground text-sm px-3 py-1.5 rounded-l-lg border border-border focus:outline-none focus:border-primary"
                    onBlur={() => setSearchOpen(false)}
                  />
                )}
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-200 flex-shrink-0 ${searchOpen ? 'rounded-l-none border-l-0 border-primary text-primary' : ''}`}
                  aria-label="Search"
                >
                  <Icon name="MagnifyingGlassIcon" size={18} />
                </button>
              </div>

              {/* Cart */}
              <Link
                href="/"
                className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-200"
                aria-label="Cart"
              >
                <Icon name="ShoppingCartIcon" size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse-glow">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User */}
              <Link
                href="/"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-200"
                aria-label="Account"
              >
                <Icon name="UserIcon" size={18} />
              </Link>

              <Link
                href="/products"
                className="px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg glow-green-sm hover:bg-accent/90 transition-all duration-200"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/"
                className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground"
                aria-label="Cart"
              >
                <Icon name="ShoppingCartIcon" size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all"
                aria-label="Toggle menu"
              >
                <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden glass-nav border-t border-border transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border mt-1">
              <div className="flex items-center gap-2 px-4 py-2 mb-2">
                <Icon name="MagnifyingGlassIcon" size={16} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 bg-transparent text-foreground text-sm focus:outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg glow-green-sm"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}