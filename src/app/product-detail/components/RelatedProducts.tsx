import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const related = [
{
  id: 'r1',
  name: 'OmniWatch Lite',
  price: 149,
  originalPrice: 199,
  rating: 4.4,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f11636ec-1772535733030.png",
  alt: 'Slim smartwatch with round display and minimalist design on light background',
  category: 'Smart Watches'
},
{
  id: 'r2',
  name: 'NanoTrack GPS',
  price: 329,
  originalPrice: 449,
  rating: 4.9,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6d6d8de-1773138433150.png",
  alt: 'GPS sports watch worn on wrist during outdoor trail running activity',
  category: 'Smart Watches'
},
{
  id: 'r3',
  name: 'AirPods Quantum',
  price: 189,
  originalPrice: 249,
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1592324938482-c4197bc4925c",
  alt: 'White wireless earbuds in charging case on clean dark surface',
  category: 'Audio'
},
{
  id: 'r4',
  name: 'ProBass Wireless',
  price: 199,
  originalPrice: 269,
  rating: 4.8,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1119295e3-1765076790006.png",
  alt: 'Premium wireless over-ear headphones in black on clean dark surface',
  category: 'Audio'
}];


export default function RelatedProducts() {
  return (
    <section className="py-12 border-t border-border">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
          You May Also <span className="text-primary">Like</span>
        </h2>
        <Link href="/products" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related?.map((product) =>
        <Link
          key={product?.id}
          href="/product-detail"
          className="group glass-card border-accent-glow rounded-2xl overflow-hidden hover:border-primary/40 hover:glow-green-sm transition-all duration-300">
          
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <AppImage
              src={product?.image}
              alt={product?.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            <div className="p-3">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{product?.category}</p>
              <h3 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                {product?.name}
              </h3>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-primary">${product?.price}</span>
                <span className="text-xs text-muted-foreground line-through">${product?.originalPrice}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>);

}