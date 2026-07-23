import React from 'react';
import { SPACE_OPTIONS } from '../data/kolektifData';
import { SpaceOption } from '../types';
import { Check, Users, ShieldCheck, ArrowUpRight, Wifi, Shield, Clock } from 'lucide-react';

interface SpaceSectionProps {
  onBookSpace: (space?: SpaceOption) => void;
}

export const SpaceSection: React.FC<SpaceSectionProps> = ({ onBookSpace }) => {
  return (
    <section id="space" className="py-20 bg-[#0E1013] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest font-bold">
              ★ WORKSPACE & FACILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium mt-1">
              Co-Working & Private Spaces
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md mt-2 md:mt-0 font-light leading-relaxed">
            From single day passes to dedicated desks and executive boardroom reservations in Yogyakarta.
          </p>
        </div>

        {/* Space Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPACE_OPTIONS.map((space) => (
            <div
              key={space.id}
              className="bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C5A059]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#C5A059] border border-[#C5A059]/40 uppercase tracking-wider">
                    {space.type}
                  </div>

                  <div className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-serif font-bold text-white border border-white/20">
                    IDR {space.rate}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                      {space.name}
                    </h3>
                    <span className="flex items-center text-xs text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded-full">
                      <Users className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
                      {space.capacity}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {space.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                    {space.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[11px] text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookSpace(space)}
                  className="w-full py-3 rounded-xl bg-[#C5A059] text-[#0C0D0E] text-xs font-extrabold uppercase tracking-widest hover:bg-[#B38F48] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#C5A059]/10"
                >
                  <span>Reserve This Space</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
