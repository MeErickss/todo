import { IconCirclePlus } from "@tabler/icons-react";

export function Criar({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center h-12 p-4 bg-azul-dark text-cinza-100 hover:bg-azul border-0 rounded-md font-bold text-sm transition-all"
    >
      Criar
      <IconCirclePlus />
    </button>
  );
}
