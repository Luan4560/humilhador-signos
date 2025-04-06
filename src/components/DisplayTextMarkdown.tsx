import { removeUndefinedWord } from "@/utils/removeUndefined";
import { TypeAnimation } from "react-type-animation";
interface IDisplayTextMarkdownProps {
  text?: string;
  loading?: boolean;
}

export const DisplayTextMarkdown = ({ text }: IDisplayTextMarkdownProps) => {
  if (text === undefined) return null;

  return (
    <section className="w-full flex flex-col gap-[10px] bg-gray-300 p-4 rounded-md h-[400px] overflow-auto">
      <TypeAnimation
        sequence={[removeUndefinedWord(text), 1000]}
        wrapper="div"
        speed={70}
      />
    </section>
  );
};
