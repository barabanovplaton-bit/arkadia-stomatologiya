"use client";

import { motion } from "framer-motion";
import { useComingSoon } from "./coming-soon-modal";

const doctors = [
  {
    initials: "АП",
    name: "Анна Петровна",
    role: "Стоматолог-терапевт",
    since: "в Аркадии с 2003",
    quote: "Зуб, который можно спасти, всегда лучше импланта.",
  },
  {
    initials: "МК",
    name: "Михаил Константинович",
    role: "Хирург-имплантолог",
    since: "в Аркадии с 1998",
    quote: "Хирургия — это не про силу, а про точность.",
  },
  {
    initials: "ЕС",
    name: "Елена Сергеевна",
    role: "Ортодонт",
    since: "в Аркадии с 2007",
    quote: "Прикус формирует лицо. Это всегда больше, чем зубы.",
  },
  {
    initials: "ДВ",
    name: "Дмитрий Валерьевич",
    role: "Стоматолог-ортопед",
    since: "в Аркадии с 2001",
    quote: "Хорошая коронка незаметна. И пациенту, и напротив.",
  },
  {
    initials: "ОА",
    name: "Ольга Александровна",
    role: "Детский стоматолог",
    since: "в Аркадии с 2010",
    quote: "Если ребёнок не испугался в первый визит — я победила.",
  },
  {
    initials: "СН",
    name: "Сергей Николаевич",
    role: "Пародонтолог",
    since: "в Аркадии с 2005",
    quote: "Десна — фундамент. Без него любой зуб временный.",
  },
];

export function Doctors() {
  const { open } = useComingSoon();

  return (
    <section className="relative bg-arkadia-graphite py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Заголовок */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs uppercase tracking-[0.4em] text-arkadia-ochre/80 mb-6"
          >
            IV. Лица Аркадии
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl text-arkadia-ivory leading-[1.05] max-w-4xl text-balance"
          >
            Врачи, которым{" "}
            <span className="italic text-arkadia-ochre">доверяют лица.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 font-body text-base text-arkadia-bone/65 max-w-2xl leading-relaxed"
          >
            Не регалии через запятую, а люди. У каждого — цитата о работе и
            год, с которого он в клинике. Этого достаточно, чтобы понять,
            кому открываешь рот.
          </motion.p>
        </div>

        {/* Сетка врачей */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {doctors.map((doc, i) => (
            <motion.button
              key={i}
              onClick={() => open("doctors")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative text-left p-7 md:p-8 border border-arkadia-ochre/15 bg-arkadia-ink/40 hover:border-arkadia-ochre/40 hover:bg-arkadia-ink/60 transition-all duration-500 overflow-hidden"
            >
              {/* Портрет-плейсхолдер — стилизованная монограмма */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center bg-gradient-to-br from-arkadia-stone to-arkadia-ink border border-arkadia-ochre/30 group-hover:border-arkadia-ochre transition-colors duration-500">
                  <span className="font-display text-2xl md:text-3xl text-arkadia-ochre">
                    {doc.initials}
                  </span>
                  {/* Тонкая рамка */}
                  <div className="absolute inset-1 border border-arkadia-ochre/10 pointer-events-none" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-arkadia-ivory group-hover:text-arkadia-ochre transition-colors duration-500">
                    {doc.name}
                  </h3>
                  <p className="font-body text-xs text-arkadia-bone/60 mt-1">
                    {doc.role}
                  </p>
                </div>
              </div>

              {/* Цитата */}
              <p className="font-display italic text-base md:text-lg text-arkadia-bone/85 leading-snug border-l border-arkadia-ochre/30 pl-4">
                {doc.quote}
              </p>

              <p className="mt-6 font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-ochre/50">
                {doc.since}
              </p>

              {/* Линия снизу */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-arkadia-ochre scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <button
            onClick={() => open("doctors")}
            className="ink-underline font-body text-sm uppercase tracking-[0.25em] text-arkadia-ochre hover:text-arkadia-ivory transition-colors duration-300"
          >
            Вся команда врачей
          </button>
        </motion.div>
      </div>
    </section>
  );
}
