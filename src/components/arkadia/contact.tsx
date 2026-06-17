"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

const branchOptions = [
  "На Невском",
  "На Загородном",
  "На Ломоносова",
  "На Васильевском",
  "На Шуваловском",
  "В Рыбацком",
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Заполните имя и телефон");
      return;
    }
    setSending(true);
    // Имитация отправки (это концепт-сайт, форма никуда не отправляет)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSending(false);
    toast.success("Заявка принята. Мы перезвоним в течение часа.", {
      description: "Это демонстрационная форма концепта сайта.",
    });
    setName("");
    setPhone("");
    setBranch("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="relative bg-arkadia-graphite py-24 md:py-40 overflow-hidden"
    >
      {/* Тонкая золотая линия сверху */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-32 bg-arkadia-ochre/50 origin-center"
      />

      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs uppercase tracking-[0.4em] text-arkadia-ochre/80 mb-8"
          >
            VI. Войти в Аркадию
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-arkadia-ivory leading-[1.05] text-balance"
          >
            Аркадия начинается{" "}
            <span className="italic text-arkadia-ochre">с одного визита.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 font-body text-base text-arkadia-bone/70 max-w-xl mx-auto leading-relaxed"
          >
            Оставьте заявку — администратор перезвонит в течение часа, подберёт
            филиал и удобное время. Без давления и навязывания.
          </motion.p>
        </div>

        {/* Форма */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl border border-arkadia-ochre/20 bg-arkadia-ink/60 backdrop-blur-sm p-7 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div>
              <label
                htmlFor="name"
                className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-ochre/70 mb-2 block"
              >
                Имя
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
                className="w-full bg-transparent border-0 border-b border-arkadia-ochre/25 py-3 text-arkadia-ivory placeholder:text-arkadia-bone/30 font-body text-base focus:outline-none focus:border-arkadia-ochre transition-colors duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-ochre/70 mb-2 block"
              >
                Телефон
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full bg-transparent border-0 border-b border-arkadia-ochre/25 py-3 text-arkadia-ivory placeholder:text-arkadia-bone/30 font-body text-base focus:outline-none focus:border-arkadia-ochre transition-colors duration-300"
              />
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <label
              htmlFor="branch"
              className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-ochre/70 mb-2 block"
            >
              Филиал
            </label>
            <select
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-arkadia-ochre/25 py-3 text-arkadia-ivory font-body text-base focus:outline-none focus:border-arkadia-ochre transition-colors duration-300 appearance-none cursor-pointer"
            >
              <option value="" className="bg-arkadia-graphite text-arkadia-bone/50">
                Не выбран — администратор подберёт
              </option>
              {branchOptions.map((b) => (
                <option
                  key={b}
                  value={b}
                  className="bg-arkadia-graphite text-arkadia-ivory"
                >
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 md:mt-8">
            <label
              htmlFor="message"
              className="font-body text-[10px] uppercase tracking-[0.3em] text-arkadia-ochre/70 mb-2 block"
            >
              Комментарий
              <span className="ml-2 text-arkadia-bone/40 normal-case tracking-normal">
                — необязательно
              </span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Что вас беспокоит, удобное время для визита…"
              className="w-full bg-transparent border-0 border-b border-arkadia-ochre/25 py-3 text-arkadia-ivory placeholder:text-arkadia-bone/30 font-body text-base focus:outline-none focus:border-arkadia-ochre transition-colors duration-300 resize-none"
            />
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-body text-xs text-arkadia-bone/45 leading-relaxed max-w-xs">
              Нажимая «Отправить», вы соглашаетесь на обработку персональных
              данных.
            </p>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-arkadia-ochre text-arkadia-ink font-body text-xs uppercase tracking-[0.25em] hover:bg-arkadia-copper transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Отправляем…" : "Отправить заявку"}
              {!sending && (
                <Send className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </button>
          </div>
        </motion.form>

        {/* Альтернативный способ — телефон */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-sm text-arkadia-bone/60 mb-3">
            Или позвоните напрямую
          </p>
          <a
            href="tel:+78126034050"
            className="font-display text-2xl md:text-3xl text-arkadia-ochre hover:text-arkadia-ivory transition-colors duration-300"
          >
            8 (812) 603-40-50
          </a>
        </motion.div>
      </div>
    </section>
  );
}
