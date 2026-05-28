function LivroForm({
  novoLivro,
  handleChange,
  salvarLivro,
  modoEdicao,
  loading,
}) {
  return (
    <form className="formulario" onSubmit={salvarLivro}>
      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={novoLivro.titulo}
        onChange={handleChange}
      />

      <input
        type="text"
        name="autor"
        placeholder="Autor"
        value={novoLivro.autor}
        onChange={handleChange}
      />

      <input
        type="text"
        name="genero"
        placeholder="Gênero"
        value={novoLivro.genero}
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.01"
        name="preco"
        placeholder="Preço"
        value={novoLivro.preco}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {modoEdicao ? "Atualizar Livro" : "Cadastrar Livro"}
      </button>
    </form>
  );
}

export default LivroForm;
