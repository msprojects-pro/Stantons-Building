import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Bold, premium "S" monogram logo */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-green to-brand-dark border-2 border-brand-accent/40 shadow-md">
        <span className="font-display font-black text-2xl text-brand-accent tracking-tighter select-none">
          S
        </span>
        {/* Subtle decorative dot/accent inside */}
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-accent" />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white leading-tight">
            STANTONS
          </span>
          <span className="font-sans text-[10px] md:text-xs tracking-wider text-brand-accent font-semibold uppercase leading-none">
            Building & Landscaping
          </span>
        </div>
      )}
    </div>
  );
};
