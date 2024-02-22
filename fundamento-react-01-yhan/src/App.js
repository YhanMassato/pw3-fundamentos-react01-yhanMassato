import logo from './logo.svg';
import './App.css';
import Livro from './components/Livro';

import robos from './livros/robos_imperio.jpg';
import sol from './livros/sol_desvelado.jpg';
import cavernas from './livros/cavernas_aco.jpg';

var desc = [ "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclsive nos dramas policiais.","A obra foi publicada, pela primeira vez, na revista Galaxy Science Fiction, e o sucesso foi tão grande que, um ano depois, se tornou livro. Na trama, Os Mundos Siderais, antigas colônias da Terra, possuem rígidas leis de imigração, e não aceitam mais terráqueos em seus planetas", "Para agravar a situação, os robôs estão substituindo grande parte da mão de obra trabalhadora na Terra, levando os humanos a perderem seus empregos e privilégios de cidadãos" ]

function App() {


  return (
    <div className="App">

      <Livro
      titulo="As Cavernas de Azimoth"
      autor="Isaac Azimovit"
      imagem={cavernas}
      descricao={desc[0]}
      /> {/*--Livro1*/}

      <Livro
      titulo="Sol desolado"
      autor="Isaac Azimovit"
      imagem={sol}
      descricao={desc[1]}
      /> {/*--Livro2*/}

      <Livro
      titulo="Robos e Imperio"
      autor="Isaac Azimovit"
      imagem={robos}
      descricao={desc[2]}
      /> {/*--Livro3*/}

    </div> /* --App-- */
  );
}

export default App;
