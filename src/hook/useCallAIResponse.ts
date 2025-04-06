"use client";

import { useEffect, useState } from "react";

const URI = process.env.NEXT_PUBLIC_API;

export const useCallAIResponse = () => {
  const [name, setName] = useState("");
  const [sign, setSign] = useState("");
  const [aiResponseText, setAiResponseText] = useState<{
    message: string;
  }>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.length <= 0 || sign.length <= 0) return;

    try {
      setAiResponseText(undefined);
      setLoading(true);

      const response = await fetch(`${URI}/api/horoscope`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          sign,
        }),
      });

      const data = await response.json();
      setAiResponseText(data);
      setLoading(false);
    } catch (error) {
      console.log({ error: (error as Error).message });
      setLoading(false);
    }
  };

  useEffect(() => {
    setAiResponseText(undefined);
  }, [name, sign]);

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
