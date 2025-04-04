interface IHeroHeaderProps {
  title: string;
  subtitle: string;
}

export const HeroHeader = ({ title, subtitle }: IHeroHeaderProps) => {
  return (
    <header className="flex flex-col gap-[10px] items-center justify-center">
      <h1 className="md:text-5xl font-bold text-2xl ">{title}</h1>

      <p>{subtitle}</p>
    </header>
  );
};
