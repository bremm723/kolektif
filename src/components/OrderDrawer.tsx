import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowUpRight, CheckCircle2, Coffee } from 'lucide-react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [orderType, setOrderType] = useState<'Dine-in' | 'Takeaway'>('Dine-in');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isOpen) return null;

  const subtotalNum = cartItems.reduce((acc, item) => {
    return acc + item.menuItem.priceNum * item.quantity;
  }, 0);

  const subtotalFormatted = `${(subtotalNum / 1000).toFixed(0)}K`;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    let itemsListText = cartItems
      .map((item, idx) => {
        const optionStr = item.selectedOption ? ` (${item.selectedOption})` : '';
        return `${idx + 1}. ${item.menuItem.name}${optionStr} x${item.quantity} = ${
          (item.menuItem.priceNum * item.quantity) / 1000
        }K`;
      })
      .join('\n');

    const waText =
      `*PESANAN ONLINE KOLEKTIF (kolektif.id)*\n\n` +
      `*Pemesan:* ${customerName || 'Pelanggan KOLEKTIF'}\n` +
      `*Tipe Pesanan:* ${orderType}\n` +
      `*Nomor Meja / Area:* ${tableNumber || 'Co-working Main Hall'}\n\n` +
      `*Rincian Menu:*\n${itemsListText}\n\n` +
      `*Total Biaya:* IDR ${(subtotalNum / 1000).toFixed(0)}K (${subtotalNum.toLocaleString('id-ID')})\n\n` +
      `Mohon diproses, terima kasih!`;

    const waUrl = `https://wa.me/6282134198905?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
    setOrderSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
      <div className="w-full max-w-md bg-zinc-900 h-full border-l border-white/10 flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300 text-left">
        
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-[#C5A059]/10 text-[#C5A059]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Your Order</h3>
                <p className="text-[11px] text-zinc-400">KOLEKTIF Online Ordering</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!orderSubmitted ? (
            <div className="mt-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <Coffee className="w-12 h-12 text-zinc-600 mx-auto" />
                  <p className="text-sm text-zinc-400">Your order list is empty.</p>
                  <p className="text-xs text-zinc-500">Explore our menu and add items to order!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Item List */}
                  <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                    {cartItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-white/10"
                      >
                        <div className="space-y-0.5 max-w-[180px]">
                          <p className="text-xs font-bold text-white truncate">{item.menuItem.name}</p>
                          <p className="text-[11px] font-mono text-[#C5A059]">{item.menuItem.price}</p>
                          {item.selectedOption && (
                            <span className="text-[10px] bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded">
                              {item.selectedOption}
                            </span>
                          )}
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                            className="p-1 rounded bg-zinc-800 text-zinc-300 hover:text-white"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-white px-1">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            className="p-1 rounded bg-zinc-800 text-zinc-300 hover:text-white"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer Info Form */}
                  <form onSubmit={handleCheckout} className="space-y-3 pt-4 border-t border-white/10">
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase">
                        Order Type
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setOrderType('Dine-in')}
                          className={`py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                            orderType === 'Dine-in'
                              ? 'bg-[#C5A059] text-[#0C0D0E]'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          Dine-in
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderType('Takeaway')}
                          className={`py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                            orderType === 'Takeaway'
                              ? 'bg-[#C5A059] text-[#0C0D0E]'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          Takeaway
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Alex / Developer Desk 04"
                        className="w-full bg-zinc-950 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase">
                        Table Number / Location Notes
                      </label>
                      <input
                        type="text"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="e.g. Meja 12 / Outdoor Patio"
                        className="w-full bg-zinc-950 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between font-serif text-lg font-bold text-white border-t border-white/10">
                      <span>Total:</span>
                      <span className="text-[#C5A059]">IDR {subtotalFormatted}</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#C5A059] text-[#0C0D0E] text-xs font-extrabold uppercase tracking-widest hover:bg-[#B38F48] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#C5A059]/20"
                    >
                      <span>Send Order to Cashier WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 text-[#C5A059] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white">Order Sent!</h4>
              <p className="text-xs text-zinc-300">
                Your order details have been formatted and sent to KOLEKTIF Barista. Sit back, relax, and stay focused!
              </p>
              <button
                onClick={() => {
                  onClearCart();
                  setOrderSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 rounded-lg bg-zinc-800 text-white text-xs font-bold uppercase"
              >
                Close Drawer
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
