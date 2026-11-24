import { useState } from 'react';

export function Curtidas() {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <div>
      <p>{curtidas} curtidas</p>
      
      <button onClick={() => setCurtidas(curtidas + 1)}>
        Curtir
      </button>

      {curtidas > 10 && <p>Post popular!</p>}
    </div>
  );
}
export default Curtidas;