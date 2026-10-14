"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";

type TiltProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Maximum tilt in degrees. Keep it small. */
  max?: number;
};

/**
 * Gives a card a slight perspective tilt that follows the pointer.
 * Does nothing on touch devices or when the visitor prefers reduced motion,
 * so the card simply stays flat (and still keeps its shadow depth).
 *
 * Children with the `tilt-lift` class float slightly above the card surface.
 */
export default function Tilt({ children, max = 4, className = "", ...rest }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !enabled.current) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
  };

  const onPointerLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div className="[perspective:900px]">
      <div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className={`tilt-card ${className}`}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
