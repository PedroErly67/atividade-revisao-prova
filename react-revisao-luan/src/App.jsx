import Cartao from "./cartao";
import Aviso from "./aviso";
import Curtidas from "./curtidas";
import MostrarSenha from "./mostrarSenha";
import ListaTarefas from "./tarefas";

function App() {
  return (
    <div>
      <h1>Meus Cartões</h1>

      <Cartao
      titulo="lorenzzo Gay"
      descricao="abu"
    />
      <Aviso urgente={true} />
      <Curtidas />
      <Cartao
      titulo="n sei"
      descricao=" n sei"
    />
      <Aviso urgente={false} />
      <Curtidas />
      <Cartao
      titulo="abu"
      descricao="abu"
    />
      <Aviso urgente={true} />
      <Curtidas />
      <MostrarSenha />
      <h1>Lista de Tarefas</h1>
      <ListaTarefas />
    </div>
  )
}

export default App;