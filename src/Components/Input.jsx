import React from "react";
import "./Imput.css";

function Imput() {
  return (
    <>
      <div className="inputs">
        

        <div className="topo">
        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Nome" />

        <label htmlFor=""></label>
        <input className="input" type="date" />
        </div>


        <label htmlFor=""></label>
        <input className="input" type="number" placeholder="Telefone" />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Instagram" />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="GitHub" />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Pensamento" />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Problema" />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Última séria" />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Último jogo" />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Música favorita" />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Gênero" />

        <label htmlFor=""></label>
        <input
          className="input"
          type="text"
          placeholder="Habilidade especial"
        />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Poder especial" />

        <label htmlFor=""></label>
        <input className="input" type="text" placeholder="Time que torce" />

      </div>
    </>
  );
}
export default Imput;
