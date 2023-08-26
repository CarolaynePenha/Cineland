import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Inputs({ seatsId, seatsName, title, date, time }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  function post(event) {
    event.preventDefault();
    const obj = {
      ids: seatsId,
      name: { name },
      cpf: { cpf },
      seatsName: { seatsName },
      title: { title },
      date: { date },
      time: { time },
    };
    navigate(`/receipt`, { state: { obj } });
    const promise = axios.post(
      `https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`,
      obj
    );

    promise.then((response) => {
      navigate(`/receipt`, { state: { obj } });
    });
    promise.catch((error) => console.log(error.response));
  }
  return (
    <Form onSubmit={post}>
      <input
        type="text"
        maxlength="50"
        minLength="5"
        required
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        size="11"
        required
        placeholder="Digite seu cpf"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <button type="submit" className="save-button">
        Reservar assento(s)
      </button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  input {
    width: 80%;
    height: 50px;
    margin-top: 30px;
    border: solid #002828 2px;
  }
  button {
    width: 50%;
    height: 40px;
    margin-top: 30px;
    background-color: #002828;
    color: #e9e5e5;
    border: none;
    filter: drop-shadow(3px 5px 5px #0325357c);
  }
`;
