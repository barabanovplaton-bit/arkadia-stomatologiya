"use client";

import { ComingSoonProvider } from "@/components/arkadia/coming-soon-modal";
import { Navigation } from "@/components/arkadia/navigation";
import { Hero } from "@/components/arkadia/hero";
import { About } from "@/components/arkadia/about";
import { Branches } from "@/components/arkadia/branches";
import { Services } from "@/components/arkadia/services";
import { Doctors } from "@/components/arkadia/doctors";
import { Letters } from "@/components/arkadia/letters";
import { Contact } from "@/components/arkadia/contact";
import { Footer } from "@/components/arkadia/footer";

export default function Home() {
  return (
    <ComingSoonProvider>
      <main className="relative min-h-screen bg-arkadia-ink text-arkadia-ivory overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Branches />
        <Services />
        <Doctors />
        <Letters />
        <Contact />
        <Footer />
      </main>
    </ComingSoonProvider>
  );
}
