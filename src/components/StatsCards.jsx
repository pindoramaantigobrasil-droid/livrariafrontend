import {
  FaBook,
  FaHeart,
  FaLayerGroup,
} from "react-icons/fa";

function StatsCards({
  livros,
}) {

  const totalLivros =
    livros.length;

  const favoritos =
    livros.filter(
      (livro) =>
        livro.favorito
    ).length;

  const generos =
    new Set(
      livros.map(
        (livro) =>
          livro.genero
      )
    ).size;

  return (

    <div className="stats-grid">

      <div className="stats-card">

        <div className="stats-icon livros">
          <FaBook />
        </div>

        <div>

          <h3>
            {totalLivros}
          </h3>

          <p>
            Livros
          </p>

        </div>

      </div>

      <div className="stats-card">

        <div className="stats-icon favoritos">
          <FaHeart />
        </div>

        <div>

          <h3>
            {favoritos}
          </h3>

          <p>
            Favoritos
          </p>

        </div>

      </div>

      <div className="stats-card">

        <div className="stats-icon generos">
          <FaLayerGroup />
        </div>

        <div>

          <h3>
            {generos}
          </h3>

          <p>
            Gêneros
          </p>

        </div>

      </div>

    </div>
  );
}

export default StatsCards;