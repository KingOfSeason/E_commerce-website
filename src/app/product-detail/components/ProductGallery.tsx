'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const images = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_16e5fa59d-1778398404229.png",
  alt: 'OmniWatch Pro X front view showing watch face with premium dark metallic band on dark background'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecda7343-1768716644834.png",
  alt: 'Smart watch side profile view showing slim bezel and health sensor array on dark background'
},
{
  src: "https://images.unsplash.com/photo-1539542990784-6a2fe3f50f39",
  alt: 'Smart watch worn on wrist during outdoor activity showing GPS and fitness tracking features'
},
{
  src: "https://images.unsplash.com/photo-1555024502-f4472a2f0321",
  alt: 'Smart watch with leather band variant on clean white surface showing premium craftsmanship'
}];


export default function ProductGallery() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden glass-card border-accent-glow group">
        <AppImage
          src={images?.[activeIdx]?.src}
          alt={images?.[activeIdx]?.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700" />
        
        {/* Scan line effect */}
        <div className="absolute inset-0 scan-line pointer-events-none overflow-hidden" />
        {/* HUD corner decorations */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-sm" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-sm" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-sm" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-sm" />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images?.map((img, i) =>
        <button
          key={i}
          onClick={() => setActiveIdx(i)}
          className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
          activeIdx === i ?
          'border-primary glow-green-sm' : 'border-border hover:border-primary/40'}`
          }>
          
            <AppImage
            src={img?.src}
            alt={`Thumbnail ${i + 1}`}
            fill
            sizes="100px"
            className="object-cover" />
          
            {activeIdx === i &&
          <div className="absolute inset-0 bg-primary/10" />
          }
          </button>
        )}
      </div>
    </div>);

}