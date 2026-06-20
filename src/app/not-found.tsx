"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-arkadia-blue flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-8xl md:text-9xl font-bold text-white mb-4">
          404
        </p>
        <p className="font-body text-lg text-white/70 mb-8 max-w-md mx-auto">
          Страница не найдена. Возможно, она была перемещена или удалена.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-arkadia-blue font-body text-sm font-medium hover:bg-white/90 transition-colors duration-200"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
