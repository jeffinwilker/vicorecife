"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  scale?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
  duration = 820,
  scale = 1,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motion.matches) {
      setIsVisible(true);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(0, ${distance}px, 0) scale(${scale})`,
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
