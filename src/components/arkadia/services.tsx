"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useComingSoon } from "./coming-soon-modal";

const services = [
  {
    num: "01",
    title: "Лечение зубов",
    text: "Терапия, кариес, пульпит. Лечим так, чтобы зуб жил долго — без торопливости и без лишних манипуляций.",
  },
  {
    num: "02",
    title: "Хирургия",
    text: "Простое и сложное удаление. Там, где можно сохранить зуб — сохраняем. Там, где нельзя — делаем аккуратно.",
  },
  {
    num: "03",
    title: "Протезирование",
    text: "Коронки, мосты, съёмные конструкции. Подбираем решение под образ жизни, а не под прайс-лист.",
  },
  {
    num: "04",
    title: "Имплантация",
    text: "Ставим импланты Straumann и Nobel Biocare — системы, которые носят дольше, чем некоторые браки. Средний стаж хирургов — 12 лет.",
  },
  {
    num: "05",
    title: "Ортодонтия",
    text: "Исправляем прикус у детей и взрослых. Брекеты и элайнеры. Не ради ровных зубов на фото, а ради здоровья на десятилетия вперёд.",
  },
  {
    num: "06",
    title: "Детская стоматология",
    text: "Лечим молочные зубы так, чтобы ребёнок не боялся ходить к врачу всю жизнь. Это важнее, чем один вылеченный зуб.",
  },
  {
    num: "07",
    title: "Гигиена и отбеливание",
    text: "Ультразвук, Air Flow, профессиональная чистка. Возвращаем зубам тот цвет, с которым они вышли из природы.",
  },
  {
    num: "08",
    title: "Пародонтология",
    text: "Лечение дёсен, шинирование, кюретаж. Десна — это фундамент. Без него ни один зуб не удержится.",
  },
];

export function Services() {
  const { open } = useComingSoon();

  return (
    <section className="relative bg-arkadia-ink py-24 md:py-36 overflow-hidden">
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
            III. Что мы возвращаем
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl text-arkadia-ivory leading-[1.05] max-w-4xl text-balance"
          >
            Восемь направлений.{" "}
            <span className="italic text-arkadia-ochre">
              Одна философия.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 font-body text-base text-arkadia-bone/65 max-w-2xl leading-relaxed"
          >
            Мы не показываем цены в лоб. Сначала — разговор, осмотр, план
            лечения. Только потом цифры. Так в медицине принято.
          </motion.p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-arkadia-ochre/10">
          {services.map((service, i) => (
            <motion.button
              key={i}
              onClick={() => open("services")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative text-left p-7 md:p-10 bg-arkadia-ink hover:bg-arkadia-graphite transition-colors duration-500 overflow-hidden"
            >
              {/* Номер */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-sm text-arkadia-ochre/60 tracking-widest">
                  {service.num}
                </span>
                <ArrowUpRight className="h-4 w-4 text-arkadia-bone/30 group-hover:text-arkadia-ochre group-hover:rotate-12 transition-all duration-500" />
              </div>

              {/* Заголовок */}
              <h3 className="font-display text-2xl md:text-3xl text-arkadia-ivory mb-4 group-hover:text-arkadia-ochre transition-colors duration-500">
                {service.title}
              </h3>

              {/* Описание */}
              <p className="font-body text-sm md:text-base text-arkadia-bone/65 leading-relaxed max-w-md">
                {service.text}
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
            onClick={() => open("prices")}
            className="ink-underline font-body text-sm uppercase tracking-[0.25em] text-arkadia-ochre hover:text-arkadia-ivory transition-colors duration-300"
          >
            Смотреть прайс-лист
          </button>
        </motion.div>
      </div>
    </section>
  );
}
