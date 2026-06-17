"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ComingSoonContextValue = {
  open: (section: string) => void;
};

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function useComingSoon() {
  const ctx = useContext(ComingSoonContext);
  if (!ctx) {
    throw new Error("useComingSoon must be used within ComingSoonProvider");
  }
  return ctx;
}

const sectionLabels: Record<string, { title: string; subtitle: string }> = {
  services: {
    title: "Услуги",
    subtitle: "Полный каталог направлений клиники",
  },
  clinics: {
    title: "Филиалы",
    subtitle: "Шесть адресов в историческом центре Петербурга",
  },
  doctors: {
    title: "Врачи",
    subtitle: "Команда специалистов с многолетним опытом",
  },
  reviews: {
    title: "Отзывы",
    subtitle: "Письма пациентов за тридцать шесть лет",
  },
  contacts: {
    title: "Контакты",
    subtitle: "Телефоны, адреса и форма записи",
  },
  appointment: {
    title: "Запись на приём",
    subtitle: "Выберите филиал и удобное время",
  },
  prices: {
    title: "Цены",
    subtitle: "Прозрачный прайс по всем направлениям",
  },
};

export function ComingSoonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [section, setSection] = useState<string>("services");

  const open = (s: string) => {
    setSection(s);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const labels = sectionLabels[section] ?? {
    title: "Раздел",
    subtitle: "Страница в разработке",
  };

  return (
    <ComingSoonContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-arkadia-ink/85 backdrop-blur-md" />

            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-sm border border-arkadia-ochre/30 bg-arkadia-graphite p-8 md:p-12 grain-overlay"
            >
              <CornerOrnament className="left-3 top-3" />
              <CornerOrnament className="right-3 top-3 rotate-90" />
              <CornerOrnament className="left-3 bottom-3 -rotate-90" />
              <CornerOrnament className="right-3 bottom-3 rotate-180" />

              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-arkadia-bone/60 transition-colors hover:text-arkadia-ochre"
                aria-label="Закрыть"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-arkadia-ochre/80">
                  Раздел готовится
                </p>

                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="mt-4 font-display text-3xl md:text-4xl text-arkadia-ivory"
                >
                  {labels.title}
                </motion.h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mx-auto mt-5 h-px w-16 origin-center bg-arkadia-ochre/50"
                />

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-5 font-body text-sm text-arkadia-bone/70 leading-relaxed"
                >
                  {labels.subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mt-8 font-display italic text-base text-arkadia-ochre/90"
                >
                  «Эта земля Аркадии ещё не открыта.»
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.5 }}
                  onClick={() => setIsOpen(false)}
                  className="mt-8 inline-flex items-center justify-center px-6 py-2.5 font-body text-xs uppercase tracking-[0.25em] text-arkadia-ivory border border-arkadia-ochre/40 hover:bg-arkadia-ochre/10 transition-colors duration-300"
                >
                  Вернуться
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ComingSoonContext.Provider>
  );
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute h-5 w-5 text-arkadia-ochre/40 ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      <path d="M2 2 L8 2 M2 2 L2 8" />
      <circle cx="2" cy="2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
