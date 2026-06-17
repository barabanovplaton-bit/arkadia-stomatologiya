"use client";

import { motion } from "framer-motion";
import { useComingSoon } from "./coming-soon-modal";

const letters = [
  {
    date: "Март, 2024",
    name: "Ирина Васильевна",
    note: "пациент с 2003 года",
    text: "Хожу в Аркадию двадцать один год. Сначала сама, потом привела детей, теперь приводим внучку. Это уже не клиника, это часть семьи. Когда заболел зуб в отпуске, позвонила своему врачу — и по телефону поняла, что делать. Так не бывает нигде.",
  },
  {
    date: "Январь, 2024",
    name: "Алексей М.",
    note: "имплантация, филиал на Невском",
    text: "Боялся имплантации три года. В итоге решился. Всё заняло сорок минут, боли не было вообще. Через неделю забыл, на какой стороне стоит имплант. Жалею, что не сделал раньше.",
  },
  {
    date: "Декабрь, 2023",
    name: "Мария и Анна",
    note: "детская стоматология",
    text: "Дочке пять лет, она впервые не плакала у стоматолога. Ольга Александровна показала инструменты, дала подержать зеркало, всё рассказала. Дочка теперь сама просится «к тёте Оле зубки посмотреть».",
  },
];

export function Letters() {
  const { open } = useComingSoon();

  return (
    <section className="relative bg-arkadia-ink py-24 md:py-36 overflow-hidden">
      {/* Декоративный фоновый орнамент */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url(/arkadia/ornament.png)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Заголовок */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs uppercase tracking-[0.4em] text-arkadia-ochre/80 mb-6"
          >
            V. Письма из Аркадии
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl text-arkadia-ivory leading-[1.05] max-w-4xl text-balance"
          >
            Три письма из{" "}
            <span className="italic text-arkadia-ochre">тридцати тысяч.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 font-body text-base text-arkadia-bone/65 max-w-2xl leading-relaxed"
          >
            Один длинный и искренний отзыв лучше десяти пятизвёздочных. Мы
            выбираем те, что сложились в слова, а не в звёзды.
          </motion.p>
        </div>

        {/* Сетка писем */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {letters.map((letter, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 md:p-10 border border-arkadia-ochre/15 bg-arkadia-graphite/60 backdrop-blur-sm"
            >
              {/* Декоративный уголок */}
              <div className="absolute top-3 left-3 text-arkadia-ochre/30 font-display text-3xl leading-none">
                ❝
              </div>

              {/* Дата */}
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-ochre/60 mb-8 mt-6">
                {letter.date}
              </p>

              {/* Текст письма */}
              <p className="font-display italic text-base md:text-lg text-arkadia-ivory/85 leading-relaxed">
                {letter.text}
              </p>

              {/* Подпись */}
              <div className="mt-8 pt-6 border-t border-arkadia-ochre/15">
                <p className="font-display text-lg text-arkadia-ivory">
                  {letter.name}
                </p>
                <p className="font-body text-xs text-arkadia-bone/55 mt-1">
                  {letter.note}
                </p>
              </div>
            </motion.article>
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
            onClick={() => open("reviews")}
            className="ink-underline font-body text-sm uppercase tracking-[0.25em] text-arkadia-ochre hover:text-arkadia-ivory transition-colors duration-300"
          >
            Все отзывы пациентов
          </button>
        </motion.div>
      </div>
    </section>
  );
}
