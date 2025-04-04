import ReactMarkdown from "react-markdown";

interface DisplayTextMarkdownProps {
  displayedText: string;
}
export const DisplayTextMarkdown = ({
  displayedText,
}: DisplayTextMarkdownProps) => {
  return (
    <section className="flex flex-col gap-[10px] w-1/2 bg-gray-300 p-4 rounded-md">
      <ReactMarkdown>{displayedText}</ReactMarkdown>
    </section>
  );
};
