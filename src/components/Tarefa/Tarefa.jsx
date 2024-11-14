import { Check } from "../Check/Check";
import { Lixeira } from "../Lixeira/Lixeira";

export function Tarefa({ tarefa, toggleConcluir, removerTarefa }) {
  return (
    <div className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400">
      <div className="flex gap-2">
        <Check isChecked={tarefa.concluida} toggleConcluir={toggleConcluir} />
        <p className={tarefa.concluida ? "line-through text-cinza-300" : ""}>{tarefa.texto}</p>
      </div>
      <Lixeira onClick={removerTarefa} />
    </div>
  );
}
