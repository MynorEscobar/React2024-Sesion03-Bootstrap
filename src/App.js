import logo from './logo.svg';
import './App.css';
import NuevoComponente from './Componentes/NuevoComponente';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NuevoComponente></NuevoComponente>
      </header>
    </div>
  );
}

export default App;
