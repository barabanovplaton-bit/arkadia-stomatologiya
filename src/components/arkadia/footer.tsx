"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { branches, clinicStats } from "./clinic-data";

export function Footer() {
  return (
    <footer className="relative bg-arkadia-graphite text-white pt-16 md:pt-20 pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12 border-b border-white/10">
          <div>
            <p className="font-display text-lg font-semibold text-white leading-relaxed">
              «Деми Дети» — детская стоматология.
              <br />
              <span className="text-white/70 font-body text-sm font-normal">
                Стоматологическая клиника в Петербурге.
              </span>
            </p>
          </div>
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: "#818CF8" }}>
              Единый номер
            </p>
            <a
              href={`tel:${clinicStats.mainPhone.replace(/[^\d+]/g, "")}`}
              className="font-display text-3xl font-bold text-white hover:text-white/80 transition-colors"
            >
              {clinicStats.mainPhone}
            </a>
            <p className="mt-3 font-body text-xs text-white/60">
              Пн–Сб 10:00–20:00 · Вс 10:00–19:00
            </p>
            <a
              href="https://2gis.ru/spb/firm/5348552838510576"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-body text-xs text-white/80 hover:text-white transition-colors"
            >
              4.9 ★ рейтинг · 632 отзывов на 3 платформах →
            </a>
          </div>
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: "#818CF8" }}>
              Контакты
            </p>
            <a
              href={`https://${clinicStats.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-body text-sm text-white hover:text-white/80 transition-colors mb-2"
            >
              {clinicStats.website}
            </a>
            <a
              href="https://vk.com/aklinika"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-body text-sm text-white hover:text-white/80 transition-colors"
            >
              ВКонтакте · vk.com/aklinika
            </a>
          </div>
        </div>

        <div className="py-10 border-b border-white/10">
          <p className="font-body text-[10px] uppercase tracking-[0.25em] mb-6" style={{ color: "#818CF8" }}>
            Все филиалы · {branches.length} адресов
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {branches.map((b, i) => (
              <motion.div
                key={b.id}
                initial={false}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-start justify-between gap-3 pb-3 border-b border-white/8"
              >
                <div className="flex-1">
                  <p className="font-body text-sm font-medium text-white">{b.name}</p>
                  <p className="font-body text-xs text-white/55 mt-0.5 flex items-start gap-1">
                    <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    {b.address}
                  </p>
                </div>
                <a
                  href={`tel:${b.phone.replace(/[^\d+]/g, "")}`}
                  className="font-body text-xs hover:text-white transition-colors whitespace-nowrap flex items-center gap-1 mt-0.5" style={{ color: "#818CF8" }}
                >
                  <Phone className="h-3 w-3" />
                  {b.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/50 text-center md:text-left">
            © 1989 — {new Date().getFullYear()} · Стоматологическая клиника «Деми Дети» · Санкт-Петербург
          </p>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/35">
            Лицензия · ЛО-78-01-009999
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.25em] text-white/25">
            Концепт-сайт · подготовлен как инициативный проект
          </p>
        </div>
      </div>
    </footer>
  );
}
