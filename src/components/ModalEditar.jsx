function ModalEditar({
  livro,
  handleChange,
  salvarLivro,
  fecharModal,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Editar Livro</h2>

        <form onSubmit={salvarLivro}>

          <input
            type="text"
            name="titulo"
            placeholder="Título"
            value={livro.titulo}
            onChange={handleChange}
          />

          <input
            type="text"
            name="autor"
            placeholder="Autor"
            value={livro.autor}
            onChange={handleChange}
          />

          <input
            type="text"
            name="genero"
            placeholder="Gênero"
            value={livro.genero}
            onChange={handleChange}
          />

          <input
            type="number"
            step="0.01"
            name="preco"
            placeholder="Preço"
            value={livro.preco}
            onChange={handleChange}
          />

          <div className="modal-botoes">

            <button
              type="submit"
              className="salvar-modal"
            >
              Salvar
            </button>

            <button
              type="button"
              className="cancelar-modal"
              onClick={fecharModal}
            >
              Cancelar
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default ModalEditar;