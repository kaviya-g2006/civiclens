import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
  variant?: 'full' | 'icon-only';
}

export const CivicEmblem: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14'
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Handle (Bottom-Left Diagonal Pill) */}
        <rect
          x="23"
          y="65"
          width="13"
          height="24"
          rx="6.5"
          transform="rotate(42 23 65)"
          fill="#1E6594"
        />

        {/* Outer Magnifying Glass Rim */}
        <path
          d="M62 14 C76 17 86 29 86 44 C86 60.5 72.5 74 56 74 C39.5 74 26 60.5 26 44 C26 29 36 17 50 14"
          stroke="#1E6594"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Inner Curved Accent (Lens Sheen Upper-Left) */}
        <path
          d="M38 27 C34 32 32 38 32 44"
          stroke="#1E6594"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Left Citizen - Head */}
        <circle cx="46" cy="37" r="5.5" fill="#1E6594" />

        {/* Left Citizen - Body */}
        <path
          d="M39 58 C39 48 44 45 47.5 45 C51 45 54 48 54 58 Z"
          fill="#1E6594"
        />
        {/* Left Citizen - Shoulder contour */}
        <path
          d="M39 50 C37 51 35 53 34 56 C37 55 40 54 43 54"
          stroke="#1E6594"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Right Citizen (Reaching) - Head */}
        <circle cx="56.5" cy="29.5" r="5.5" fill="#1E6594" />

        {/* Right Citizen - Body with Reaching Arm */}
        <path
          d="M50.5 58 C50.5 45.5 54.5 40 60 35 C64.5 31 67.5 24.5 68.5 21.5 C68.5 25.5 65 34 62 42 C59.5 48.5 59 53 58 58 Z"
          fill="#1E6594"
        />

        {/* Green Leaf Accent on Right Flank */}
        <path
          d="M60.5 39 C65.5 44 65 52 59.5 57 C63.5 51.5 64 44.5 60.5 39 Z"
          fill="#5EA34B"
        />
      </svg>
    </div>
  );
};

export const CivicLogo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
  theme = 'light',
  variant = 'full'
}) => {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const isDark = theme === 'dark';

  if (variant === 'icon-only') {
    return <CivicEmblem size={size} className={className} />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem matching user uploaded logo */}
      <CivicEmblem size={size} />

      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <span className={`font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#0F172A]'} ${textSizes[size]}`}>
            Civic<span className={isDark ? 'text-blue-400' : 'text-[#1E6594]'}>Lens</span>
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] mt-1 font-medium tracking-widest uppercase ${isDark ? 'text-[#94A3B8]' : 'text-slate-500'}`}>
            Discover • Prepare • Verify
          </span>
        )}
      </div>
    </div>
  );
};

