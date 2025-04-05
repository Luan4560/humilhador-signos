import { useTypeAnimation } from "@/hook/useTypeAnimation";
import { removeUndefinedWord } from "@/utils/removeUndefined";
import ReactMarkdown from "react-markdown";

interface IDisplayTextMarkdownProps {
  text?: string;
  loading?: boolean;
}

export const DisplayTextMarkdown = ({ text }: IDisplayTextMarkdownProps) => {
  const { displayedText } = useTypeAnimation({
    aiResponseText: { message: text || "" },
  });

  if (text === undefined) return null;

  return (
    <section className="w-full flex flex-col gap-[10px] bg-gray-300 p-4 rounded-md h-[400px] overflow-auto">
      <ReactMarkdown>{removeUndefinedWord(displayedText)}</ReactMarkdown>
    </section>
  );
};
