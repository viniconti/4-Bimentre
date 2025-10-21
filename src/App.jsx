import { useState } from "react";
import "./App.css";
import Input from './Components/Input';

function App() {

  const [title, setTitle] = useState('');
  const mudancadeTitulo = (e) => {
    setTitle(e.target.value);
  }

  return (
    <>
      <div className="geral">
        <h1 className="h1">FORMULÁRIO</h1>
        <div className="container">

          <Input /> 

          <div className="register">
            <button className="button" onChange={(e) => mudancadeTitulo(e)}>Register</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
