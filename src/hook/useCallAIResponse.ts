"use client";

import { useState } from "react";

export const useCallAIResponse = () => {
  const [name, setName] = useState("");
  const [sign, setSign] = useState("");
  const [aiResponseText, setAiResponseText] = useState<{ message: string }>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/horoscope`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            sign,
          }),
        }
      );

      const data = await response.json();

      setAiResponseText(data);
      setLoading(false);
    } catch (error) {
      console.log({ error: (error as Error).message });
    }
  };

  return {
    name,
    setName,
    sign,
    setSign,
    aiResponseText,
    setAiResponseText,
    loading,
    setLoading,
    handleSubmit,
  };
};
