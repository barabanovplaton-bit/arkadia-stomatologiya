"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Появление при загрузке
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-15%"]);

  const scrollToNext = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-arkadia-blue"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Градиентный фон — синий, чуть светлее к верху */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #A78BFA 0%, #7C3AED 40%, #7C3AED 100%)",
        }}
      />

      {/* Декоративная сетка */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Декоративные круги для глубины — постоянно пульсируют */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl"
      />

      {/* Рейтинг сверху — стеклянная плашка */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ opacity: textOpacity }}
        className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25"
      >
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((s, i) => (
            <motion.svg
              key={s}
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="#D4A537"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 0.85, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            >
              <path d="M12 2 L14.5 9 L22 9 L16 14 L18 22 L12 17 L6 22 L8 14 L2 9 L9.5 9 Z" />
            </motion.svg>
          ))}
        </div>
        <span className="font-body text-[11px] sm:text-xs text-white">
          <strong className="font-semibold">4.9</strong> · 588 отзывов на Яндекс.Картах
        </span>
      </motion.div>

      {/* Центральный контент */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 pt-28 md:pt-32"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-8 bg-white/40" />
          <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.4em] text-white/80">
            стоматологическая клиника
          </span>
          <span className="h-px w-8 bg-white/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-display font-bold text-white text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tight text-center"
        >
          ДЕМИ ДЕТИ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-4 font-body text-xs sm:text-sm uppercase tracking-[0.4em] text-white/80 text-center"
        >
          детская стоматология
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-8 h-px w-24 bg-white/30 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="mt-5 font-body text-sm text-white/70 max-w-md text-center leading-relaxed"
        >
          Детская стоматология в Петербурге.
          <span className="inline-flex items-center gap-2 mx-2 align-middle">
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </span>
          1 филиал.
          <span className="inline-flex items-center gap-2 mx-2 align-middle">
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </span>
          15 лет здоровых детских улыбок.
        </motion.p>

        {/* Кнопки для мобильных — позвонить + записаться */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:hidden"
        >
          <a
            href="tel:+78126034050"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-white/90 text-arkadia-blue font-body text-sm font-medium transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Позвонить
          </a>
          <button
            onClick={scrollToNext}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-arkadia-blue/30 backdrop-blur-md border border-white/30 text-white font-body text-sm font-medium transition-colors duration-200"
          >
            Записаться
          </button>
        </motion.div>
      </motion.div>

      {/* Подсказка скролла — только на десктопе */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        onClick={scrollToNext}
        style={{ opacity: textOpacity }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors"
        aria-label="Листайте вниз"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em]">
          листайте
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2 L8 14 M3 9 L8 14 L13 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </motion.button>
    </section>
  );
}
