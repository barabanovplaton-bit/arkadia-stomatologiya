"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { history } from "./clinic-data";
import { AnimatedHeadingLetters } from "./animated-text";

export function HistoryTrail() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = history.timeline.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const nextStep = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const totalWidth = 100;
  const stepWidth = totalWidth / (totalSteps - 1);
  const points = history.timeline.map((_, i) => ({
    x: 5 + i * stepWidth * 0.9,
  }));

  const currentItem = history.timeline[currentStep];
  const POPUP_WIDTH = 260;
  const ARROW_WIDTH = 14;
  const currentPointX = (points[currentStep].x / 100) * containerWidth;
  const popupLeftPx = Math.max(0, Math.min(containerWidth - POPUP_WIDTH, currentPointX - POPUP_WIDTH / 2));
  const arrowLeftPx = currentPointX - ARROW_WIDTH / 2;

  return (
    <section id="history" className="relative bg-arkadia-mist py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-arkadia-blue/10 text-arkadia-blue text-xs font-medium mb-4">
            История клиники
          </span>
          <AnimatedHeadingLetters
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-arkadia-graphite leading-[1.1] tracking-tight max-w-3xl mx-auto text-balance"
          >
            35 лет по одной шкале
          </AnimatedHeadingLetters>
        </motion.div>

        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto pt-48 md:pt-56">
          <div className="absolute inset-x-0 top-0 h-40 md:h-44">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
                style={{ left: `${popupLeftPx}px`, width: `${POPUP_WIDTH}px`, maxWidth: "90vw" }}
              >
                <div className="text-center mb-2">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="font-display text-3xl md:text-4xl font-bold text-arkadia-blue leading-none"
                  >
                    {currentItem.year}
                  </motion.p>
                </div>
                <div className="rounded-2xl bg-white border border-arkadia-graphite/8 p-4 md:p-5 shadow-soft-md">
                  <p className="font-body text-xs md:text-sm text-arkadia-graphite leading-relaxed text-center">
                    {currentItem.event}
                  </p>
                </div>
                <div className="absolute top-full" style={{ left: `${arrowLeftPx - popupLeftPx}px` }}>
                  <svg width={ARROW_WIDTH} height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M 7 10 L 0 0 L 14 0 Z" fill="#FFFFFF" />
                  </svg>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative h-1 w-full bg-arkadia-graphite/10 rounded-full">
            <motion.div
              className="absolute top-0 left-0 h-full bg-arkadia-blue rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${points[currentStep].x}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {points.map((p, i) => {
              const isPassed = i <= currentStep;
              const isCurrent = i === currentStep;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 group"
                  style={{ left: `${p.x}%` }}
                  aria-label={`Перейти к ${history.timeline[i].year} году`}
                >
                  <span className={`absolute top-6 left-1/2 -translate-x-1/2 font-display text-xs font-semibold whitespace-nowrap transition-colors duration-300 ${
                    isPassed ? "text-arkadia-blue" : "text-arkadia-ash"
                  }`}>
                    {history.timeline[i].year}
                  </span>
                  {isCurrent && (
                    <motion.span
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-arkadia-blue/30"
                      animate={{ width: [16, 36, 16], height: [16, 36, 16], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                  <span className={`block rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                    isCurrent ? "bg-arkadia-blue border-arkadia-blue w-5 h-5"
                    : isPassed ? "bg-arkadia-blue border-arkadia-blue w-3 h-3"
                    : "bg-white border-arkadia-ash w-3 h-3"
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16 md:mt-20 flex items-center justify-center gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center justify-center h-11 w-11 rounded-full bg-white border border-arkadia-graphite/10 text-arkadia-graphite hover:border-arkadia-blue hover:text-arkadia-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Предыдущий шаг"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="px-4 py-2 rounded-full bg-white border border-arkadia-graphite/10 font-body text-xs text-arkadia-slate whitespace-nowrap">
            <span className="font-semibold text-arkadia-graphite">{currentStep + 1}</span> / {totalSteps}
          </div>
          <button
            onClick={nextStep}
            disabled={currentStep === totalSteps - 1}
            className="flex items-center gap-2 px-6 h-11 rounded-full bg-arkadia-blue text-white font-body text-sm font-medium hover:bg-arkadia-blue-soft disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            Следующий шаг
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
