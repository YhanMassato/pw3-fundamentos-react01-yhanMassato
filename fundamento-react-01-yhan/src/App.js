import logo from './logo.svg';
import './App.css';
import cavernas from './livros/cavernas_aco.jpg'

function App() {
  return (
    <div className="App">
      <div className='cardBook'>
        <h3>As cavernas de aço</h3>

        <p>Isaac Asimov</p>

        <img src={cavernas} alt='capa do livro cavernas de aço por Isaac Asimov' style={{width:'800px',height:'300px'}}></img>

        <div className='descricao-caixa'>
          <p className='descricao'>As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclsive nos dramas policiais.</p>
        </div>

      </div>
    </div>
  );
}

export default App;
