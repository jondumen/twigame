import React, {useState} from 'react';
import InterfazA from './Components/InterfazA';
import InterfazB from './Components/InterfazB';
import InterfazC from './Components/InterfazC';

import './App.css';

const App = () => {
  const [interfazActual, setInterfazActual] = useState('A');

  const cambiarInterfaz = (nuevaInterfaz) => {
    setInterfazActual(nuevaInterfaz);
  };

  return (
    <div>
      <div>
        <button onClick={() => cambiarInterfaz('A')}>Home</button>
        <button onClick={() => cambiarInterfaz('B')}>Game</button>
        <button onClick={() => cambiarInterfaz('C')}>Profile</button>
      </div>

      <div>
        {/* Mostrar la interfaz actual según el estado */}
        {interfazActual === 'A' && <InterfazA />}
        {interfazActual === 'B' && <InterfazB />}
        {interfazActual === 'C' && <InterfazC />}
      </div>
    </div>
  );
};

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
