import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function cadastrarUsuario(event){
    event.preventDefault();
    alert(`Os seus dados são: Nome: ${name}, Email: ${email}, Senha: ${password} (*/ω＼*) `);
  }

  return (
    <div className="App">
      <div className='box'>
        <form className='form' onSubmit={cadastrarUsuario}>
          <h1>FORUMULÁRIO DE CADASTRO</h1>
          <input className='input-form-line'
          type="text"      
          placeholder='INSIRA SEU NOME'
          required 
          value={name}
          onChange={(event) => {setName(event.target.value)}}
          />

          <input className='input-form-line'
          type="email" 
          placeholder='INSIRA SEU EMAIL' 
          required 
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
          />

          <input className='input-form-line'    
          type="password"  
          placeholder='INSIRA SUA SENHA' 
          required 
          value={password}
          onChange={(event) => {setPassword(event.target.value)}}
          />

          <input className='input-form-button'  
          type="submit"    
          content='ENVIAR'               
          required
          />

        </form>{/* form */}
      </div>{/* box */}
    </div>/* app */
  );
}

export default App;
