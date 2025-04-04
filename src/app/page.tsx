"use client";

import { DisplayTextMarkdown } from "@/components/DisplayTextMarkdown";
import { Form } from "@/components/Form";
import { HeroHeader } from "@/components/HeroHeader";
import { useCallAIResponse } from "@/hook/useCallAIResponse";
import { useTypeAnimation } from "@/hook/useTypeAnimation";

export default function Home() {
  const {
    aiResponseText,
    name,
    sign,
    loading,
    setName,
    setSign,
    handleSubmit,
  } = useCallAIResponse();

  const { displayedText } = useTypeAnimation({
    aiResponseText: aiResponseText ?? { message: "" },
  });

  return (
    <main className="flex h-screen flex-col gap-[10px] items-center justify-center">
      <HeroHeader
        title="Humilhando você e seu signo! 😊"
        subtitle="Se sua crença em signo for real..."
      />

      <Form
        name={name}
        sign={sign}
        loading={loading}
        handleSubmit={handleSubmit}
        setName={setName}
        setSign={setSign}
      />

      {displayedText.length > 0 && !loading && (
        <DisplayTextMarkdown displayedText={displayedText} />
      )}
    </main>
  );
}
