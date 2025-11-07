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

          <Input />

          <section className="cadastrar">
            <h2>cadastro</h2>
            <div>
              <form onSubmit={enviarForms}>
                <label htmlFor="email">Email</label>
                <input className="registro"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => mudancaDeEmail(e)} />
              </form>

              <form onSubmit={enviarForms}>
                <label htmlFor="password">Senha</label>
                <input className="registro"
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => mudancaDePassword(e)} />

                <div className="register">
                  <button className="button" type="submite">Cadastrar</button>
                </div>

              </form>

            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default App;
