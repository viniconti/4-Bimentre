import { useState } from "react";
import "./App.css";

function App() {

  const [title, setTitle] = useState('');
  const mudancadeTitulo = (e) => {
    setTitle(e.target.value);
  }

  return (
    <>
      <div className="geral">
        <div className="container">

          <div className="inputs">

            <label htmlFor="">Username </label>
              <input 
              className="input" 
              type="text"
              placeholder="Username"
              />
              
              <label htmlFor="">Email</label>
              <input 
              className="input" 
              type="email" 
              name="Email"
              placeholder="Email" 
              />

          </div>

          <div className="register">
            <button className="button" onChange={(e) => mudancadeTitulo(e)}>Register</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
