"use client";

import { ComingSoonProvider } from "@/components/arkadia/coming-soon-modal";
import { Navigation } from "@/components/arkadia/navigation";
import { Hero } from "@/components/arkadia/hero";
import { About } from "@/components/arkadia/about";
import { HistoryTrail } from "@/components/arkadia/history-trail";
import { Services } from "@/components/arkadia/services";
import { Doctors } from "@/components/arkadia/doctors";
import { Reviews } from "@/components/arkadia/reviews";
import { QuizContact } from "@/components/arkadia/quiz-contact";
import { BranchMap } from "@/components/arkadia/branch-map";
import { Footer } from "@/components/arkadia/footer";

export default function Home() {
  return (
    <ComingSoonProvider>
      <main className="relative min-h-screen bg-arkadia-mist text-arkadia-graphite overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <HistoryTrail />
        <Services />
        <Doctors />
        <Reviews />
        <QuizContact />
        <BranchMap />
        <Footer />
      </main>
    </ComingSoonProvider>
  );
}
