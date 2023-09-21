import logo from './logo.svg';

//importanto um componente 
import TituloInicial from './components/TituloInicial';

function App() { 
  let nome = `Kauan pn`  ;
  let soma = 1 + 2;
  return (
    <div className="App">
        <TituloInicial/> {/*isto é um componete */}
    </div>
  );
}

export default App;
