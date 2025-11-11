import { useState } from "react";
import "./App.css";
import Input from './Components/Input';
import { useEffect } from "react";

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const mudancaDeEmail = (e) => {
    setEmail(e.target.value);
  }
  const mudancaDePassword = (e) => {
    setPassword(e.target.value); 
  }

  const enviarForms = (e) => {
    e.preventDefault()
    fetch('htps://www.api.alanleiser.com/user',{
      method:'POST',
      body:JSON.stringify()
    })
    console.log(`Email: ${email}, Senha: ${password}`)
  }

  useEffect(() => {
    fetch("https://www.api.alanleiser.com/")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log('error'))
  }, []);

  return (
    <>
      <div className="geral">
        <h1 className="h1">FORMULÁRIO</h1>
        <div className="container">

        <Input
              label="Email"
              placeholder="Digite seu email"
              type="email"
              value={email}
              onChange={mudancaDeEmail}
            />
            
        <Input
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={mudancaDePassword}
            />

        

        </div>
      </div>
    </>
  );
}

export default App;
