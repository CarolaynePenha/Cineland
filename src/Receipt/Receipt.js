import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import meme from "./tumblr_m2su7wfSRR1qhlnuu.gif";

export default function Receipt() {
  const location = useLocation();
  const { obj } = location.state;
  const navigate = useNavigate();

  const { name } = obj.name;
  const { seatsName } = obj.seatsName;
  const { cpf } = obj.cpf;
  const { time } = obj.time;
  const { title } = obj.title;
  const { date } = obj.date;

  return (
    <Section>
      <h1>
        <strong>Pedido realizado com sucesso!</strong>
      </h1>
      <div>
        <strong>Filme e sessão</strong>
        <p>{title}</p>
        <p>
          {date} {time}h
        </p>
      </div>
      <div>
        <strong>Ingressos</strong>
        {seatsName.map((seatName) => (
          <p>Assento: {seatName}</p>
        ))}
      </div>
      <div>
        <strong>Comprador</strong>
        <p>Nome do comprador: {name}</p>
        <p>CPF do comprador: {cpf}</p>
      </div>
      <img src={meme} />
      <button onClick={() => navigate("/")}>Voltar para Home.</button>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 140px;
  margin-left: 10%;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  strong {
    font-size: 22px;
    font-weight: 700;
    margin-top: 30px;
  }
  p {
    font-size: 20px;
    margin: 10px 0px;
    width: 100%;
    text-align: start;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  h1 {
    color: #002828;
    margin: 0px auto;
  }
  img {
    width: 50%;
    margin: 0px auto;
    margin-top: 20px;
  }
  button {
    width: 50%;
    height: 40px;
    margin: 0px auto;
    margin-top: 30px;
    background-color: #002828;
    color: #e9e5e5;
    border: none;
    filter: drop-shadow(3px 5px 5px #0325357c);
  }
`;
