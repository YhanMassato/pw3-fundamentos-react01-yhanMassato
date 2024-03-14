import './App.css';
import Users from './Components/users';
import CreateUsers from './Components/createUsers';

function App() {
  return (
    <div className="App">
      {/* <h1>Acessando e consumindo a API de teste REQRES</h1>   */}
      <Users/> 
      <CreateUsers/>
    </div>
  );
}

export default App;
