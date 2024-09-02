import React, { useState, useEffect } from "react";
import axios from "axios";

const IMCCalculator = () => {
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/imc/", {
        nome: nome,
        altura: altura,
        peso: peso,
      });
      setIMC(response.data.imc);
      setShowResult(true); // Mostra o resultado
    } catch (error) {
      console.error("Houve um erro ao calcular o IMC!", error);
    }
  };

  const getIMCCategory = (imc) => {
    if (imc < 18.5) {
      return { category: "Abaixo do peso", className: "alert-warning" };
    } else if (imc >= 18.5 && imc <= 24.9) {
      return { category: "Peso normal", className: "alert-success" };
    } else if (imc >= 25 && imc <= 29.9) {
      return { category: "Sobrepeso", className: "alert-warning" };
    } else if (imc >= 30 && imc <= 34.9) {
      return { category: "Obesidade grau I", className: "alert-danger" };
    } else if (imc >= 35 && imc <= 39.9) {
      return { category: "Obesidade grau II", className: "alert-danger" };
    } else if (imc >= 40) {
      return {
        category: "Obesidade grau III (obesidade mórbida)",
        className: "alert-danger",
      };
    } else {
      return { category: "Valor inválido", className: "alert-dark" };
    }
  };

  useEffect(() => {
    let timer;
    if (showResult) {
      timer = setTimeout(() => {
        setShowResult(false); // Esconde o resultado após 20 segundos
      }, 20000);
    }
    return () => clearTimeout(timer); // Limpa o temporizador se o componente for desmontado
  }, [showResult]);

  return (
    <div className="container-fluid mt-5 col-sm-12">
      <h1 className="text-center mb-4 card-header">Calculadora de IMC</h1>
      <div className="card row d-flex flex-column justify-content-center align-items-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className=" card-body mb-3">
            <div className="mb-3">
              <label htmlFor="nome" className="card-title form-label">
                Nome:
              </label>
              <input
                type="text"
                className="form-control card-text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="altura" className="form-label card-title">
                Altura (em metros):
              </label>
              <input
                type="number"
                className="form-control card-text"
                id="altura"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                step="0.01"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="peso" className="form-label card-title">
                Peso (em quilogramas):
              </label>
              <input
                type="number"
                className="form-control card-text"
                id="peso"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                step="0.01"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Calcular IMC
            </button>
          </form>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {showResult && imc && (
              <>
                <div
                  className={`alert ${getIMCCategory(imc).className}`}
                  role="alert"
                >
                  {nome}, seu IMC é: {imc.toFixed(2)} -{" "}
                  {getIMCCategory(imc).category}
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Informações sobre o IMC</h5>
                    <p className="card-text">
                      Você está na categoria:{" "}
                      <strong>{getIMCCategory(imc).category}</strong>.
                    </p>
                    <div class="container text-center mt-5">
                      <div class="row justify-content-center">
                        <div class="col-md-8">
                          <div class="jumbotron">
                            <h1 class="display-4">Mantenha o Foco!</h1>
                            <p class="lead">
                              A persistência é o caminho do êxito.
                            </p>
                            <p>
                              Não importa quão difícil seja a jornada, continue
                              avançando. Cada passo que você dá o aproxima de
                              seus objetivos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMCCalculator;
