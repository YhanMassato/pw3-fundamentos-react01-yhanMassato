import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Empresa from './components/Empresa.js';
import Contato from './components/Contato.js';
import NavBar from './components/NavBar.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<NavBar/>}>
            <Route index element={<Home/>}/>

            <Route path='empresa' element={<Empresa/>}/>
    
            <Route path='contato' element={<Contato/>}/>
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
