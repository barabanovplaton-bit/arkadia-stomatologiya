"use client";

import { motion } from "framer-motion";

const allBranches = [
  { name: "На Невском", address: "Невский пр., 22–24", phone: "315-34-86" },
  { name: "На Загородном", address: "Загородный пр., 21", phone: "713-21-43" },
  { name: "На Ломоносова", address: "ул. Ломоносова, 26", phone: "764-92-66" },
  { name: "На Васильевском", address: "В.О., ул. Нахимова, 11", phone: "+7 921 778-62-61" },
  { name: "На Шуваловском", address: "Шуваловский пр., 72", phone: "692-79-51" },
  { name: "В Рыбацком", address: "Шлиссельбургский пр., 1", phone: "707-45-32" },
];

export function Footer() {
  return (
    <footer className="relative bg-arkadia-ink border-t border-arkadia-ochre/15 pt-16 pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Верхний блок — лого + цитата + соцсети */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12 border-b border-arkadia-ochre/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center border border-arkadia-ochre/40">
                <span className="font-display text-xl text-arkadia-ochre">А</span>
              </span>
              <div>
                <p className="font-display text-lg tracking-wider text-arkadia-ivory">
                  АРКАДИЯ
                </p>
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-bone/50 mt-0.5">
                  с 1989 года
                </p>
              </div>
            </div>
            <p className="font-display italic text-sm text-arkadia-bone/60 leading-relaxed">
              «Страна счастливых людей» —<br />
              не слоган, а перевод названия.
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-ochre/70 mb-5">
              Единый номер
            </p>
            <a
              href="tel:+78126034050"
              className="font-display text-3xl text-arkadia-ivory hover:text-arkadia-ochre transition-colors duration-300"
            >
              603-40-50
            </a>
            <p className="mt-3 font-body text-xs text-arkadia-bone/50">
              Ежедневно, 9:00 — 21:00
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-ochre/70 mb-5">
              Социальные сети
            </p>
            <a
              href="https://vk.com/aklinika"
              target="_blank"
              rel="noopener noreferrer"
              className="ink-underline inline-block font-body text-sm text-arkadia-ivory hover:text-arkadia-ochre transition-colors duration-300"
            >
              ВКонтакте · vk.com/aklinika
            </a>
            <p className="mt-3 font-body text-xs text-arkadia-bone/50">
              Новости клиники и отзывы пациентов
            </p>
          </div>
        </div>

        {/* Все филиалы */}
        <div className="py-12 border-b border-arkadia-ochre/10">
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-ochre/70 mb-6">
            Все филиалы
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
            {allBranches.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-baseline justify-between gap-3 border-b border-arkadia-ochre/5 pb-3"
              >
                <div>
                  <p className="font-display text-sm text-arkadia-ivory">
                    {b.name}
                  </p>
                  <p className="font-body text-xs text-arkadia-bone/55 mt-0.5">
                    {b.address}
                  </p>
                </div>
                <p className="font-body text-xs text-arkadia-ochre/70 whitespace-nowrap">
                  {b.phone}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Нижний бар */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-arkadia-bone/40 text-center md:text-left">
            © 1989 — {new Date().getFullYear()} · Стоматологическая клиника «Аркадия» ·
            Санкт-Петербург
          </p>
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-bone/30">
            Лицензия № ЛО-78-01-009999
          </p>
        </div>

        {/* Тонкая подпись разработчика — ненавязчиво */}
        <div className="mt-8 text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-bone/25">
            Концепт-сайт · подготовлен как инициативный проект
          </p>
        </div>
      </div>
    </footer>
  );
}
