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
      setDisplayedText((prev) => prev + aiResponseText.message[index]);
      index++;

      if (index >= aiResponseText.message.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [aiResponseText?.message]);

  return {
    displayedText,
    setDisplayedText,
  };
};
