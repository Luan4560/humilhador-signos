"use client";

import { Form } from "@/components/Form";
import { HeroHeader } from "@/components/HeroHeader";
export default function Home() {
  return (
    <main className="flex h-screen flex-col gap-[10px] items-center justify-center">
      <HeroHeader
        title="Humilhando você e seu signo! 😊"
        subtitle="Se sua crença em signo for real..."
      />
      <Form />
    </main>
  );
}
