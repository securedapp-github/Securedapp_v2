import { motion } from "framer-motion";
import React, { useRef, useState, useEffect, type CSSProperties } from "react";

interface SweepHoverButtonProps {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  fill?: string;
  textColor?: string;
  sweepColor?: string;
  sweepTextColor?: string;
  radius?: number | string;
  transition?: any;
  className?: string;
  style?: CSSProperties;
}

export function SweepHoverButton({
  label = "Get Your Free Audit Report",
  children,
  onClick,
  fill = "#10b981",
  textColor = "#020617",
  sweepColor = "#0f172a",
  sweepTextColor = "#10b981",
  radius = 9999,
  transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.35,
  },
  className = "",
  style,
}: SweepHoverButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hover, setHover] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0, d: 0 });
  const hoverRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function onMove(event: PointerEvent) {
      const rect = node.getBoundingClientRect();

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (inside !== hoverRef.current) {
        const lx = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
        const ly = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
        const d = 2.5 * Math.hypot(rect.width, rect.height);
        setOrigin({ x: lx, y: ly, d });
        hoverRef.current = inside;
        setHover(inside);
      }
    }

    function onLeave() {
      hoverRef.current = false;
      setHover(false);
    }

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center overflow-hidden cursor-pointer ${className}`}
      style={{
        boxSizing: "border-box",
        borderRadius: radius,
        background: fill,
        textDecoration: "none",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {/* Radial Sweep Expand Layer */}
      <motion.span
        aria-hidden
        initial={false}
        animate={{ scale: hover ? 1 : 0 }}
        transition={transition}
        style={{
          position: "absolute",
          top: origin.y,
          left: origin.x,
          width: origin.d,
          height: origin.d,
          marginLeft: -origin.d / 2,
          marginTop: -origin.d / 2,
          borderRadius: "50%",
          background: sweepColor,
          transformOrigin: "center",
          pointerEvents: "none",
        }}
      />

      {/* Button Content Layer */}
      <motion.span
        initial={false}
        animate={{ color: hover ? sweepTextColor : textColor }}
        transition={transition}
        style={{ position: "relative", zIndex: 1 }}
        className="flex items-center justify-center gap-2"
      >
        {children || label}
      </motion.span>
    </motion.button>
  );
}
