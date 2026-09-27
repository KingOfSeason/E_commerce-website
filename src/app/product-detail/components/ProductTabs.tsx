'use client';
import React, { useState } from 'react';

const tabs = ['Description', 'Specifications', 'Reviews'];

const specs = [
  { label: 'Display', value: '1.9" AMOLED, 410×502px, 60Hz' },
  { label: 'Processor', value: 'OmniChip X1 Dual-Core 1.4GHz' },
  { label: 'RAM / Storage', value: '1GB RAM / 16GB Internal' },
  { label: 'Battery', value: '550mAh — Up to 14 days' },
  { label: 'Connectivity', value: 'Bluetooth 5.3, Wi-Fi 2.4GHz, NFC' },
  { label: 'Sensors', value: 'Heart Rate, SpO2, Gyro, Accelerometer, GPS' },
  { label: 'Water Resistance', value: '5ATM — 50m depth' },
  { label: 'Compatibility', value: 'iOS 14+, Android 8+' },
  { label: 'Band Material', value: 'Fluoroelastomer (Silicone), 22mm' },
  { label: 'Case Material', value: 'Aerospace-grade Aluminum' },
  { label: 'Weight', value: '32g (without band)' },
  { label: 'Colors', value: 'Midnight Black, Neon Green, Steel Gray' },
];

const reviews = [
  { name: 'Alex Chen', rating: 5, date: 'Sep 14, 2026', text: 'Absolutely stunning watch. The AMOLED display is incredibly sharp and the battery life is exactly as advertised. The green accent color option is killer.' },
  { name: 'Fatima Al-Rashidi', rating: 5, date: 'Sep 02, 2026', text: 'Heart rate monitoring is spot-on compared to my medical-grade device. The GPS accuracy is impressive. This is my third OmniStore purchase.' },
  { name: 'Tyler Brooks', rating: 4, date: 'Aug 28, 2026', text: 'Great watch for the price. Setup was easy and the app is intuitive. Docking only one star because the charger cable feels a bit flimsy.' },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <div className="glass-card border-accent-glow rounded-2xl overflow-hidden">
      {/* Tab Headers */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 ${
              activeTab === tab
                ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/30'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'Description' && (
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              The <strong className="text-foreground">OmniWatch Pro X</strong> is the flagship smartwatch from OmniStore, engineered for those who demand the best from their wearable technology. Featuring a vibrant 1.9" AMOLED display with always-on capability, this watch delivers stunning clarity in any lighting condition.
            </p>
            <p>
              Powered by our proprietary OmniChip X1 processor, the Pro X runs our custom WatchOS 3.0 — a fluid, responsive interface designed around your lifestyle. Health monitoring has never been more comprehensive: continuous heart rate, blood oxygen saturation, stress tracking, sleep analysis, and over 120 workout modes.
            </p>
            <p>
              The aerospace-grade aluminum case with Corning Gorilla Glass DX+ protection means this watch is built to last. Whether you're at the gym, on a trail, or in a boardroom — the OmniWatch Pro X keeps up with you.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {['Advanced Health Suite', '14-Day Battery Life', 'Military-Grade Durability', 'Smart Notifications'].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-xs text-foreground font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Specifications' && (
          <div className="divide-y divide-border">
            {specs.map(({ label, value }) => (
              <div key={label} className="flex items-start py-3 gap-4">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 flex-shrink-0 pt-0.5">
                  {label}
                </span>
                <span className="text-sm text-foreground">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Reviews' && (
          <div className="space-y-5">
            {/* Summary */}
            <div className="flex items-center gap-6 p-4 bg-primary/5 border border-primary/15 rounded-xl mb-6">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-primary">4.9</p>
                <div className="flex items-center gap-0.5 justify-center mt-1">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">2,847 reviews</p>
              </div>
              <div className="flex-1 space-y-1.5">
                {[5,4,3,2,1].map((r) => {
                  const pct = r === 5 ? 78 : r === 4 ? 16 : r === 3 ? 4 : r === 2 ? 1 : 1;
                  return (
                    <div key={r} className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground w-3">{r}</span>
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground w-6">{pct}%</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {reviews.map((review, i) => (
              <div key={i} className="pb-5 border-b border-border last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold">
                      {review.name[0]}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{review.name}</span>
                    <span className="flex items-center gap-1 text-[10px] text-primary">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? 'text-primary' : 'text-muted'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}