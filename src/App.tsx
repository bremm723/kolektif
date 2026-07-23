/**
 * KOLEKTIF (kolektif.id) - CollaborAction Space & Coffee Hub Website
 * Designed for focus, collaboration, and taste in Yogyakarta.
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HighlightSection } from './components/HighlightSection';
import { MenuSection } from './components/MenuSection';
import { SpaceSection } from './components/SpaceSection';
import { EventSection } from './components/EventSection';
import { CommunityFooter } from './components/CommunityFooter';
import { OrderDrawer } from './components/OrderDrawer';
import { SpaceBookingModal } from './components/SpaceBookingModal';
import { MenuItem, CartItem, SpaceOption } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedSpaceOption, setSelectedSpaceOption] = useState<SpaceOption | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Navigation Smooth Scroll
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart operations
  const handleAddToCart = (item: MenuItem, option?: 'Hot' | 'Iced') => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (ci) => ci.menuItem.id === item.id && ci.selectedOption === option
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { menuItem: item, quantity: 1, selectedOption: option }];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((_, i) => i !== index));
    } else {
      setCartItems((prev) => {
        const updated = [...prev];
        updated[index].quantity = newQty;
        return updated;
      });
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenBookingForSpace = (space?: SpaceOption) => {
    if (space) {
      setSelectedSpaceOption(space);
    }
    setIsBookingModalOpen(true);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-[#0B0C0E] text-[#F4F4F5] font-sans min-h-screen selection:bg-[#C5A059] selection:text-[#0C0D0E] antialiased">
      <div className="relative flex flex-col min-h-screen">
        
        {/* Main Navigation */}
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
          cartItemCount={totalCartCount}
        />

        {/* Page Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <HeroSection
            onExploreMenu={() => handleNavigate('menu')}
            onBookSpace={() => handleOpenBookingForSpace()}
          />

          {/* Instagram Highlight Circles & Stories */}
          <HighlightSection onOpenBooking={() => setIsBookingModalOpen(true)} />

          {/* Space & Facilities Section */}
          <SpaceSection onBookSpace={(space) => handleOpenBookingForSpace(space)} />

          {/* Menu Section */}
          <MenuSection onAddToCart={handleAddToCart} />

          {/* Events Section */}
          <EventSection />
        </main>

        {/* Footer */}
        <CommunityFooter />

        {/* Interactive Order Summary Drawer */}
        <OrderDrawer
          isOpen={isOrderDrawerOpen}
          onClose={() => setIsOrderDrawerOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onClearCart={handleClearCart}
        />

        {/* Space Booking Modal */}
        <SpaceBookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          preselectedSpace={selectedSpaceOption}
        />

      </div>
    </div>
  );
}
