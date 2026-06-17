"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Параллакс при скролле
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Параллакс при движении мыши
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const textTranslateX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const textTranslateY = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const title = "АРКАДИЯ";

  const scrollToNext = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-arkadia-ink"
    >
      {/* Фоновое изображение с параллаксом */}
      <motion.div
        style={{ y: bgY, scale: bgScale, x: bgTranslateX, translateY: bgTranslateY }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage: "url(/arkadia/hero-facade.png)",
            filter: "brightness(0.45) contrast(1.1) saturate(0.7)",
          }}
        />
        {/* Затемнение снизу и по краям */}
        <div className="absolute inset-0 bg-gradient-to-t from-arkadia-ink via-arkadia-ink/40 to-arkadia-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-arkadia-ink/60 via-transparent to-arkadia-ink/60" />
      </motion.div>

      {/* Зернистая текстура */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Содержимое */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity, x: textTranslateX, translateY: textTranslateY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
      >
        {/* Маленькая метка сверху */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-arkadia-ochre/60" />
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-arkadia-ochre/90">
            Стоматологическая клиника
          </span>
          <span className="h-px w-12 bg-arkadia-ochre/60" />
        </motion.div>

        {/* Главное название — буква за буквой */}
        <h1 className="font-display font-medium text-arkadia-ivory text-[18vw] leading-[0.9] md:text-[12vw] lg:text-[180px] tracking-[0.05em] gold-glow">
          {title.split("").map((letter, i) => (
            <span
              key={i}
              className="animate-letter inline-block"
              style={{ animationDelay: `${0.8 + i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-6 font-display italic text-xl md:text-2xl text-arkadia-ochre/95 text-balance"
        >
          Страна счастливых людей
        </motion.p>

        {/* Линия */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-px w-24 origin-center bg-arkadia-ochre/40"
        />

        {/* Подпись */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-6 font-body text-xs md:text-sm uppercase tracking-[0.3em] text-arkadia-bone/70"
        >
          Санкт-Петербург · с 1989 года · шесть филиалов
        </motion.p>

        {/* Кнопка «Войти» */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          onClick={scrollToNext}
          className="group mt-14 inline-flex flex-col items-center gap-3"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.35em] text-arkadia-ivory/85 group-hover:text-arkadia-ochre transition-colors duration-500">
            Войти в Аркадию
          </span>
          <span className="relative flex h-12 w-12 items-center justify-center border border-arkadia-ochre/40 group-hover:border-arkadia-ochre transition-all duration-500 rounded-full">
            <motion.svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-arkadia-ochre"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12 4 L12 20 M6 14 L12 20 L18 14" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </span>
        </motion.button>
      </motion.div>

      {/* Тонкий индикатор скролла — вертикальная линия справа */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 origin-top h-32 w-px bg-gradient-to-b from-arkadia-ochre/0 via-arkadia-ochre/40 to-arkadia-ochre/0 hidden md:block"
      />
    </section>
  );
}
