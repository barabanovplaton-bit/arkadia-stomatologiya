"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useComingSoon } from "./coming-soon-modal";
import { clinicStats } from "./clinic-data";

const navItems = [
  { id: "about", label: "О клинике", scrollTo: true },
  { id: "history", label: "История", scrollTo: true },
  { id: "branches", label: "Филиалы", scrollTo: true },
  { id: "services", label: "Услуги", scrollTo: false },
  { id: "doctors", label: "Врачи", scrollTo: false },
  { id: "reviews", label: "Отзывы", scrollTo: false },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { open } = useComingSoon();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "history", "branches", "services", "doctors", "reviews"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (item: { id: string; scrollTo: boolean }) => {
    if (item.scrollTo) {
      const el = document.getElementById(item.id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      open(item.id);
    }
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleAppointment = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Плавающее меню-таблетка — десктоп */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center transition-all duration-500 ${
          scrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div className="flex items-center gap-1 px-2 py-2 rounded-[14px] bg-white/85 backdrop-blur-xl border border-arkadia-graphite/10 shadow-soft whitespace-nowrap">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center h-8 w-8 rounded-[10px] hover:bg-arkadia-mist transition-colors"
            aria-label="Аркадия — на главную"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-arkadia-blue text-white font-display text-sm font-bold">
              А
            </span>
          </button>
          <div className="w-px h-6 bg-arkadia-graphite/10 mx-0.5" />
          <nav className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`px-3 py-1.5 rounded-[10px] font-body text-[13px] font-medium transition-all duration-200 whitespace-nowrap ${
                  activeSection === item.id
                    ? "bg-arkadia-blue text-white"
                    : "text-arkadia-graphite/80 hover:bg-arkadia-mist hover:text-arkadia-blue"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="w-px h-6 bg-arkadia-graphite/10 mx-0.5" />
          <button
            onClick={handleAppointment}
            className="px-3.5 py-1.5 rounded-[10px] font-body text-[13px] font-medium text-white bg-arkadia-blue hover:bg-arkadia-blue-soft transition-colors animate-pulse-scale whitespace-nowrap"
          >
            Записаться
          </button>
        </div>
      </motion.div>

      {/* Мобильная кнопка-бургер — скрыта когда меню открыто */}
      <motion.button
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: mobileOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setMobileOpen(true)}
        className={`fixed top-4 right-4 z-50 md:hidden flex items-center justify-center h-11 w-11 rounded-xl bg-white text-arkadia-blue shadow-soft-md border border-white/30 transition-opacity duration-200 ${
          mobileOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-label="Открыть меню"
      >
        <Menu className="h-5 w-5" />
      </motion.button>

      {/* Мобильное меню */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] md:hidden bg-arkadia-mist"
          >
            <div className="flex items-center justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center h-11 w-11 rounded-xl bg-white text-arkadia-blue shadow-soft-md border border-arkadia-graphite/10"
                aria-label="Закрыть меню"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col px-4 py-6 gap-1 overflow-y-auto h-[calc(100vh-64px)]">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.4 }}
                  onClick={() => handleNavClick(item)}
                  className="text-left font-display text-2xl font-semibold text-arkadia-graphite py-3 border-b border-arkadia-graphite/8"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href={`tel:${clinicStats.mainPhone.replace(/[^\d+]/g, "")}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + navItems.length * 0.07, duration: 0.4 }}
                className="flex items-center gap-2.5 mt-6 font-body text-base font-medium text-arkadia-blue"
              >
                <Phone className="h-4 w-4" />
                {clinicStats.mainPhone}
              </motion.a>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + (navItems.length + 1) * 0.07, duration: 0.4 }}
                onClick={handleAppointment}
                className="mt-5 font-body text-sm font-medium text-white bg-arkadia-blue py-4 rounded-[14px]"
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
