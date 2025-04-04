import { useEffect, useState } from "react";

export const useTypeAnimation = ({
  aiResponseText,
}: {
  aiResponseText: { message: string };
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (!aiResponseText?.message) return;
      setDisplayedText((prev) => prev + aiResponseText.message[index - 1]);
      index++;

      if (index >= aiResponseText.message.length) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [aiResponseText?.message]);

  return {
    displayedText,
    setDisplayedText,
  };
};
