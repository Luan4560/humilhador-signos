import { sings } from "@/utils/data";

interface IFormProps {
  name: string;
  sign: string;
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setName: (name: string) => void;
  setSign: (sign: string) => void;
}

export const Form = ({
  loading,
  name,
  sign,
  handleSubmit,
  setName,
  setSign,
}: IFormProps) => {
  return (
    <form className="flex flex-col gap-[10px] w-1/2 md:w-1/3 mt-10">
      <input
        className="w-full outline-gray-400 border-2 border-gray-400 rounded-md p-2"
        type="text"
        name="name"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
      />

      <select
        name="sign-selection"
        id="sign"
        className="w-full outline-gray-400 border-2 border-gray-400 rounded-md p-2"
        onChange={(e) => setSign(e.target.value)}
      >
        <option>Selecione seu signo</option>

        {sings.map((person) => (
          <option key={person} value={person}>
            {person}
          </option>
        ))}
      </select>

      <button
        onClick={() => handleSubmit}
        className="w-full bg-black text-white rounded-md p-2 mt-2 hover:bg-gray-800 hover:cursor-pointer
      disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400
      "
        disabled={name.length <= 0 || sign.length <= 0 || loading}
      >
        <a>Analizar</a>
      </button>
    </form>
  );
};
