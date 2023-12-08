import React, { useState } from "react";

function SpaceBattleCounter() {
  const [ammo, setAmmo] = useState(10);

  const increment = () => {
    if (ammo > 0) {
      setAmmo(ammo - 1);
      // Aquí podrías agregar lógica adicional para el incremento si es necesario
    } else {
      // Mensaje cuando no hay munición
      alert("¡Cuidado! No te quedes sin munición (-). Recarga antes de continuar la batalla.");
    }
  };

  const reloadAmmo = () => {
    setAmmo(10);
    // Mensaje al recargar munición
    alert("Recargando munición. Listo para la siguiente batalla.");
  };

  return (
    <div>
      <p>Munición restante: {ammo}</p>
      <button onClick={increment}>Disparar</button>
      &nbsp;
      <button onClick={reloadAmmo}>Recargar</button>
    </div>
  );
}

export default SpaceBattleCounter;

