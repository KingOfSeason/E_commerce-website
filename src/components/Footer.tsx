import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <AppLogo size={28} />
            <span className="font-bold text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
              Omni<span className="text-primary">Store</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            <Link href="/products" className="hover:text-foreground transition-colors">Deals</Link>
            <Link href="/" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-foreground transition-colors">Terms</Link>
          </div>

          {/* Social + Copyright */}
          <div className="flex items-center gap-3">
            {[
              { icon: 'GlobeAltIcon', label: 'Website' },
              { icon: 'ChatBubbleLeftEllipsisIcon', label: 'Twitter' },
              { icon: 'EnvelopeIcon', label: 'Email' },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Icon name={icon as any} size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 OmniStore. All rights reserved. Futuristic shopping experience.
        </div>
      </div>
    </footer>
  );
}