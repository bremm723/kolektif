import React, { useState } from 'react';
import { KOLEKTIF_EVENTS } from '../data/kolektifData';
import { KolektifEvent } from '../types';
import { Trophy, Calendar, MapPin, Phone, CheckCircle2, Ticket, Sparkles, X, ArrowUpRight } from 'lucide-react';

export const EventSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<KolektifEvent | null>(null);
  const [registered, setRegistered] = useState(false);
  const [participantName, setParticipantName] = useState('');
  const [participantPhone, setParticipantPhone] = useState('');

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;
    
    // Create WhatsApp registration link
    const waMessage = `Halo KOLEKTIF Yogyakarta, saya ingin mendaftar untuk acara *${selectedEvent.title}*.\n\n` +
      `*Nama:* ${participantName}\n` +
      `*Nomor WA:* ${participantPhone}\n` +
      `*Acara:* ${selectedEvent.title} (${selectedEvent.date})\n` +
      `*Biaya Pendaftaran:* ${selectedEvent.fee}`;

    const waUrl = `https://wa.me/6282134198905?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
    setRegistered(true);
  };

  return (
    <section id="events" className="py-20 bg-[#0B0C0E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest font-bold">
              ★ EVENTS & COLLABORACTION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium mt-1">
              Competitions & Community Gatherings
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md mt-2 md:mt-0 font-light leading-relaxed">
            Inspired by KOLEKTIF official event highlights. Barista battles, pour-over competitions, and acoustic jams.
          </p>
        </div>

        {/* Gallery Art Layout Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KOLEKTIF_EVENTS.map((event) => (
            <div
              key={event.id}
              className="group bg-zinc-900/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Poster Graphic Container with Soft Drop Shadow */}
                <div className="aspect-[4/3] overflow-hidden relative bg-zinc-950">
                  <img
                    src={event.posterImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                  {/* Status Tag */}
                  <div className="absolute top-3 left-3 bg-[#C5A059] text-[#0C0D0E] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                    {event.status}
                  </div>

                  {/* Prize Pool Badge if available */}
                  {event.prizePool && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-black text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center space-x-1">
                      <Trophy className="w-3 h-3" />
                      <span>Prize {event.prizePool}</span>
                    </div>
                  )}

                  {/* Registration Fee Pill */}
                  <div className="absolute bottom-3 left-3 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-[#C5A059] border border-white/20">
                    Fee: {event.fee}
                  </div>
                </div>

                {/* Event Information */}
                <div className="p-6 text-left space-y-3">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {event.subtitle}
                  </p>

                  <div className="space-y-1.5 pt-2 text-[11px] text-zinc-400 border-t border-white/5">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span className="font-medium text-white">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Contact: {event.contactPerson}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setRegistered(false);
                  }}
                  className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-[#C5A059] text-zinc-200 hover:text-[#0C0D0E] text-xs font-extrabold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 border border-white/10 hover:border-[#C5A059]"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Register Event</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Event Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/20 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-6 text-left relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!registered ? (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#C5A059] uppercase tracking-widest">
                  EVENT REGISTRATION • KOLEKTIF
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {selectedEvent.title}
                </h3>
                <p className="text-xs text-zinc-300">
                  {selectedEvent.description}
                </p>

                <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 space-y-1 text-xs text-zinc-300">
                  <p><strong className="text-white">Date:</strong> {selectedEvent.date}</p>
                  <p><strong className="text-white">Fee:</strong> {selectedEvent.fee}</p>
                  <p><strong className="text-white">Location:</strong> {selectedEvent.location}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase">
                      Full Name / Participant
                    </label>
                    <input
                      type="text"
                      required
                      value={participantName}
                      onChange={(e) => setParticipantName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-zinc-950 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={participantPhone}
                      onChange={(e) => setParticipantPhone(e.target.value)}
                      placeholder="08123456789"
                      className="w-full bg-zinc-950 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#C5A059] text-[#0C0D0E] text-xs font-extrabold uppercase tracking-widest hover:bg-[#B38F48] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Confirm & Send to WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 text-[#C5A059] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Registration Sent!</h3>
                <p className="text-xs text-zinc-300">
                  You are being redirected to KOLEKTIF's Official WhatsApp line (0821-3419-8905) to complete payment verification.
                </p>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-2.5 rounded-lg bg-zinc-800 text-white text-xs font-bold uppercase"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
