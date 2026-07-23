import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/kolektifData';
import { MenuItem, MenuCategory } from '../types';
import { Coffee, Flame, Utensils, Sandwich, CupSoda, Search, Plus, Check, Info, Sparkles, Filter } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, option?: 'Hot' | 'Iced') => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemDetail, setSelectedItemDetail] = useState<MenuItem | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'All', icon: <Filter className="w-3.5 h-3.5" /> },
    { id: 'coffee', label: 'Coffee', icon: <Coffee className="w-3.5 h-3.5" /> },
    { id: 'non_coffee', label: 'Non-Coffee', icon: <CupSoda className="w-3.5 h-3.5" /> },
    { id: 'food', label: 'Food & Snacks', icon: <Utensils className="w-3.5 h-3.5" /> },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    let matchesCategory = false;
    if (activeCategory === 'all') {
      matchesCategory = true;
    } else if (activeCategory === 'coffee') {
      matchesCategory = item.category === 'coffee_milk' || item.category === 'signature';
    } else if (activeCategory === 'non_coffee') {
      matchesCategory = item.category === 'tea_filter';
    } else if (activeCategory === 'food') {
      matchesCategory = item.category === 'main_dishes' || item.category === 'snacks_appetizers';
    }

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (item: MenuItem, option?: 'Hot' | 'Iced') => {
    onAddToCart(item, option);
    setAddedItemIds((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedItemIds((prev) => prev.filter((id) => id !== item.id));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 bg-[#0B0C0E] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Official Menu KOLEKTIF
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium tracking-tight">
            Crafted For Your Productivity
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            From artisanal Arabica espresso extractions to savory rich main dishes and crisp mocktails, crafted to power your deep focus and collaborative spirit.
          </p>
        </div>

        {/* Category Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Scrollable Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#C5A059] text-[#0C0D0E] shadow-lg shadow-[#C5A059]/20'
                      : 'bg-zinc-900/80 text-zinc-300 hover:bg-zinc-800 border border-white/10'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-white/15 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A059]"
            />
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isAdded = addedItemIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="group relative bg-zinc-900/60 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C5A059]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A059]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Item Image Header */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-zinc-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                    
                    {/* Tag Badge */}
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-[#C5A059] text-[#0C0D0E] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                        {item.tag}
                      </span>
                    )}

                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-zinc-950/90 border border-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-serif font-bold text-[#C5A059]">
                      {item.price}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 text-left space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-3">
                  <button
                    onClick={() => setSelectedItemDetail(item)}
                    className="text-[11px] text-zinc-400 hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Detail</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    {/* Hot / Iced options if applicable */}
                    {item.isHotAvailable && item.isIceAvailable ? (
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handleAdd(item, 'Hot')}
                          className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 hover:bg-amber-500/40 text-[10px] font-bold uppercase border border-amber-500/30"
                        >
                          + Hot
                        </button>
                        <button
                          onClick={() => handleAdd(item, 'Iced')}
                          className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40 text-[10px] font-bold uppercase border border-cyan-500/30"
                        >
                          + Ice
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAdd(item)}
                        className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all ${
                          isAdded
                            ? 'bg-amber-600 text-white'
                            : 'bg-[#C5A059] text-[#0C0D0E] hover:bg-[#B38F48] shadow-md shadow-[#C5A059]/20'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Order</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-zinc-500 text-sm">
            No menu items found matching "{searchQuery}".
          </div>
        )}

      </div>

      {/* Item Quick Detail Modal */}
      {selectedItemDetail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/20 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl p-6 text-left relative">
            <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
              <img
                src={selectedItemDetail.image}
                alt={selectedItemDetail.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 bg-zinc-950 px-3 py-1 rounded-full text-xs font-serif font-bold text-[#C5A059]">
                {selectedItemDetail.price}
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              {selectedItemDetail.name}
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed mb-6">
              {selectedItemDetail.description}
            </p>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSelectedItemDetail(null)}
                className="flex-1 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold uppercase"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleAdd(selectedItemDetail);
                  setSelectedItemDetail(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#C5A059] text-[#0C0D0E] text-xs font-bold uppercase tracking-wider"
              >
                Add to Order ({selectedItemDetail.price})
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
