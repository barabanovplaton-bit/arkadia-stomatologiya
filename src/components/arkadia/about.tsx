"use client";

import { clinicStats } from "./clinic-data";
import { RevealItem, AnimatedHeadingLetters } from "./animated-text";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-arkadia-paper py-20 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Бейдж "О клинике" */}
        <RevealItem
          y={8}
          className="inline-block px-3 py-1 rounded-full bg-arkadia-blue/10 text-arkadia-blue text-xs font-medium mb-4"
        >
          О клинике
        </RevealItem>

        {/* Заголовок — анимация букв, проигрывается один раз */}
        <AnimatedHeadingLetters
          className="font-display font-bold text-arkadia-graphite leading-[1.1] tracking-tight max-w-4xl mb-10 md:mb-14 text-3xl md:text-5xl lg:text-7xl"
          highlight="«Деми Дети»"
          highlightClass="text-arkadia-blue"
        >
          «Деми Дети» — это «детская стоматология»
        </AnimatedHeadingLetters>

        {/* Текст — отдельный блок */}
        <RevealItem
          y={16}
          className="grid lg:grid-cols-[1fr_1.3fr] gap-8 md:gap-12"
        >
          <p className="font-body text-base md:text-lg text-arkadia-slate leading-relaxed">
            Так переводится с греческого название клиники, которое она получила
            в 1991 году. Прежде она называлась проще — «Кооператив Стоматолог»,
            одна из первых частных стоматологий Ленинграда, открытая в 1989-м.
          </p>
          <p className="font-body text-base md:text-lg text-arkadia-graphite/85 leading-relaxed">
            Сегодня Аркадия — это шесть филиалов по Петербургу, десятки врачей,
            тысячи пациентов, которые возвращаются поколениями. Рейтинг 4.9 на
            Яндекс.Картах — не маркетинг, а 35 лет работы без спешки и без
            лишних манипуляций.
          </p>
        </RevealItem>

        {/* Метрики — каждая плашка отдельно */}
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { value: clinicStats.yearsActive, label: "лет клинике", sub: "с 1989 года" },
            { value: clinicStats.branchesCount, label: "филиалов", sub: "по Петербургу" },
            { value: clinicStats.rating, label: "рейтинг Яндекс", sub: "из 5" },
            { value: clinicStats.reviewsCountTotal, label: "отзывов", sub: "на 3 платформах" },
          ].map((stat, i) => (
            <RevealItem
              key={i}
              y={16}
              delay={i * 0.05}
              className="rounded-2xl bg-arkadia-mist border border-arkadia-graphite/5 p-5 md:p-6"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-arkadia-blue leading-none">
                {stat.value}
              </p>
              <p className="mt-2.5 font-body text-sm text-arkadia-graphite font-medium">
                {stat.label}
              </p>
              <p className="font-body text-xs text-arkadia-slate mt-0.5">
                {stat.sub}
              </p>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
