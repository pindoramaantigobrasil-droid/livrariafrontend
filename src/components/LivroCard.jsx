import { FaHeart, FaRegHeart } from "react-icons/fa";

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

function LivroCard({
  livro,
  editarLivro,
  deletarLivro,
  favoritarLivro,
}) {

  const capas = {
    "O Senhor dos Anéis": senhoraneis,
    "O Senhor dos Aneis": senhoraneis,

    "Harry Potter e a Pedra Filosofal": harrypotter,

    "Dom Casmurro": domcasmurro,

    "1984": livro1984,

    "Drácula": dracula,
    "Dracula": dracula,

    "Percy Jackson": percyjackson,

    "Jogos Vorazes": jogosvorazes,

    "A Cabana": acabana,

    "Clean Code": cleancode,

    "O Pequeno Príncipe": pequenoprincipe,
    "O Pequeno Principe": pequenoprincipe,
  };

  return (

    <div className={`card ${livro.favorito ? "favorito" : ""}`}>

      <div className="topo-card">

        <h2>{livro.titulo}</h2>

        <button
          className="botao-favorito"
          onClick={() => favoritarLivro(livro.id)}
        >
          {livro.favorito ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>

      </div>

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

      <button
        className="botao-editar"
        onClick={() => editarLivro(livro)}
      >
        Editar
      </button>

      <button
        className="botao-deletar"
        onClick={deletarLivro}
      >
        Excluir
      </button>

    </div>
  );
}

export default LivroCard;