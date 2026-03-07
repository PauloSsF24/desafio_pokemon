"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import StarterSelector from "@/components/StarterSelector";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <StarterSelector />
  );
}