import { IconTrash } from "@tabler/icons-react";

export function Lixeira({ onClick }) {
  return (
    <button onClick={onClick}>
      <IconTrash className="text-cinza-300 hover:text-danger" />
    </button>
  );
}
