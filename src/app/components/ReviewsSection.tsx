'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const reviews = [
{
  id: 1,
  name: 'Marcus Webb',
  role: 'Tech Reviewer',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_184970afd-1763296633055.png",
  avatarAlt: 'Young man with short brown hair and friendly smile against neutral background',
  rating: 5,
  text: "OmniStore completely changed how I shop for tech. The interface feels like the future — and the OmniWatch Pro X I ordered arrived in 24 hours, perfectly packaged. 10/10.",
  product: 'OmniWatch Pro X',
  verified: true
},
{
  id: 2,
  name: 'Priya Sharma',
  role: 'Competitive Gamer',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c508ba90-1772145167791.png",
  avatarAlt: 'Young woman with dark hair smiling warmly in natural outdoor light',
  rating: 5,
  text: "The gaming headset I got here has zero lag and incredible sound stage. The neon green packaging was a nice touch. Feels like you ordered from another dimension.",
  product: 'NexGen Gaming Headset',
  verified: true
},
{
  id: 3,
  name: 'Jordan Calloway',
  role: 'Sneaker Collector',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15d71c348-1772760192607.png",
  avatarAlt: 'Man with beard and glasses looking confidently at camera with neutral background',
  rating: 5,
  text: "Found a pair of TechRunners at 20% off that I couldn't find anywhere else. Shipping was insanely fast. This is my go-to store for anything tech or lifestyle.",
  product: 'TechRunner Sneakers',
  verified: true
}];


function StarRating({ rating }: {rating: number;}) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) =>
      <svg key={s} className={`w-4 h-4 ${s <= rating ? 'text-primary' : 'text-muted'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </div>);

}

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 blob-accent opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal-on-scroll">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-2 block">
            — Customer Stories
          </span>
          <h2 className="text-section-lg font-extrabold text-foreground tracking-tight">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Over 50,000 satisfied customers across the galaxy. Here are a few of their stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) =>
          <div
            key={review.id}
            className="reveal-on-scroll glass-card border-accent-glow rounded-2xl p-6 hover:border-primary/40 hover:glow-green-sm transition-all duration-300 flex flex-col gap-4"
            style={{ transitionDelay: `${i * 100}ms` }}>
            
              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Product tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-semibold text-primary">{review.product}</span>
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-primary/20">
                  <AppImage
                  src={review.avatar}
                  alt={review.avatarAlt}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full" />
                
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
                {review.verified &&
              <div className="ml-auto flex items-center gap-1 text-primary">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] font-semibold">Verified</span>
                  </div>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}