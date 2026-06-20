"use client";

import { useState, useEffect, useRef, type ReactNode, type CSSProperties } from "react";

/**
 * Чистый IntersectionObserver хук — без framer-motion.
 * Зацикленный: срабатывает при каждом входе/выходе из зоны видимости.
 * Симметричный: анимация работает и сверху-вниз, и снизу-вверх.
 */
export function useInView(options?: { margin?: string; once?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (options?.once) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        } else {
          setIsInView(entry.isIntersecting);
        }
      },
      {
        rootMargin: options?.margin || "0px 0px -20% 0px",
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.margin, options?.once]);

  return { ref, isInView };
}

/**
 * RevealItem — независимый элемент с собственной анимацией появления.
 */
export function RevealItem({
  children,
  className = "",
  delay = 0,
  y = 20,
  as: Component = "div",
  style: extraStyle,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "p" | "h2" | "h3" | "li" | "button";
  style?: CSSProperties;
}) {
  const { ref, isInView } = useInView({ margin: "0px 0px -15% 0px" });

  const Tag = Component as any;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...extraStyle,
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * AnimatedHeading — простой заголовок с появлением (без букв).
 */
export function AnimatedHeading({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  return (
    <RevealItem as="h2" className={className} delay={delay} y={16}>
      {children}
    </RevealItem>
  );
}

/**
 * AnimatedHeadingLetters — заголовок с анимацией букв (появляются по одной).
 * Анимация зацикленная (once: false) — переигрывается при каждом входе в зону видимости.
 * Слова не ломаются: буквы сгруппированы по словам через word-span контейнеры.
 */
export function AnimatedHeadingLetters({
  children,
  className = "",
  delay = 0,
  highlight,
  highlightClass = "text-arkadia-blue",
}: {
  children: string;
  className?: string;
  delay?: number;
  highlight?: string;
  highlightClass?: string;
}) {
  // once: false — анимация переигрывается каждый раз
  const { ref, isInView } = useInView({ margin: "0px 0px -15% 0px", once: false });

  // Разбиваем текст на части — выделяем `highlight` если задан
  let parts: { text: string; isHighlight: boolean }[] = [{ text: children, isHighlight: false }];

  if (highlight && children.includes(highlight)) {
    const idx = children.indexOf(highlight);
    parts = [
      { text: children.slice(0, idx), isHighlight: false },
      { text: highlight, isHighlight: true },
      { text: children.slice(idx + highlight.length), isHighlight: false },
    ];
  }

  let charIndex = 0;

  return (
    <h2
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {parts.map((part, partIdx) => {
        // Разбиваем часть на слова, чтобы слова не ломались при переносе
        const words = part.text.split(" ");

        return (
          <span key={partIdx}>
            {words.map((word, wordIdx) => {
              const wordChars = word.split("").map((char, i) => {
                const currentIdx = charIndex++;
                return (
                  <span
                    key={i}
                    className={part.isHighlight ? highlightClass : ""}
                    style={{
                      display: "inline-block",
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? "translateY(0)" : "translateY(12px)",
                      transition: `opacity 0.5s ease ${delay + currentIdx * 0.02}s, transform 0.5s ease ${delay + currentIdx * 0.02}s`,
                      fontSize: part.isHighlight ? "1.2em" : undefined,
                    }}
                  >
                    {char}
                  </span>
                );
              });

              return (
                <span
                  key={wordIdx}
                  style={{ display: "inline-block", whiteSpace: "nowrap" }}
                >
                  {wordChars}
                  {/* Пробел между словами — обычный, позволяет перенос */}
                  {wordIdx < words.length - 1 ? "\u00A0" : ""}
                </span>
              );
            })}
          </span>
        );
      })}
    </h2>
  );
}

/**
 * FadeIn — простое появление с подъёмом.
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <RevealItem className={className} delay={delay} y={y}>
      {children}
    </RevealItem>
  );
}
