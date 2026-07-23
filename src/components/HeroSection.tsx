import React from 'react';
import { HERO_BANNER_IMAGE, COFFEE_SIGNATURE_IMAGE, MAIN_DISHES_IMAGE } from '../data/kolektifData';
import { ArrowRight, Wifi, Coffee, MapPin, Zap, Clock, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onBookSpace: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMenu, onBookSpace }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#0B0C0E] overflow-hidden">
      {/* Background Hero Image Collage with Atmospheric Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BANNER_IMAGE}
          alt="Kolektif CollaborAction Space Interior"
          className="w-full h-full object-cover object-center opacity-35 scale-105 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Radial Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/70 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B0C0E]/60 to-[#0B0C0E]" />
      </div>

      {/* Ambient Accent Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A059]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left Column - 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-[#C5A059]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">
                Kolektif.id • Yogyakarta
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-[11px] font-medium text-zinc-300">Open Daily 09.00 - 23.00</span>
            </div>

            {/* Serif Premium Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.08]">
              Elevating <span className="italic text-[#C5A059] font-normal font-serif">Productivity,</span> <br />
              Fostering <span className="underline decoration-[#C5A059]/40 underline-offset-8">Community.</span>
            </h1>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg text-zinc-300 font-light max-w-2xl leading-relaxed">
              <strong className="text-white font-medium">KOLEKTIF:</strong> CollaborAction space & coffee hub in Yogyakarta. Designed for focus, collaboration, and taste.
            </p>

            {/* CTA Buttons - Sharp Refined Edges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#C5A059] text-[#0C0D0E] text-xs font-bold uppercase tracking-[0.2em] rounded-none border border-[#C5A059] hover:bg-[#B38F48] transition-all shadow-xl shadow-[#C5A059]/20 hover:shadow-[#C5A059]/30 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Explore Menu & Space</span>
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBookSpace}
                className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900/90 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-none border border-white/20 hover:border-[#C5A059]/60 hover:bg-zinc-800 transition-all backdrop-blur-md"
              >
                <span>Book a Desk</span>
              </button>
            </div>

            {/* Live Space Feature Pill Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-zinc-900/50 border border-white/5">
                <Wifi className="w-4 h-4 text-[#C5A059]" />
                <div className="text-left">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Wi-Fi Speed</p>
                  <p className="text-xs font-bold text-white">100 Mbps Fiber</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-zinc-900/50 border border-white/5">
                <Coffee className="w-4 h-4 text-[#C5A059]" />
                <div className="text-left">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Coffee Hub</p>
                  <p className="text-xs font-bold text-white">Specialty Beans</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-zinc-900/50 border border-white/5">
                <Zap className="w-4 h-4 text-[#C5A059]" />
                <div className="text-left">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Power Supply</p>
                  <p className="text-xs font-bold text-white">Every Desk Plug</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-zinc-900/50 border border-white/5">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <div className="text-left">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Location</p>
                  <p className="text-xs font-bold text-white">Sleman, Jogja</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Aesthetic Composite Cards (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Card 1: Signature Drink Preview */}
              <div className="relative group rounded-2xl overflow-hidden border border-white/15 bg-zinc-900/80 backdrop-blur-xl p-3 shadow-2xl transition-all duration-300 hover:border-[#C5A059]/50 hover:-translate-y-1">
                <div className="aspect-[16/9] rounded-xl overflow-hidden relative">
                  <img
                    src={COFFEE_SIGNATURE_IMAGE}
                    alt="KOLEKTIF Signature SeaSalt Latte"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#C5A059] border border-[#C5A059]/40">
                    ★ SIGNATURE BEVERAGE
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">SeaSalt Latte & Biscoff</p>
                      <p className="text-xs text-zinc-400">Coffee milk with Butterscotch & Seasalt Cream</p>
                    </div>
                    <span className="text-sm font-serif font-bold text-[#C5A059]">35K</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge overlay */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-900/95 border border-[#C5A059]/40 backdrop-blur-xl p-4 rounded-xl shadow-2xl hidden sm:flex items-center space-x-3 z-20">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">CollaborAction Space</p>
                  <p className="text-[11px] text-zinc-400">#TogetherMakesBetter</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
