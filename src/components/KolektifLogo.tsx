import React from 'react';

interface KolektifLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold' | 'emerald';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const KolektifLogo: React.FC<KolektifLogoProps> = ({
  className = '',
  variant = 'light',
  showText = true,
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizeMap = {
    sm: 'text-sm tracking-widest',
    md: 'text-base font-bold tracking-[0.2em]',
    lg: 'text-2xl font-bold tracking-[0.25em]',
    xl: 'text-3xl font-extrabold tracking-[0.3em]',
  };

  const colorMap = {
    light: {
      iconBg: 'bg-[#C5A059]/10 border border-[#C5A059]/30',
      iconFill: '#C5A059',
      text: 'text-white',
      subtext: 'text-[#C5A059]',
    },
    dark: {
      iconBg: 'bg-black/10 border border-black/20',
      iconFill: '#0A0A0A',
      text: 'text-zinc-900',
      subtext: 'text-[#C5A059]',
    },
    gold: {
      iconBg: 'bg-[#D4AF37]/10 border border-[#D4AF37]/30',
      iconFill: '#D4AF37',
      text: 'text-[#E6C665]',
      subtext: 'text-[#D4AF37]',
    },
    emerald: {
      iconBg: 'bg-[#C5A059]',
      iconFill: '#0C0D0E',
      text: 'text-white',
      subtext: 'text-[#E5C378]',
    }
  };

  const currentColors = colorMap[variant];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Authentic KOLEKTIF Radial Geometric Emblem */}
      <div className={`relative flex items-center justify-center rounded-full p-1.5 transition-transform hover:scale-105 ${sizeMap[size]} ${currentColors.iconBg}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Center Circle */}
          <circle cx="50" cy="50" r="7" fill={currentColors.iconFill} />
          
          {/* 6 Symmetrical Spoke Bars */}
          {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
            <g key={idx} transform={`rotate(${angle} 50 50)`}>
              {/* Radial Pill Bar */}
              <rect x="46.5" y="16" width="7" height="22" rx="3.5" fill={currentColors.iconFill} />
              {/* Outer Dot */}
              <circle cx="50" cy="10" r="4.5" fill={currentColors.iconFill} />
            </g>
          ))}
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-sans font-black ${textSizeMap[size]} ${currentColors.text} uppercase`}>
            KOLEKTIF
          </span>
          <span className={`text-[9px] font-semibold tracking-[0.3em] uppercase ${currentColors.subtext} mt-0.5`}>
            CollaborAction Space
          </span>
        </div>
      )}
    </div>
  );
};
