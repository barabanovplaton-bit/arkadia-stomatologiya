"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone } from "lucide-react";
import { useComingSoon } from "./coming-soon-modal";

const branches = [
  {
    name: "На Невском",
    address: "Невский пр., 22–24",
    phone: "8 (812) 315-34-86",
    note: "Главный филиал · 3 и 4 этаж",
    since: "1989",
  },
  {
    name: "На Загородном",
    address: "Загородный пр., 21",
    phone: "8 (812) 713-21-43",
    note: "Центральный район",
    since: "1995",
  },
  {
    name: "На Ломоносова",
    address: "ул. Ломоносова, 26",
    phone: "8 (812) 764-92-66",
    note: "Петроградский район",
    since: "1998",
  },
  {
    name: "На Васильевском",
    address: "В.О., ул. Нахимова, 11",
    phone: "+7 (921) 778-62-61",
    note: "АркадияVIP · с 2004 года",
    since: "2004",
  },
  {
    name: "На Шуваловском",
    address: "Шуваловский пр., 72",
    phone: "8 (812) 692-79-51",
    note: "Приморский район",
    since: "2010",
  },
  {
    name: "В Рыбацком",
    address: "Шлиссельбургский пр., 1",
    phone: "8 (812) 707-45-32",
    note: "Фрунзенский район",
    since: "2013",
  },
];

export function Branches() {
  return (
    <section className="relative bg-arkadia-graphite py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Заголовок секции */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs uppercase tracking-[0.4em] text-arkadia-ochre/80 mb-6"
          >
            II. Шесть земель Аркадии
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl text-arkadia-ivory leading-[1.05] max-w-3xl text-balance"
          >
            Шесть адресов в одном городе.{" "}
            <span className="italic text-arkadia-ochre">
              Все — в историческом центре.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 font-body text-base text-arkadia-bone/65 max-w-2xl leading-relaxed"
          >
            От Невского проспекта до Шлиссельбургского — выберите филиал, к
            которому проще добраться. Везде работают по одним стандартам.
          </motion.p>
        </div>

        {/* Сетка филиалов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {branches.map((branch, i) => (
            <BranchCard key={i} branch={branch} index={i} />
          ))}
        </div>

        {/* Единый номер */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-arkadia-ochre/15 pt-10"
        >
          <p className="font-display italic text-xl md:text-2xl text-arkadia-ivory/90">
            Единый номер для всех филиалов
          </p>
          <a
            href="tel:+78126034050"
            className="font-display text-3xl md:text-4xl text-arkadia-ochre tracking-wide hover:text-arkadia-ivory transition-colors duration-300"
          >
            603-40-50
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function BranchCard({
  branch,
  index,
}: {
  branch: (typeof branches)[number];
  index: number;
}) {
  const { open } = useComingSoon();
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => open("clinics")}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className="group relative text-left p-7 md:p-8 border border-arkadia-ochre/15 bg-arkadia-ink/40 hover:border-arkadia-ochre/40 hover:bg-arkadia-ink/60 transition-colors duration-500 overflow-hidden"
    >
      {/* Римский номер филиала */}
      <div className="absolute right-6 top-6 font-display text-xs text-arkadia-ochre/40 tracking-wider">
        № {toRoman(index + 1)}
      </div>

      {/* Год открытия */}
      <p className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-bone/40 mb-6">
        с {branch.since} года
      </p>

      <h3 className="font-display text-2xl md:text-3xl text-arkadia-ivory mb-1">
        {branch.name}
      </h3>

      <p className="font-body text-xs text-arkadia-ochre/70 italic mb-6">
        {branch.note}
      </p>

      <div className="space-y-2 mt-auto">
        <div className="flex items-start gap-2.5">
          <MapPin className="h-3.5 w-3.5 text-arkadia-ochre/60 mt-0.5 flex-shrink-0" />
          <span className="font-body text-sm text-arkadia-bone/80">
            {branch.address}
          </span>
        </div>
        <div className="flex items-start gap-2.5">
          <Phone className="h-3.5 w-3.5 text-arkadia-ochre/60 mt-0.5 flex-shrink-0" />
          <span className="font-body text-sm text-arkadia-bone/80">
            {branch.phone}
          </span>
        </div>
      </div>

      {/* Тонкая линия снизу, проявляется при наведении */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-arkadia-ochre scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </motion.button>
  );
}

function toRoman(num: number): string {
  const romans: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  for (const [value, symbol] of romans) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}
