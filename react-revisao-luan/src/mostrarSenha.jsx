import { useState } from 'react';

export function MostrarSenha() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? 'Esconder Senha Secreta' : 'Mostrar Senha Secreta'}
      </button>

      {visivel && <p>Senha: tchou meu</p>}
    </div>
  );
}

export default MostrarSenha;
