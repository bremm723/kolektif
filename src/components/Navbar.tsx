import React, { useState, useEffect } from 'react';
import { KolektifLogo } from './KolektifLogo';
import { ShoppingBag, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenOrderDrawer: () => void;
  onOpenBookingModal: () => void;
  cartItemCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenOrderDrawer,
  onOpenBookingModal,
  cartItemCount,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'space', label: 'Space' },
    { id: 'menu', label: 'Menu' },
    { id: 'events', label: 'Events' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0C0E]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('hero')}
            className="text-left group focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50 rounded-lg p-1"
          >
            <KolektifLogo variant="light" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-zinc-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 uppercase ${
                    isActive
                      ? 'bg-[#C5A059] text-[#0C0D0E] shadow-lg shadow-[#C5A059]/20 font-bold'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Order Online Button */}
            <button
              onClick={onOpenOrderDrawer}
              className="relative flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-white text-xs font-semibold transition-all hover:border-[#C5A059]/50 group"
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
              <span>Order Online</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C5A059] text-[#0C0D0E] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-black animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Book Space Button */}
            <button
              onClick={onOpenBookingModal}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#C5A059] hover:bg-[#B38F48] text-[#0C0D0E] text-xs font-bold transition-all shadow-lg shadow-[#C5A059]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Space</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenOrderDrawer}
              className="relative p-2 rounded-lg bg-zinc-900 border border-white/10 text-white"
            >
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A059] text-[#0C0D0E] text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between text-left py-2.5 px-4 rounded-lg text-sm font-medium tracking-wide uppercase ${
                  activeSection === link.id
                    ? 'bg-[#C5A059] text-[#0C0D0E] font-bold'
                    : 'text-zinc-300 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 space-y-2.5">
            <button
              onClick={() => {
                onOpenBookingModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-[#C5A059] text-[#0C0D0E] text-xs font-extrabold uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Space</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
