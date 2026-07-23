import React from 'react';
import { KolektifLogo } from './KolektifLogo';
import { Clock, MapPin, Phone, Instagram, ExternalLink, Send, ArrowUpRight } from 'lucide-react';

export const CommunityFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#070809] border-t border-white/10 text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <KolektifLogo variant="light" size="lg" />
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              CollaborAction space for all productivity & community in Yogyakarta. Designed for focus, high-speed output, coffee culture, and creative networking.
            </p>
            <p className="text-xs font-mono text-[#C5A059] font-bold">
              #TogetherMakesBetter
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://instagram.com/kolektif.id"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-[#C5A059] hover:border-[#C5A059]/50 transition-colors"
                title="Instagram @kolektif.id"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linktr.ee/kolektifspace"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-xs text-zinc-300 hover:text-[#C5A059] hover:border-[#C5A059]/50 transition-colors"
              >
                <span>linktr.ee/kolektifspace</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Operational Hours & Location */}
          <div className="space-y-3 text-left">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Hours & Location
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-medium block">Operational Hours:</strong>
                  <span>09.00 – 23.00 WIB (Daily)</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-medium block">Address:</strong>
                  <span>Jl. Watugede No. 58, Sariharjo, Ngaglik, Sleman, DIY Yogyakarta 55581</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-medium block">WhatsApp Line:</strong>
                  <span>+62 821-3419-8905</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 text-left">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#hero" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#space" className="hover:text-[#C5A059] transition-colors">Co-Working Space</a></li>
              <li><a href="#menu" className="hover:text-[#C5A059] transition-colors">Menu Showcase</a></li>
              <li><a href="#events" className="hover:text-[#C5A059] transition-colors">Events & Competitions</a></li>
            </ul>
          </div>

          {/* Newsletter / Community Pass */}
          <div className="space-y-3 text-left">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Join #TemanKolektif
            </h4>
            <p className="text-xs text-zinc-400 font-light">
              Subscribe for event invitations, member coffee privileges, and space booking discounts.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Terima kasih telah bergabung dengan #TemanKolektif!'); }} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full bg-zinc-900 border border-white/15 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A059]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#C5A059] text-[#0C0D0E] rounded-md text-xs font-bold hover:bg-[#B38F48] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 text-center sm:text-left space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} KOLEKTIF (kolektif.id). All rights reserved. Designed for excellence in Yogyakarta.</p>
          <div className="flex space-x-4">
            <span className="text-[#C5A059] font-mono">kolektif.id</span>
            <span>•</span>
            <span>CollaborAction Space</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
