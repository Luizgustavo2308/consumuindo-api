import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [personagens, setPersonagens] = useState([]);

  useEffect(
    () => {

      const listaDePersonagens = async () => {
        try {
          const resposta = await axios.get("https://api.disneyapi.dev/character");
          setPersonagens(resposta.data.data);
        } catch (error) {
          console.log(error);
        }
      }
      listaDePersonagens();
    }, []
  );
  return (
    <>
      <h1 >PERSONAGENS DO UNIVERSO DISNEY</h1>
      {
        personagens.map((objeto) => (
          <li key={objeto.name}>
            <h3>{objeto.name}</h3>
            <h2>{ }</h2>
            <img src={objeto.imageUrl}></img>
            <h2>{objeto.films}</h2>
            <h2>{objeto.tvShows}</h2>
          </li>

        ))}
    </>
  )

}

export default App;
