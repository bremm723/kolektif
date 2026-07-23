import React, { useState } from 'react';
import { INSTAGRAM_HIGHLIGHTS } from '../data/kolektifData';
import { InstagramHighlight } from '../types';
import { Laptop, Building, Users, Sparkles, Trophy, Coffee, Music, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HighlightSectionProps {
  onOpenBooking: () => void;
}

export const HighlightSection: React.FC<HighlightSectionProps> = ({ onOpenBooking }) => {
  const [selectedHighlight, setSelectedHighlight] = useState<InstagramHighlight | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-6 h-6" />;
      case 'Building': return <Building className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Trophy': return <Trophy className="w-6 h-6" />;
      case 'Coffee': return <Coffee className="w-6 h-6" />;
      case 'Music': return <Music className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const handleOpenHighlight = (highlight: InstagramHighlight) => {
    setSelectedHighlight(highlight);
    setActiveSlideIndex(0);
  };

  const handleNextSlide = () => {
    if (!selectedHighlight) return;
    if (activeSlideIndex < selectedHighlight.slides.length - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
    } else {
      setSelectedHighlight(null);
    }
  };

  const handlePrevSlide = () => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
    }
  };

  return (
    <section id="highlights" className="py-16 bg-[#0E1013] border-y border-white/5 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest font-bold">
              ★ INSTAGRAM HIGHLIGHTS & FACILITIES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium mt-1">
              Explore KOLEKTIF Space & Experience
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md mt-2 md:mt-0">
            Click any highlight circle below to view interactive story features inspired by our official Instagram (@kolektif.id).
          </p>
        </div>

        {/* Circular Instagram Highlight Row */}
        <div className="flex items-center space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x px-2">
          {INSTAGRAM_HIGHLIGHTS.map((highlight) => (
            <button
              key={highlight.id}
              onClick={() => handleOpenHighlight(highlight)}
              className="flex flex-col items-center space-y-2 group focus:outline-none flex-shrink-0 snap-center"
            >
              {/* Animated Gradient Ring Container */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#C5A059] via-amber-200 to-amber-500 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-[#C5A059]/10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-950 p-1 flex items-center justify-center border-2 border-black overflow-hidden relative">
                  <img
                    src={highlight.coverImage}
                    alt={highlight.title}
                    className="w-full h-full object-cover rounded-full opacity-60 group-hover:opacity-80 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-[#C5A059]">
                    {getIcon(highlight.iconName)}
                  </div>
                </div>
              </div>

              {/* Title label */}
              <span className="text-xs font-medium text-zinc-300 group-hover:text-[#C5A059] transition-colors max-w-[80px] text-center truncate">
                {highlight.title}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Interactive Story Viewer Modal */}
      {selectedHighlight && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-zinc-900 rounded-2xl border border-white/20 overflow-hidden shadow-2xl flex flex-col h-[680px]">
            
            {/* Top Progress Bars */}
            <div className="absolute top-3 left-3 right-3 z-30 flex space-x-1.5">
              {selectedHighlight.slides.map((_, idx) => (
                <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#C5A059] transition-all duration-300 ${
                      idx < activeSlideIndex
                        ? 'w-full'
                        : idx === activeSlideIndex
                        ? 'w-full animate-pulse'
                        : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Header info */}
            <div className="absolute top-6 left-4 right-4 z-30 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <div className="w-6 h-6 rounded-full bg-[#C5A059] text-[#0C0D0E] flex items-center justify-center font-bold text-xs">
                  K
                </div>
                <div>
                  <p className="text-xs font-bold leading-none text-white">{selectedHighlight.title}</p>
                  <p className="text-[10px] text-[#C5A059]">@kolektif.id • Highlight</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedHighlight(null)}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Media Background */}
            <div className="relative flex-1 bg-black">
              <img
                src={selectedHighlight.slides[activeSlideIndex]?.image}
                alt={selectedHighlight.slides[activeSlideIndex]?.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Navigation Overlay Click zones */}
            <button
              onClick={handlePrevSlide}
              disabled={activeSlideIndex === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 disabled:opacity-0 transition-opacity z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-opacity z-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Content Overlay */}
            <div className="p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent text-left space-y-3 z-20">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C5A059]">
                {selectedHighlight.slides[activeSlideIndex]?.subtitle}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {selectedHighlight.slides[activeSlideIndex]?.title}
              </h3>

              <div className="space-y-1.5 pt-1">
                {selectedHighlight.slides[activeSlideIndex]?.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex items-center space-x-3">
                <button
                  onClick={() => {
                    setSelectedHighlight(null);
                    onOpenBooking();
                  }}
                  className="flex-1 py-2.5 rounded-lg bg-[#C5A059] text-[#0C0D0E] text-xs font-bold uppercase tracking-wider text-center"
                >
                  Book This Experience
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
