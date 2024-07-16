import { useState } from "react";

export default function CadNew() {
  //estado inicial do formulario
  const initialForm = {
    nome: "",
    email: "",
  };
  //estado do formulario
  const [formState, setFormState] = useState(initialForm);
  //Função para lidar com a alteração dos campos
  const handleInput = (event) => {
    //obter o elemento de entrada atual
    const target = event.currentTarget;
    //Extrair o valor do campo
    const { value, name } = target;
    //Atualizar o estado do formulario com os novos valores
    setFormState({ ...formState, [name]: value });
  };

  //Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    const formGeneral = {
      nome: formState.nome,
      email: formState.email,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formGeneral),
    };
    fetch("http://localhost:7000/news", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setFormState({ ...initialForm });
      });
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          className="form-control"
          name="nome"
          value={formState.nome}
          onChange={handleInput}
          id="nome"
          required
        />
      </div>
      <div className="form-group2">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={formState.email}
          onChange={handleInput}
          id="email"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}
