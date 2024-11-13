import { useState } from "react";
import { Criar } from "./components/Criar/Criar";
import { Tarefa } from "./components/Tarefa/Tarefa";
import { Lista } from "./components/Lista/Lista";
import { Input } from "./components/Input/Input";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleCriarTarefa = () => {
    if (inputValue.trim() === "") return;

    const novaTarefa = { id: Date.now(), texto: inputValue, concluida: false };
    setTarefas([...tarefas, novaTarefa]);
    setInputValue("");
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const toggleConcluirTarefa = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <div className="min-h-screen w-screen bg-cinza-600 text-cinza-100 antialiased">
      <header className="flex flex-1 justify-center items-center py-20 px-3 bg-neutral-900">
        <img src="/logo.svg" alt="" />
      </header>

      <section className="w-full max-w-3xl m-auto">
        <div className="flex justify-between items-center gap-2 -translate-y-2/4">
          <Input value={inputValue} onChange={setInputValue} />
          <Criar onClick={handleCriarTarefa} />
        </div>

        <div className="flex flex-col gap-6">
          <Lista tarefas={tarefas.length} concluidas={tarefas.filter((t) => t.concluida).length} />

          <div className="flex flex-col gap-3">
            {tarefas.map((tarefa) => (
              <Tarefa
                key={tarefa.id}
                tarefa={tarefa}
                toggleConcluir={() => toggleConcluirTarefa(tarefa.id)}
                removerTarefa={() => removerTarefa(tarefa.id)} // Passando a função de remoção
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
