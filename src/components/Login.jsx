import { useState } from "react";

import axios from "axios";

function Login({ setToken }) {

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [modoCadastro, setModoCadastro] =
    useState(false);

  async function handleSubmit(event) {

    event.preventDefault();

    try {

      const endpoint = modoCadastro
        ? "register"
        : "login";

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/${endpoint}`,
        {
          username,
          password,
        }
      );

      if (modoCadastro) {

        alert(
          "Usuário cadastrado com sucesso!"
        );

        setModoCadastro(false);

        return;
      }

      const token = response.data.token;

      localStorage.setItem("token", token);

      setToken(token);

    } catch (error) {

      alert(
        error.response?.data ||
        "Erro na autenticação"
      );
    }
  }

  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <h1>
          {modoCadastro
            ? "Cadastro"
            : "Login"}
        </h1>

        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">

          {modoCadastro
            ? "Cadastrar"
            : "Entrar"}

        </button>

        <p
          className="trocar-modo"
          onClick={() =>
            setModoCadastro(!modoCadastro)
          }
        >

          {modoCadastro
            ? "Já possui conta? Fazer login"
            : "Não possui conta? Criar conta"}

        </p>

      </form>

    </div>
  );
}

export default Login;