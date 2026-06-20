"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, X, Navigation } from "lucide-react";
import { branches, type Branch } from "./clinic-data";
import { AnimatedHeadingLetters } from "./animated-text";

const branchCoords: Record<string, { lat: number; lng: number; label: string }> = {
  tramvayny: { lat: 59.8470, lng: 30.2650, label: "Трамвайный" },
};

function buildYandexMapUrl(): string {
  const points = branches
    .map((b) => {
      const c = branchCoords[b.id];
      return `${c.lng},${c.lat},pm2rdm`;
    })
    .join("~");
  return `https://yandex.ru/map-widget/v1/?ll=30.265000%2C59.847000&z=13&pt=${encodeURIComponent(points)}`;
}

export function BranchMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const mapUrl = useMemo(() => buildYandexMapUrl(), []);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const selectedBranch = selected ? branches.find((b) => b.id === selected) : null;

  return (
    <section id="branches" className="relative bg-arkadia-paper py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 md:mb-14">
          <motion.span
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-arkadia-blue/10 text-arkadia-blue text-xs font-medium mb-4"
          >
            Филиалы
          </motion.span>
          <AnimatedHeadingLetters
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-arkadia-graphite leading-[1.1] tracking-tight max-w-3xl text-balance"
          >
            6 точек на карте Петербурга
          </AnimatedHeadingLetters>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 font-body text-base md:text-lg text-arkadia-slate max-w-2xl leading-relaxed"
          >
            Листайте карту, увеличивайте. Адрес и телефон — нажмите на карточку филиала под картой.
          </motion.p>
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden border border-arkadia-graphite/10 shadow-soft-lg bg-arkadia-mist max-w-5xl mx-auto"
        >
          <div ref={mapContainerRef} className="relative aspect-square sm:aspect-[4/3] md:aspect-[16/9] h-auto max-h-[500px] min-h-[360px]">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ position: "relative", border: "none" }}
              title="Карта филиалов клиники «Аркадия» в Санкт-Петербурге"
            />
          </div>
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-arkadia-graphite/10 shadow-soft pointer-events-none">
            <span className="flex h-2 w-2 rounded-full bg-arkadia-blue animate-dot-pulse" />
            <span className="font-body text-xs text-arkadia-graphite">
              6 филиалов · нажмите на карточку ниже
            </span>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {branches.map((branch, i) => (
            <button
              key={branch.id}
              onClick={() => setSelected(branch.id)}
              onMouseEnter={() => setHovered(branch.id)}
              onMouseLeave={() => setHovered(null)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                selected === branch.id
                  ? "bg-arkadia-blue text-white border-arkadia-blue shadow-soft-md"
                  : "bg-white border-arkadia-graphite/8 hover:border-arkadia-blue/30 hover:shadow-soft"
              }`}
            >
              <p className={`font-display text-sm font-semibold ${
                selected === branch.id ? "text-white" : "text-arkadia-graphite"
              }`}>
                {branch.name}
              </p>
              <p className={`mt-1 font-body text-xs ${
                selected === branch.id ? "text-white/80" : "text-arkadia-slate"
              }`}>
                {branch.metro}
              </p>
            </button>
          ))}
        </div>
      </div>

      <BranchModal branch={selectedBranch} onClose={() => setSelected(null)} />
    </section>
  );
}

function BranchModal({ branch, onClose }: { branch: Branch | null; onClose: () => void }) {
  if (!branch) return null;

  return (
    <AnimatePresence>
      {branch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-arkadia-graphite/40 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0, y: 6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-arkadia-paper p-6 md:p-8 shadow-soft-lg my-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex items-center justify-center h-9 w-9 rounded-lg bg-arkadia-mist text-arkadia-slate hover:text-arkadia-blue transition-colors"
              aria-label="Закрыть"
            >
              <X className="h-4 w-4" />
            </button>
            <span className="inline-block px-2.5 py-1 rounded-full bg-arkadia-blue/10 text-arkadia-blue text-[11px] font-medium mb-3">
              Филиал
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-arkadia-graphite pr-10">
              {branch.name}
            </h3>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-arkadia-blue/10 text-arkadia-blue flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-body text-xs text-arkadia-slate">Адрес</p>
                  <p className="font-body text-sm text-arkadia-graphite font-medium">{branch.address}</p>
                  <p className="font-body text-xs text-arkadia-slate mt-0.5">м. {branch.metro} · {branch.district} район</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-arkadia-blue/10 text-arkadia-blue flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-body text-xs text-arkadia-slate">Телефон</p>
                  <a href={`tel:${branch.phone.replace(/[^\d+]/g, "")}`} className="font-body text-sm text-arkadia-blue font-medium hover:underline">
                    {branch.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-arkadia-blue/10 text-arkadia-blue flex-shrink-0">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-body text-xs text-arkadia-slate">Часы работы</p>
                  <p className="font-body text-sm text-arkadia-graphite">{branch.hours}</p>
                </div>
              </div>
            </div>
            <a
              href={`https://yandex.ru/maps/?text=${encodeURIComponent(`Аркадия стоматология ${branch.address}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-arkadia-mist text-arkadia-blue font-body text-sm font-medium hover:bg-arkadia-sky transition-colors"
            >
              <Navigation className="h-3.5 w-3.5" />
              Построить маршрут в Яндекс.Картах
            </a>
            <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
              }}
              className="mt-3 w-full px-4 py-3 rounded-xl bg-arkadia-blue text-white font-body text-sm font-medium hover:bg-arkadia-blue-soft transition-colors"
            >
              Записаться в этот филиал
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
