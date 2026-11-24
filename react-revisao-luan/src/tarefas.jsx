import { useState } from 'react';

export function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Matar o Rodrigo', feita: false },
    { id: 2, texto: 'Quebrar o Erly no soco', feita: true },
    { id: 3, texto: 'Torturar o Rodrigo', feita: false },
  ]);

  function concluirTarefa(id) {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, feita: true } : tarefa
    );
    setTarefas(novasTarefas);
  }

  return (
    <ul>
      {tarefas
        .filter((tarefa) => !tarefa.feita)
        .map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}{' '}
            <button onClick={() => concluirTarefa(tarefa.id)}> {/* Desafio dos nigga toilets hehehe */}
              Concluir
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ListaTarefas;