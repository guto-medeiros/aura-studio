import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ theme = 'auto', className = '', onClick }) => {
  const isDark = theme === 'dark';

  return (
    <Link
      to="/"
      onClick={onClick}
      id="brand-logo"
      className={`group flex items-center gap-3 tracking-[0.25em] text-xs uppercase transition-opacity duration-300 hover:opacity-80 ${className}`}
      aria-label="Aura Studio — Início"
    >
      {/* Minimalist abstract architectural mark: proportions, planes, subtle A glyph */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:scale-105"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="22"
          height="22"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <line
          x1="12"
          y1="3"
          x2="4"
          y2="21"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="12"
          y1="3"
          x2="20"
          y2="21"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="8"
          y1="14"
          x2="16"
          y2="14"
          stroke="#A88C62"
          strokeWidth="1.2"
        />
        <circle
          cx="12"
          cy="9.5"
          r="1"
          fill="#A88C62"
        />
      </svg>

      <div className="flex flex-col font-medium leading-none">
        <span className="font-sans font-semibold tracking-[0.28em] text-[13px]">
          AURA
        </span>
        <span className="font-sans text-[9px] tracking-[0.35em] opacity-60 mt-0.5">
          STUDIO
        </span>
      </div>
    </Link>
  );
};
