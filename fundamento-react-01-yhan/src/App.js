import './App.css';
import dadosJSON from "./dados.json"
import Livro from './components/Livro';

function App() {


  return (
    <div className="App">
      <Livro
        dadosJSON = {dadosJSON}
      />{/*--Livro1*/}
    </div> /* --App-- */
  );
}

export default App;
