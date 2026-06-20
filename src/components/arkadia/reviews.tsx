"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { reviews, clinicStats } from "./clinic-data";
import { useComingSoon } from "./coming-soon-modal";
import { AnimatedHeadingLetters, RevealItem } from "./animated-text";

export function Reviews() {
  const { open } = useComingSoon();

  return (
    <section className="relative bg-arkadia-mist py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        {/* Заголовок */}
        <div className="mb-10 md:mb-14 text-center">
          <motion.span
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-arkadia-blue/10 text-arkadia-blue text-xs font-medium mb-4"
          >
            Отзывы пациентов
          </motion.span>
          <AnimatedHeadingLetters
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-arkadia-graphite leading-[1.1] tracking-tight max-w-3xl mx-auto text-balance"
          >
            Что пишут пациенты
          </AnimatedHeadingLetters>
        </div>

        {/* Большой блок с рейтингом — отдельный */}
        <RevealItem
          y={20}
          className="rounded-2xl bg-white border border-arkadia-graphite/8 p-6 md:p-8 shadow-soft mb-8 md:mb-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {/* Большая цифра рейтинга */}
            <div className="text-center">
              <p className="font-display text-6xl md:text-7xl font-bold text-arkadia-blue leading-none">
                {clinicStats.rating}
              </p>
              <div className="flex items-center justify-center gap-0.5 mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-arkadia-gold text-arkadia-gold"
                  />
                ))}
              </div>
              <p className="mt-2 font-body text-xs text-arkadia-slate">
                средний рейтинг
              </p>
            </div>

            {/* Разделитель */}
            <div className="hidden md:block h-20 w-px bg-arkadia-graphite/10" />

            {/* Количество отзывов по платформам */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <a
                href="https://yandex.ru/maps/org/arkadiya/1054218316/reviews/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-arkadia-graphite group-hover:text-arkadia-blue transition-colors">
                  {clinicStats.reviewsCountYandex}
                </p>
                <p className="mt-1 font-body text-[10px] md:text-xs text-arkadia-slate">
                  Яндекс.Карты
                </p>
              </a>
              <a
                href="https://2gis.ru/spb/firm/5348552838510576"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-arkadia-graphite group-hover:text-arkadia-blue transition-colors">
                  {clinicStats.reviewsCount2gis}
                </p>
                <p className="mt-1 font-body text-[10px] md:text-xs text-arkadia-slate">
                  2ГИС
                </p>
              </a>
              <a
                href="https://www.google.com/maps/search/Аркадия+стоматология+Санкт-Петербург"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-arkadia-graphite group-hover:text-arkadia-blue transition-colors">
                  {clinicStats.reviewsCountGoogle}
                </p>
                <p className="mt-1 font-body text-[10px] md:text-xs text-arkadia-slate">
                  Google
                </p>
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-arkadia-graphite/8 text-center">
            <div className="flex items-center justify-center gap-3">
              <p className="font-display text-3xl md:text-4xl font-bold text-arkadia-blue">
                {clinicStats.reviewsCountTotal}
              </p>
              <p className="font-body text-sm text-arkadia-slate text-left">
                всего отзывов<br />на 3 платформах
              </p>
            </div>
          </div>
        </RevealItem>

        {/* Отзывы — каждый в один ряд, вертикально, каждый появляется независимо */}
        <div className="space-y-4 md:space-y-5">
          {reviews.map((review, i) => (
            <RevealItem key={i} y={20}>
              <ReviewCardContent review={review} />
            </RevealItem>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:mt-12 text-center"
        >
          <a
            href="https://yandex.ru/maps/org/arkadiya/1054218316/reviews/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-arkadia-blue hover:text-arkadia-blue-soft transition-colors"
          >
            Все отзывы на Яндекс.Картах
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ReviewCardContent({
  review,
}: {
  review: typeof import("./clinic-data").reviews[number];
}) {
  return (
    <div
      className="rounded-2xl bg-white border border-arkadia-graphite/8 p-6 md:p-8 shadow-soft"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        {/* Левая колонка — звёзды + дата в 2 строки */}
        <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2 md:gap-3 md:w-32 md:flex-shrink-0">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="h-3.5 w-3.5 fill-arkadia-gold text-arkadia-gold"
              />
            ))}
          </div>
          {/* Дата в 2 строки — месяц над годом */}
          <div className="text-right md:text-left">
            <p className="font-display text-sm font-semibold text-arkadia-graphite leading-tight">
              {review.dateMonth}
            </p>
            <p className="font-body text-xs text-arkadia-slate leading-tight mt-0.5">
              {review.dateYear}
            </p>
          </div>
        </div>

        {/* Вертикальный разделитель на десктопе */}
        <div className="hidden md:block w-px self-stretch bg-arkadia-graphite/8" />

        {/* Правая колонка — текст + подпись */}
        <div className="flex-1">
          <p className="font-body text-base md:text-lg text-arkadia-graphite/85 leading-relaxed">
            «{review.text}»
          </p>
          <div className="mt-4 pt-4 border-t border-arkadia-graphite/8">
            <p className="font-display text-base font-semibold text-arkadia-graphite">
              {review.name}
            </p>
            <p className="font-body text-xs text-arkadia-slate mt-1">
              {review.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
