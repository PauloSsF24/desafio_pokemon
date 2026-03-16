"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import StarterSelector from "@/components/StarterSelector";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/Comofunciona";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <main>
      <Hero />
      <Features />
      <StarterSelector />
      <HowItWorks />
      <CTA />
    </main>
  );
}