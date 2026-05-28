import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from "react-icons/fa";

import LivroForm from "./components/LivroForm";
import LivroCard from "./components/LivroCard";
import ModalEditar from "./components/ModalEditar";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";

import Home from "./pages/Home";
import Autores from "./pages/Autores";
import Privacy from "./pages/Privacy";

import "./App.css";

function DashboardHome({
  temaEscuro,
  alternarTema,
  logout,
  mensagem,
  tipoMensagem,
  livros,
  novoLivro,
  handleChange,
  cadastrarLivro,
  loading,
  busca,
  setBusca,
  filtroGenero,
  setFiltroGenero,
  generos,
  livrosFiltrados,
  editarLivro,
  abrirModalDelete,
  favoritarLivro,
  modalAberto,
  salvarLivro,
  fecharModal,
}) {

  return (

    <div className="container">

      <div className="topo-header">

        <h1>
          Sistema Livraria
        </h1>

        <div className="acoes-topo">

          <button
            className="botao-tema"
            onClick={alternarTema}
          >

            {temaEscuro
              ? <FaSun />
              : <FaMoon />}

          </button>

          <button
            className="botao-logout"
            onClick={logout}
          >

            <FaSignOutAlt />

          </button>

        </div>

      </div>

      <StatsCards livros={livros} />

      {mensagem && (

        <div
          className={`mensagem ${tipoMensagem}`}
        >
          {mensagem}
        </div>
      )}

      <LivroForm
        novoLivro={novoLivro}
        handleChange={handleChange}
        salvarLivro={cadastrarLivro}
        loading={loading}
      />

      <div className="filtros">

        <input
          type="text"
          className="campo-busca"
          placeholder="Pesquisar livro..."
          value={busca}
          onChange={(e) =>
            setBusca(e.target.value)
          }
        />

        <select
          className="campo-genero"
          value={filtroGenero}
          onChange={(e) =>
            setFiltroGenero(
              e.target.value
            )
          }
        >

          <option value="">
            Todos os gêneros
          </option>

          {generos.map(
            (genero, index) => (

              <option
                key={index}
                value={genero}
              >
                {genero}
              </option>
            )
          )}

        </select>

      </div>

      {loading ? (

        <div className="loading">

          <h2>
            Carregando livros...
          </h2>

        </div>

      ) : (

        <div className="livros-grid">

          {livrosFiltrados.map(
            (livro) => (

              <LivroCard
                key={livro.id}
                livro={livro}
                editarLivro={editarLivro}
                deletarLivro={() =>
                  abrirModalDelete(
                    livro
                  )
                }
                favoritarLivro={
                  favoritarLivro
                }
              />
            )
          )}

        </div>

      )}

      {modalAberto && (

        <ModalEditar
          livro={novoLivro}
          handleChange={handleChange}
          salvarLivro={salvarLivro}
          fecharModal={fecharModal}
        />
      )}

    </div>
  );
}

function App() {

  const [token, setToken] =
    useState(
      localStorage.getItem("token")
    );

  const [livros, setLivros] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [temaEscuro, setTemaEscuro] =
    useState(true);

  const [busca, setBusca] =
    useState("");

  const [filtroGenero, setFiltroGenero] =
    useState("");

  const [mensagem, setMensagem] =
    useState("");

  const [tipoMensagem, setTipoMensagem] =
    useState("");

  const [novoLivro, setNovoLivro] =
    useState({
      id: null,
      titulo: "",
      autor: "",
      genero: "",
      preco: "",
    });

  const [modalAberto, setModalAberto] =
    useState(false);

  useEffect(() => {

    if (token) {
      buscarLivros();
    }

  }, [token]);

  function logout() {

    localStorage.removeItem("token");

    setToken(null);
  }

  function alternarTema() {

    setTemaEscuro(!temaEscuro);
  }

  function mostrarMensagem(texto, tipo) {

    setMensagem(texto);

    setTipoMensagem(tipo);

    setTimeout(() => {

      setMensagem("");

    }, 3000);
  }

  function buscarLivros() {

    setLoading(true);

    axios
      .get(
        "http://localhost:8081/livros",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      )

      .then((response) => {

        const livrosComFavorito =
          response.data.map((livro) => ({
            ...livro,
            favorito: false,
          }));

        setLivros(livrosComFavorito);
      })

      .catch(() => {

        mostrarMensagem(
          "Erro ao buscar livros.",
          "erro"
        );
      })

      .finally(() => {

        setLoading(false);
      });
  }

  function favoritarLivro(id) {

    const novosLivros =
      livros.map((livro) => {

        if (livro.id === id) {

          return {
            ...livro,
            favorito:
              !livro.favorito,
          };
        }

        return livro;
      });

    setLivros(novosLivros);
  }

  function handleChange(event) {

    setNovoLivro({
      ...novoLivro,
      [event.target.name]:
        event.target.value,
    });
  }

  function salvarLivro(event) {

    event.preventDefault();

    axios
      .put(
        `http://localhost:8081/livros/${novoLivro.id}`,
        novoLivro
      )

      .then(() => {

        buscarLivros();

        fecharModal();

        mostrarMensagem(
          "Livro atualizado!",
          "sucesso"
        );
      });
  }

  function cadastrarLivro(event) {

    event.preventDefault();

    axios
      .post(
        "http://localhost:8081/livros",
        novoLivro
      )

      .then(() => {

        buscarLivros();

        limparFormulario();

        mostrarMensagem(
          "Livro cadastrado!",
          "sucesso"
        );
      });
  }

  function abrirModalDelete(livro) {

    console.log(livro);
  }

  function editarLivro(livro) {

    setNovoLivro(livro);

    setModalAberto(true);
  }

  function fecharModal() {

    setModalAberto(false);

    limparFormulario();
  }

  function limparFormulario() {

    setNovoLivro({
      id: null,
      titulo: "",
      autor: "",
      genero: "",
      preco: "",
    });
  }

  const generos = [

    ...new Set(
      livros.map(
        (livro) => livro.genero
      )
    ),
  ];

  const livrosFiltrados =
    livros.filter((livro) => {

      const tituloValido =
        livro.titulo
          .toLowerCase()
          .includes(
            busca.toLowerCase()
          );

      const generoValido =
        filtroGenero === "" ||
        livro.genero ===
          filtroGenero;

      return (
        tituloValido &&
        generoValido
      );
    });

  if (!token) {

    return (
      <Login setToken={setToken} />
    );
  }

  return (

    <BrowserRouter>

      <div
        className={
          temaEscuro
            ? "app dark"
            : "app light"
        }
      >

        <Sidebar />

        <div className="main-content">

          <Routes>

            <Route
              path="/"
              element={
                <DashboardHome
                  temaEscuro={temaEscuro}
                  alternarTema={alternarTema}
                  logout={logout}
                  mensagem={mensagem}
                  tipoMensagem={tipoMensagem}
                  livros={livros}
                  novoLivro={novoLivro}
                  handleChange={handleChange}
                  cadastrarLivro={cadastrarLivro}
                  loading={loading}
                  busca={busca}
                  setBusca={setBusca}
                  filtroGenero={filtroGenero}
                  setFiltroGenero={setFiltroGenero}
                  generos={generos}
                  livrosFiltrados={livrosFiltrados}
                  editarLivro={editarLivro}
                  abrirModalDelete={abrirModalDelete}
                  favoritarLivro={favoritarLivro}
                  modalAberto={modalAberto}
                  salvarLivro={salvarLivro}
                  fecharModal={fecharModal}
                />
              }
            />

            <Route
              path="/autores"
              element={<Autores />}
            />

            <Route
              path="/privacy"
              element={<Privacy />}
            />

            <Route
              path="/home"
              element={<Home />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;