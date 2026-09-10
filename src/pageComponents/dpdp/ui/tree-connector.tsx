import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface TreeConnectorProps {
  scrollYProgress?: MotionValue<number>;
}

export function TreeConnector({ scrollYProgress }: TreeConnectorProps) {
  const defaultProgress = new MotionValue(1);
  const progress = scrollYProgress || defaultProgress;

  const stemPathLength = useTransform(progress, [0.70, 0.85], [0, 1]);
  const branchPathLength = useTransform(progress, [0.82, 0.98], [0, 1]);
  const dotOpacity = useTransform(progress, [0.92, 1.0], [0, 1]);

  return (
    <div className="w-full max-w-6xl mx-auto relative hidden md:block z-20 pointer-events-none -mt-1 -mb-1">
      <svg
        viewBox="0 0 1000 135"
        className="w-full h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Track Lines (Slate-800 for subtle pre-scroll structure) */}
        <g stroke="#1e293b" strokeWidth="2" strokeLinecap="round">
          <path d="M 500 0 L 500 40" />
          <path d="M 500 40 L 500 55 Q 500 80, 470 80 L 150 80 Q 125 80, 125 105 L 125 130" />
          <path d="M 500 40 L 500 55 Q 500 80, 470 80 L 400 80 Q 375 80, 375 105 L 375 130" />
          <path d="M 500 40 L 500 55 Q 500 80, 530 80 L 600 80 Q 625 80, 625 105 L 625 130" />
          <path d="M 500 40 L 500 55 Q 500 80, 530 80 L 850 80 Q 875 80, 875 105 L 875 130" />
        </g>

        {/* Central Vertical Stem - Sharp crisp 2px line in exact #10b981 */}
        <motion.path
          d="M 500 0 L 500 40"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: stemPathLength }}
        />

        {/* Curved Branch 1 (Far Left -> Card 1) */}
        <motion.path
          d="M 500 40 L 500 55 Q 500 80, 470 80 L 150 80 Q 125 80, 125 105 L 125 130"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: branchPathLength }}
        />

        {/* Curved Branch 2 (Inner Left -> Card 2) */}
        <motion.path
          d="M 500 40 L 500 55 Q 500 80, 470 80 L 400 80 Q 375 80, 375 105 L 375 130"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: branchPathLength }}
        />

        {/* Curved Branch 3 (Inner Right -> Card 3) */}
        <motion.path
          d="M 500 40 L 500 55 Q 500 80, 530 80 L 600 80 Q 625 80, 625 105 L 625 130"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: branchPathLength }}
        />

        {/* Curved Branch 4 (Far Right -> Card 4) */}
        <motion.path
          d="M 500 40 L 500 55 Q 500 80, 530 80 L 850 80 Q 875 80, 875 105 L 875 130"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: branchPathLength }}
        />

        {/* Single Split Junction Dot - Crisp #10b981 */}
        <motion.circle cx="500" cy="40" r="3.5" fill="#10b981" style={{ opacity: stemPathLength }} />

        {/* Crisp Terminal Dots for all 4 cards */}
        <motion.g style={{ opacity: dotOpacity }}>
          {/* Card 1 */}
          <circle cx="125" cy="130" r="4" fill="#10b981" />
          <circle cx="125" cy="130" r="1.5" fill="#020617" />

          {/* Card 2 */}
          <circle cx="375" cy="130" r="4" fill="#10b981" />
          <circle cx="375" cy="130" r="1.5" fill="#020617" />

          {/* Card 3 */}
          <circle cx="625" cy="130" r="4" fill="#10b981" />
          <circle cx="625" cy="130" r="1.5" fill="#020617" />

          {/* Card 4 */}
          <circle cx="875" cy="130" r="4" fill="#10b981" />
          <circle cx="875" cy="130" r="1.5" fill="#020617" />
        </motion.g>
      </svg>
    </div>
  );
}
