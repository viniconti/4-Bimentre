import React from "react";
import "./Input.css";

function Input() {
  return (
    <>
      <div className="inputs">
        
        <div className="linha">
          <div className="cima">
        <label htmlFor="">Nome</label>
        <input className="input" type="text" placeholder="Nome" />
        </div>
          
        <div className="cima">
        <label htmlFor="">Data</label>
        <input className="input" type="date" />
        </div>
        </div>

        <div className="linha">
          <div className="cima">
        <label htmlFor="">Teleone</label>
        <input className="input" type="number" placeholder="Telefone" />
        </div>
        <div className="cima">
        <label htmlFor="">Instagram</label>
        <input className="input" type="text" placeholder="Instagram" />
        </div>
        </div>


        <div className="linha">
          <div className="cima">
        <label htmlFor="">GitHub</label>
        <input className="input" type="text" placeholder="GitHub" />
        </div>

        <div className="cima">
        <label htmlFor="">Pensamento</label>
        <input className="input" type="text" placeholder="Pensamento" />
        </div>
        </div>

        <div className="linha">
          <div className="cima">
        <label htmlFor="">Problema</label>
        <input className="input" type="text" placeholder="Problema" />
        </div>

        <div className="cima">
        <label htmlFor="">Última série</label>
        <input className="input" type="text" placeholder="Última séria" />
        </div>
        </div>

        <div className="linha">
          <div className="cima">
        <label htmlFor="">Último jogo</label>
        <input className="input" type="text" placeholder="Último jogo" />
        </div>

        <div className="cima">
        <label htmlFor="">Música favorita</label>
        <input className="input" type="text" placeholder="Música favorita" />
        </div>
        </div>

        <div className="linha">
          <div className="cima">
        <label htmlFor="">Gênero</label>
        <input className="input" type="text" placeholder="Gênero" />
        </div>

        <div className="cima">
        <label htmlFor="">Habilidade especial</label>
        <input className="input"type="text"placeholder="Habilidade especial" />
        </div>
        </div>

        <div className="linha">
          <div className="cima">
        <label htmlFor="">Poder especial</label>
        <input className="input" type="text" placeholder="Poder especial" />
        </div>

        <div className="cima">
        <label htmlFor="">Time que torce</label>
        <input className="input" type="text" placeholder="Time que torce" />
        </div>
        </div>
        </div>
    </>
  );
}
export default Input;
