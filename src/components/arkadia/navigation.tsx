"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useComingSoon } from "./coming-soon-modal";

const navItems = [
  { id: "services", label: "Услуги" },
  { id: "clinics", label: "Филиалы" },
  { id: "doctors", label: "Врачи" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useComingSoon();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    open(id);
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-arkadia-ink/85 backdrop-blur-md border-b border-arkadia-ochre/15 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
          {/* Логотип */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3"
            aria-label="Аркадия — на главную"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-arkadia-ochre/40 group-hover:border-arkadia-ochre transition-colors duration-300">
              <span className="font-display text-lg text-arkadia-ochre">А</span>
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base tracking-wider text-arkadia-ivory">
                АРКАДИЯ
              </span>
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-bone/60 mt-0.5">
                с 1989
              </span>
            </div>
          </button>

          {/* Десктоп-навигация */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="ink-underline font-body text-sm text-arkadia-bone/85 hover:text-arkadia-ivory transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("appointment")}
              className="font-body text-xs uppercase tracking-[0.2em] text-arkadia-ink bg-arkadia-ochre hover:bg-arkadia-copper transition-colors duration-300 px-5 py-2.5"
            >
              Записаться
            </button>
          </nav>

          {/* Мобильное меню — кнопка */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-arkadia-ivory p-1"
            aria-label="Открыть меню"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* Мобильное меню */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden bg-arkadia-ink"
          >
            <div className="flex items-center justify-between px-5 py-5 border-b border-arkadia-ochre/15">
              <span className="font-display text-base tracking-wider text-arkadia-ivory">
                АРКАДИЯ
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-arkadia-ivory p-1"
                aria-label="Закрыть меню"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col px-5 py-8 gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  onClick={() => handleNav(item.id)}
                  className="text-left font-display text-3xl text-arkadia-ivory py-3 border-b border-arkadia-ochre/10"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.08, duration: 0.5 }}
                onClick={() => handleNav("appointment")}
                className="mt-8 font-body text-xs uppercase tracking-[0.25em] text-arkadia-ink bg-arkadia-ochre py-4"
              >
                Записаться на приём
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
