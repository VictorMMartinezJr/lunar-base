import React from "react";

interface StarLinkProps {
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isActive?: boolean;
  children: React.ReactNode;
}

export const StarHoverLink = ({
  href,
  className,
  onClick,
  isActive = false,
  children,
}: StarLinkProps) => {
  // These are the classes that show the stars.
  // If the link hovered OR if it's the active page then scale-100 & opacity-100.
  const activeStarClasses = isActive
    ? "scale-100 opacity-100"
    : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-block px-4 py-2 ${className}`}
    >
      {/* Star 1: Top Left */}
      <span
        className={`absolute -top-1 left-1 pointer-events-none text-[10px] text-white/80 transition-all duration-300 animate-[float1_5s_ease-in-out_infinite] ${activeStarClasses}`}
      >
        ✦
      </span>

      {/* Star 2: Bottom Right */}
      <span
        className={`absolute -bottom-1 right-1 pointer-events-none text-[8px] text-sky-200/90 transition-all duration-300 delay-75 animate-[float2_6s_ease-in-out_infinite] ${activeStarClasses}`}
      >
        ✦
      </span>

      {/* Star 3: Top Right */}
      <span
        className={`absolute top-1 right-2 pointer-events-none text-[6px] text-white transition-all duration-300 delay-150 animate-[float3_4s_ease-in-out_infinite] ${activeStarClasses}`}
      >
        ★
      </span>

      {/* Star 4: Bottom Left */}
      <span
        className={`absolute -bottom-1 left-1/4 pointer-events-none text-[6px] text-white transition-all duration-300 delay-150 animate-[float4_4.5s_ease-in-out_infinite] ${activeStarClasses}`}
      >
        ★
      </span>

      {/* Link */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white/90">
        {children}
      </span>
    </a>
  );
};
