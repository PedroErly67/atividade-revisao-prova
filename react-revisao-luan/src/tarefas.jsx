import { useState } from 'react';

export function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'a', feita: false },
    { id: 2, texto: 'b', feita: true },
    { id: 3, texto: 'c', feita: false },
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
            <button onClick={() => concluirTarefa(tarefa.id)}>
              Concluir
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ListaTarefas;