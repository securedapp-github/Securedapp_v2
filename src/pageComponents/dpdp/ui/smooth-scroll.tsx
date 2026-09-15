import React, { forwardRef, ReactNode } from 'react';
import { SweepHoverButton } from './sweep-hover-button';

interface SmoothScrollProps {
  onCtaClick?: () => void;
  engineNode?: ReactNode;
  faqNode?: ReactNode;
  theme?: 'dark' | 'light';
}

const SmoothScrollCTA = forwardRef<HTMLElement, SmoothScrollProps>(({ onCtaClick, engineNode, faqNode, theme = 'dark' }, ref) => {
  return (
    <div className="w-full relative">
      <main ref={ref}>
        <article>
          {/* Section 1: Interactive Engine */}
          <section className={`min-h-screen w-full flex flex-col items-center justify-center sticky top-0 py-20 transition-colors duration-300 ${
            theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-slate-950 text-white'
          }`}>
            <div className={`absolute bottom-0 left-0 right-0 top-0 bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 ${
              theme === 'light'
                ? 'bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]'
                : 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]'
            }`}></div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
              {engineNode}
            </div>
          </section>

          {/* Section 2: FAQ */}
          <section className={`min-h-screen sticky top-0 rounded-t-3xl overflow-y-auto overflow-x-hidden pt-20 pb-20 transition-colors duration-300 ${
            theme === 'light'
              ? 'bg-slate-50 text-slate-900 shadow-[0_-10px_40px_rgba(0,0,0,0.06)]'
              : 'bg-slate-950 text-white shadow-[0_-10px_40px_rgba(0,0,0,0.5)]'
          }`}>
            <div className={`absolute bottom-0 left-0 right-0 top-0 bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 ${
              theme === 'light'
                ? 'bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]'
                : 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]'
            }`}></div>
            <div className='relative z-10 w-full max-w-7xl mx-auto px-4'>
              {faqNode}
            </div>
          </section>

          {/* Section 3: Final CTA */}
          <section className='text-slate-950 min-h-screen w-full bg-[#10b981] flex flex-col items-center justify-center sticky top-0 rounded-t-3xl shadow-[0_-10px_50px_rgba(16,185,129,0.35)]'>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
            
            <div className="flex flex-col items-center justify-center relative z-10 max-w-4xl mx-auto px-6 h-full text-center">
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-center text-slate-950">
                Stop Guessing.<br/>Start Complying.
              </h2>
              <p className="text-lg md:text-xl font-medium mb-10 text-center text-slate-900 max-w-2xl mx-auto">
                Don't risk a ₹250 crore penalty. Let our experts audit your current setup and provide a free action plan.
              </p>
              
              <div className="z-10 mt-2">
                <SweepHoverButton
                  onClick={onCtaClick}
                  fill="#090d16"
                  textColor="#ffffff"
                  sweepColor="#10b981"
                  sweepTextColor="#020617"
                  className="px-8 py-5 font-extrabold text-sm md:text-base uppercase tracking-wider shadow-[0_10px_35px_rgba(0,0,0,0.35)] border-2 border-[#090d16] rounded-2xl"
                  label="Get My Free DPDP Audit Report &rarr;"
                />
              </div>
              
              <p className="text-sm text-slate-700 font-semibold mt-8 text-center">
                100% Free &middot; No commitment &middot; Delivered in 24 hours
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
});

SmoothScrollCTA.displayName = 'SmoothScrollCTA';

export { SmoothScrollCTA };
