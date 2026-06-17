"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-arkadia-ink py-24 md:py-40 overflow-hidden"
    >
      {/* Декоративный орнамент сверху */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-32 bg-arkadia-ochre/40 origin-center"
      />

      <div className="mx-auto max-w-5xl px-5 md:px-10">
        {/* Маленькая метка */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.4em] text-arkadia-ochre/80">
            I. Кто мы
          </p>
        </motion.div>

        {/* Главный текст */}
        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-arkadia-ivory text-balance"
          >
            В переводе с греческого{" "}
            <span className="italic text-arkadia-ochre">«Аркадия»</span> —{" "}
            <br className="hidden md:block" />
            страна счастливых людей.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-24 origin-left bg-arkadia-ochre/40"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16"
          >
            <p className="font-body text-sm md:text-base text-arkadia-bone/75 leading-relaxed">
              Клиника открылась в 1989 году под именем «Кооператив Стоматолог».
              Два года спустя, в 1991-м, получила имя Аркадия — и с тех пор
              не меняла ни названия, ни принципов.
            </p>
            <p className="font-body text-base md:text-lg text-arkadia-ivory/85 leading-relaxed font-light">
              Сегодня Аркадия — это шесть адресов в историческом центре
              Петербурга, десятки врачей, тысячи пациентов, которые возвращаются
              поколениями. Мы лечим спокойно, без спешки и без давления. Так,
              как подобает клинике с тридцатью шестью годами за плечами.
            </p>
          </motion.div>
        </div>

        {/* Три цифры снизу */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 grid grid-cols-3 gap-6 md:gap-10 border-t border-arkadia-ochre/15 pt-12"
        >
          {[
            { num: "36", label: "лет клинике", sub: "с 1989 года" },
            { num: "6", label: "филиалов", sub: "в Петербурге" },
            { num: "12+", label: "направлений", sub: "стоматология и не только" },
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="font-display text-4xl md:text-6xl text-arkadia-ochre leading-none">
                {item.num}
              </p>
              <p className="mt-3 font-body text-sm text-arkadia-ivory uppercase tracking-wider">
                {item.label}
              </p>
              <p className="mt-1 font-body text-xs text-arkadia-bone/50">
                {item.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
