import React, { useState } from 'react';
import { SpaceOption } from '../types';
import { SPACE_OPTIONS } from '../data/kolektifData';
import { X, Calendar, Clock, Users, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface SpaceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSpace?: SpaceOption | null;
}

export const SpaceBookingModal: React.FC<SpaceBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedSpace,
}) => {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>(
    preselectedSpace?.id || SPACE_OPTIONS[0].id
  );
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('09:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState('1');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentSpace = SPACE_OPTIONS.find((s) => s.id === selectedSpaceId) || SPACE_OPTIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waMessage =
      `*RESERVASI RUANG / SPACE KOLEKTIF YOGYAKARTA*\n\n` +
      `*Nama Pemesan:* ${name}\n` +
      `*Nomor WhatsApp:* ${phone}\n` +
      `*Pilihan Space:* ${currentSpace.name} (${currentSpace.type})\n` +
      `*Tanggal:* ${bookingDate}\n` +
      `*Waktu:* ${bookingTime} WIB\n` +
      `*Jumlah Orang:* ${peopleCount} Orang\n` +
      `*Rate:* IDR ${currentSpace.rate}\n\n` +
      `Mohon konfirmasi ketersediaan space, terima kasih!`;

    const waUrl = `https://wa.me/6282134198905?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-white/20 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-6 text-left relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-[#C5A059]/20 text-[#C5A059]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">Book a Space</h3>
                <p className="text-xs text-zinc-400">CollaborAction Space & Meeting Reservation</p>
              </div>
            </div>

            {/* Select Space Type */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1.5 uppercase">
                Select Space Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SPACE_OPTIONS.map((space) => (
                  <button
                    type="button"
                    key={space.id}
                    onClick={() => setSelectedSpaceId(space.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedSpaceId === space.id
                        ? 'bg-[#C5A059]/15 border-[#C5A059] text-white'
                        : 'bg-zinc-950 border-white/10 text-zinc-400 hover:bg-zinc-800'
                    }`}
                  >
                    <p className="text-xs font-bold truncate">{space.name}</p>
                    <p className="text-[10px] text-[#C5A059] font-mono mt-0.5">IDR {space.rate}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Space features highlight */}
            <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 text-xs space-y-1">
              <p className="font-bold text-white">{currentSpace.name} Summary:</p>
              <p className="text-zinc-400 text-[11px]">{currentSpace.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase">
                  Reservation Date
                </label>
                <input
                  type="date"
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase">
                  Start Time
                </label>
                <input
                  type="time"
                  required
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-zinc-950 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08123456789"
                  className="w-full bg-zinc-950 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-300 mb-1 uppercase">
                Number of People
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
                className="w-full bg-zinc-950 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#C5A059] text-[#0C0D0E] text-xs font-extrabold uppercase tracking-widest hover:bg-[#B38F48] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#C5A059]/20"
            >
              <span>Send Reservation to KOLEKTIF</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 text-[#C5A059] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Booking Request Sent!</h3>
            <p className="text-xs text-zinc-300">
              Your space booking details have been formatted and sent via WhatsApp to KOLEKTIF Administrator. We will confirm your seat promptly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-zinc-800 text-white text-xs font-bold uppercase"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
