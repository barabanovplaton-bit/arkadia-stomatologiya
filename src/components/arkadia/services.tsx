"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "./clinic-data";
import { useComingSoon } from "./coming-soon-modal";
import { AnimatedHeadingLetters, RevealItem } from "./animated-text";

// Конфигурация пазла — bento-style
// Чередование через одну: 1,3,5,7 — синие; 2,4,6,8 — белые
const puzzleLayout = [
  { mdCol: 2, blue: true },   // 01 Терапия — широкая, синяя
  { mdCol: 1, blue: false },  // 02 Хирургия — белая
  { mdCol: 1, blue: true },   // 03 Протезирование — синяя
  { mdCol: 2, blue: false },  // 04 Имплантация — широкая, белая
  { mdCol: 1, blue: true },   // 05 Ортодонтия — синяя
  { mdCol: 1, blue: false },  // 06 Детская — белая
  { mdCol: 2, blue: true },   // 07 Диагностика — широкая, синяя
  { mdCol: 2, blue: false },  // 08 Гигиена — широкая, белая
];

export function Services() {
  const { open } = useComingSoon();

  return (
    <section className="relative bg-arkadia-mist py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Заголовок */}
        <div className="mb-10 md:mb-14">
          <motion.span
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-arkadia-blue/10 text-arkadia-blue text-xs font-medium mb-4"
          >
            Услуги
          </motion.span>
          <AnimatedHeadingLetters
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-arkadia-graphite leading-[1.1] tracking-tight max-w-3xl text-balance"
          >
            Восемь направлений лечения
          </AnimatedHeadingLetters>
          <RevealItem
            y={12}
            delay={0.3}
            className="mt-5 font-body text-base md:text-lg text-arkadia-slate max-w-2xl leading-relaxed"
          >
            От детского стоматолога до имплантации. Цены — после осмотра и
            плана лечения.
          </RevealItem>
        </div>

        {/* Пазл услуг — каждая карточка появляется независимо */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[110px] sm:auto-rows-[140px] md:auto-rows-[170px] gap-3 md:gap-4">
          {services.map((service, i) => {
            const layout = puzzleLayout[i] || puzzleLayout[0];
            const isWide = layout.mdCol === 2;
            const isBlue = layout.blue;
            const tabletWide = (i === 0 || i === 3 || i === 6 || i === 7);
            const desktopWide = isWide;

            return (
              <RevealItem
                key={service.id}
                as="button"
                y={20}
                delay={0}
                className={`group text-left rounded-2xl border p-4 md:p-5 hover:shadow-soft-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between ${
                  isBlue
                    ? "bg-arkadia-blue text-white border-transparent"
                    : "bg-white text-arkadia-graphite border-arkadia-graphite/8 hover:border-arkadia-blue/20"
                } ${
                  tabletWide
                    ? "sm:col-span-2"
                    : "sm:col-span-1"
                } ${
                  desktopWide
                    ? "md:col-span-2"
                    : "md:col-span-1"
                } col-span-1`}
                style={{ cursor: "pointer" }}
              >
                <div onClick={() => open("services")}>
                  {/* Верх — номер + стрелка */}
                  <div className="flex items-start justify-between">
                    <span className={`font-display text-xs font-semibold tracking-wider ${
                      isBlue ? "text-white/70" : "text-arkadia-blue"
                    }`}>
                      {service.num}
                    </span>
                    <ArrowUpRight className={`h-3.5 w-3.5 transition-all duration-300 group-hover:rotate-12 ${
                      isBlue ? "text-white/70 group-hover:text-white" : "text-arkadia-ash group-hover:text-arkadia-blue"
                    }`} />
                  </div>

                  {/* Низ — заголовок + описание */}
                  <div>
                    <h3 className={`font-display font-semibold mb-1 transition-colors ${
                      isWide ? "text-base md:text-lg" : "text-sm md:text-base"
                    } ${isBlue ? "text-white" : "group-hover:text-arkadia-blue"}`}>
                      {service.title}
                    </h3>
                    <p className={`font-body leading-relaxed ${
                      isWide ? "text-xs md:text-sm" : "text-[11px] md:text-xs"
                    } ${
                      isBlue ? "text-white/80" : "text-arkadia-slate"
                    } ${
                      "line-clamp-2 md:line-clamp-none"
                    }`}>
                      {service.text}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
