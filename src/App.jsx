import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import { useEffect } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [pensamento, setPensamento] = useState("");
  const [probleminha, setProbleminha] = useState("");
  const [ultimaSerie, setUltimaSerie] = useState("");
  const [musicaFavorita, setMusicaFavorita] = useState("");
  const [ultimoJogo, setUltimoJogo] = useState("");
  const [genero, setGenero] = useState("");
  const [habilidadeEspecial, setHabilidadeEspecial] = useState("");
  const [timeQueTorce, setTimeQueTorce] = useState("");
  const [versiculo, setVersiculo] = useState("");
  const [poderEspecial, setPoderEspecial] = useState("");

  const mudancaDeEmail = (e) => {
    setEmail(e.target.value);
  };
  const mudancaDePassword = (e) => {
    setPassword(e.target.value);
  };
  const mudancaDeNome = (e) => {
    setNome(e.target.value);
  };
  const mudancaDeIdade = (e) => {
    setIdade(e.target.value);
  };
  const mudancaDeTelefone = (e) => {
    setTelefone(e.target.value);
  };
  const mudancaDeInstagram = (e) => {
    setInstagram(e.target.value);
  };
  const mudancaDeGithub = (e) => {
    setGithub(e.target.value);
  };
  const mudancaDePensamento = (e) => {
    setPensamento(e.target.value);
  };
  const mudancaDeProbleminha = (e) => {
    setProbleminha(e.target.value);
  };
  const mudancaDeUltimaSerie = (e) => {
    setUltimaSerie(e.target.value);
  };
  const mudancaDeMusicaFavorita = (e) => {
    setMusicaFavorita(e.target.value);
  };
  const mudancaDeUltimoJogo = (e) => {
    setUltimoJogo(e.target.value);
  };
  const mudancadeGenero = (e) => {
    setGenero(e.target.value);
  };
  const mudancaDeHabilidadeEspecial = (e) => {
    setHabilidadeEspecial(e.target.value);
  };
  const mudancaDeTimeQueTorce = (e) => {
    setTimeQueTorce(e.target.value);
  };
  const mudancaDeVersiculo = (e) => {
    setVersiculo(e.target.value);
  };
  const mudancaDePoderEspecial = (e) => {
    setPoderEspecial(e.target.value);
  };


  useEffect(() => {
    fetch("https://www.api.alanleiser.com/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("error"));
  }, []);

    const onSubmitHandle = () => {
      const body = {
        name:nome,
        age:idade,
        phone:telefone,
        instagram,
        github,
        thought:pensamento,
        problem:probleminha,
        lastSeries:ultimaSerie,
        lastGame:ultimoJogo,
        music:musicaFavorita,
        genre:genero,
        specialSkill:habilidadeEspecial,
        specialPower:poderEspecial,
        favoriteTeam:timeQueTorce,
        bibleVerse:versiculo,
        email,
        password,
      };
      fetch("https://www.api.alanleiser.com/user",{
        method:"POST",
        body:JSON.stringify(body)
      })
      .then(res=>res.json)
      .then(data=>{
        console.log(data)
      })
      .catch(err=>{
        console.log("err")
        if(err.status === 400){
          setUltimaSerie(true)
        }
      })
    };
  return (
    <>
      <div className="geral">
        <div className="container">
          <div className="linha">
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

          <div className="linha">
            <Input
              label="Nome"
              placeholder="Digite seu nome"
              type="text"
              value={nome}
              onChange={mudancaDeNome}
            />
            <Input
              label="Idade"
              placeholder="Digite sua idade"
              type="date"
              value={idade}
              onChange={mudancaDeIdade}
            />
          </div>

          <div className="linha">
            <Input
              label="Telefone"
              placeholder="Digite seu telefone"
              type="number"
              value={telefone}
              onChange={mudancaDeTelefone}
            />
            <Input
              label="Instagram"
              placeholder="Digite seu Instagram"
              type="text"
              value={instagram}
              onChange={mudancaDeInstagram}
            />
          </div>

          <div className="linha">
            <Input
              label="GitHub"
              placeholder="Digite seu GitHub"
              type="text"
              value={github}
              onChange={mudancaDeGithub}
            />
            <Input
              label="Time que Torce"
              placeholder="Digite o time que torce"
              type="text"
              value={timeQueTorce}
              onChange={mudancaDeTimeQueTorce}
            />
          </div>

          <div className="linha">
            <Input
              label="Probleminha"
              placeholder="Digite seu probleminha"
              type="text"
              value={probleminha}
              onChange={mudancaDeProbleminha}
            />
            <Input
              label="Última Série"
              placeholder="Digite sua última série"
              type="text"
              value={ultimaSerie}
              onChange={mudancaDeUltimaSerie}
            />
          </div>

          <div className="linha">
            <Input
              label="Música Favorita"
              placeholder="Digite sua música favorita"
              type="text"
              value={musicaFavorita}
              onChange={mudancaDeMusicaFavorita}
            />
            <Input
              label="Último Jogo"
              placeholder="Digite seu último jogo"
              type="text"
              value={ultimoJogo}
              onChange={mudancaDeUltimoJogo}
            />
          </div>

          <div className="linha">
            <Input
              label="Gênero"
              placeholder="Digite seu gênero"
              type="text"
              value={genero}
              onChange={mudancadeGenero}
            />
            <Input
              label="Habilidade Especial"
              placeholder="Digite sua habilidade especial"
              type="text"
              value={habilidadeEspecial}
              onChange={mudancaDeHabilidadeEspecial}
            />
          </div>

          <div className="linha">
            <Input
              label="Pensamento"
              placeholder="Digite seu pensamento"
              type="text"
              value={pensamento}
              onChange={mudancaDePensamento}
            />
            <Input
              label="Versículo"
              placeholder="Digite seu versículo"
              type="text"
              value={versiculo}
              onChange={mudancaDeVersiculo}
            />
          </div>

          <Input
            label="Poder Especial"
            placeholder="Digite seu poder especial"
            type="text"
            value={poderEspecial}
            onChange={mudancaDePoderEspecial}
          />

          <button className="myButton" onClick={onSubmitHandle}>
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
