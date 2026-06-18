import tolkien from "../assets/autores/tolkien.jpg";
import orwell from "../assets/autores/orwell.jpg";
import rowling from "../assets/autores/rowling.jpg";
import machado from "../assets/autores/machado.jpg";
import king from "../assets/autores/king.jpg";
import christie from "../assets/autores/christie.jpg";
import riordan from "../assets/autores/riordan.jpg";
import collins from "../assets/autores/collins.jpg";
import exupery from "../assets/autores/exupery.jpg";
import martin from "../assets/autores/martin.jpg";

function Autores() {

  const autores = [

    {
      nome: "J.R.R. Tolkien",

      imagem: tolkien,

      resumo:
        "Autor britânico criador do universo de O Senhor dos Anéis. Considerado um dos maiores escritores de fantasia da história.",
    },

    {
      nome: "George Orwell",

      imagem: orwell,

      resumo:
        "Escritor inglês famoso por críticas políticas e sociais. Autor da obra clássica 1984.",
    },

    {
      nome: "J.K. Rowling",

      imagem: rowling,

      resumo:
        "Criadora da saga Harry Potter. Revolucionou a literatura infantojuvenil moderna.",
    },

    {
      nome: "Machado de Assis",

      imagem: machado,

      resumo:
        "Um dos maiores escritores brasileiros. Fundador da Academia Brasileira de Letras.",
    },

    {
      nome: "Stephen King",

      imagem: king,

      resumo:
        "Mestre do terror moderno. Criador de clássicos como It, O Iluminado e Carrie.",
    },

    {
      nome: "Agatha Christie",

      imagem: christie,

      resumo:
        "Rainha do crime e mistério. Criadora dos detetives Hercule Poirot e Miss Marple.",
    },

    {
      nome: "Rick Riordan",

      imagem: riordan,

      resumo:
        "Autor da saga Percy Jackson. Mistura mitologia grega com aventura moderna.",
    },

    {
      nome: "Suzanne Collins",

      imagem: collins,

      resumo:
        "Criadora da série Jogos Vorazes. Uma das maiores autoras distópicas modernas.",
    },

    {
      nome: "Antoine de Saint-Exupéry",

      imagem: exupery,

      resumo:
        "Autor de O Pequeno Príncipe. Misturava filosofia, poesia e fantasia em suas obras.",
    },

    {
      nome: "Robert C. Martin",

      imagem: martin,

      resumo:
        "Conhecido como Uncle Bob. Referência mundial em Clean Code e arquitetura de software.",
    },

  ];

  return (

    <div>

      <h1>
        Autores
      </h1>

      <div className="autores-grid">

        {autores.map((autor, index) => (

          <div
            className="autor-card"
            key={index}
          >

            <img
              src={autor.imagem}
              alt={autor.nome}
              className="autor-imagem"
            />

            <h2>
              {autor.nome}
            </h2>

            <p>
              {autor.resumo}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Autores;