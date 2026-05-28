import { useEffect, useState } from "react";

import axios from "axios";

import senhoraneis from "../assets/livros/senhoraneis.jpg";
import harrypotter from "../assets/livros/harrypotter.jpg";
import domcasmurro from "../assets/livros/domcasmurro.jpg";
import livro1984 from "../assets/livros/1984.jpg";
import dracula from "../assets/livros/dracula.jpg";
import percyjackson from "../assets/livros/percyjackson.jpg";
import jogosvorazes from "../assets/livros/jogosvorazes.jpg";
import acabana from "../assets/livros/acabana.jpg";
import cleancode from "../assets/livros/cleancode.jpg";
import pequenoprincipe from "../assets/livros/pequenoprincipe.jpg";

function Home() {

  const [livros, setLivros] = useState([]);

  const capas = {
    "O Senhor dos Aneis": senhoraneis,
    "Harry Potter e a Pedra Filosofal": harrypotter,
    "Dom Casmurro": domcasmurro,
    "1984": livro1984,
    "Dracula": dracula,
    "Percy Jackson": percyjackson,
    "Jogos Vorazes": jogosvorazes,
    "A Cabana": acabana,
    "Clean Code": cleancode,
    "O Pequeno Principe": pequenoprincipe,
  };

  useEffect(() => {

    buscarLivros();

  }, []);

  async function buscarLivros() {

    try {

      const response = await axios.get(
        "http://localhost:8081/livros"
      );

      setLivros(response.data);

    } catch (error) {

      console.log(error);

    }
  }

  return (

    <div>

      <h1>
        Sistema Livraria
      </h1>

      <div className="livros-grid">

        {livros.map((livro) => (

          <div
            className="livro-card"
            key={livro.id}
          >

            <h2>
              {livro.titulo}
            </h2>

            <img
              src={capas[livro.titulo] || senhoraneis}
              alt={livro.titulo}
              className="livro-imagem"
            />

            <p>
              <strong>Autor:</strong> {livro.autor}
            </p>

            <p>
              <strong>Gênero:</strong> {livro.genero}
            </p>

            <p>
              <strong>Preço:</strong> R$ {livro.preco}
            </p>

            <button className="botao-editar">
              Editar
            </button>

            <button className="botao-deletar">
              Excluir
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;