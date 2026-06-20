"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-arkadia-blue"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Градиентный фон */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #4338ca 0%, #0000fa 40%, #0000fa 100%)",
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

      {/* Рейтинг сверху */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25"
      >
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#D4A537">
              <path d="M12 2 L14.5 9 L22 9 L16 14 L18 22 L12 17 L6 22 L8 14 L2 9 L9.5 9 Z" />
            </svg>
          ))}
        </div>
        <span className="font-body text-[11px] sm:text-xs text-white">
          <strong className="font-semibold">4.9</strong> · 1856 отзывов на Яндекс.Картах
        </span>
      </motion.div>

      {/* Центральный контент */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 pt-28 md:pt-32">
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
          АРКАДИЯ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-4 font-body text-xs sm:text-sm uppercase tracking-[0.4em] text-white/80 text-center"
        >
          страна счастливых людей
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
          Стоматология в Петербурге.
          <span className="inline-flex items-center gap-2 mx-2 align-middle">
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </span>
          6 филиалов.
          <span className="inline-flex items-center gap-2 mx-2 align-middle">
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </span>
          35 лет, которые не прошли зря.
        </motion.p>

        {/* Кнопки для мобильных */}
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
      </div>

      {/* Подсказка скролла — только на десктопе */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        onClick={scrollToNext}
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
            <path d="M8 2 L8 14 M3 9 L8 14 L13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </motion.button>
    </section>
  );
}
