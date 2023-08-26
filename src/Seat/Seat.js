import Footer from "../Footer/Footer";
import Button from "./Button";
import Inputs from "./Inputs";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import loading from "./../img/Spinner-1s-200px.gif";

export default function Seat() {
  const { sessionID } = useParams();
  const [session, setSession] = useState(null);
  const [seatsId, setSeatId] = useState([]);
  const [seatsName, setSeatName] = useState([]);

  function ids(seat) {
    setSeatId([...seatsId, seat.id]);
    setSeatName([...seatsName, seat.name]);
  }
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`
    );
    promise.then((response) => {
      const { data } = response;
      setSession(data);
    });
    promise.catch((error) => console.log(error.response));
  }, []);

  if (session === null) {
    return (
      <Load>
        <img src={loading} />
      </Load>
    );
  }

  const { movie, name: time, day, seats } = session;
  const { title, posterURL } = movie;
  const { weekday, date } = day;

  return (
    <>
      <Section>
        <h1> Selecione os assentos.</h1>
        <div className="seats">
          {seats.map((seat) => (
            <Button seat={seat} ids={ids} />
          ))}
        </div>
        <Legend>
          <div className="selected"></div>
          <p>Selecionado</p>
          <div className="unavailable"></div>
          <p>Indisponível</p>
          <div className="available"></div>
          <p>Disponível</p>
        </Legend>
        <Inputs
          seatsId={seatsId}
          seatsName={seatsName}
          title={title}
          date={date}
          time={time}
        />
      </Section>

      <Footer
        title={title}
        posterURL={posterURL}
        weekday={weekday}
        time={time}
      />
    </>
  );
}

// ---------------------------css
const Section = styled.section`
  margin: 140px 0px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .seats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  p {
    font-size: 20px;
  }
  h1 {
    font-size: 22px;
    margin: 20px 0px;
  }
`;
const Legend = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  p {
    font-size: 16px;
    margin-right: 10px;
  }
  .selected {
    background-color: #002800;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0px 5px;
  }
  .unavailable {
    background-color: #5b0000;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0px 5px;
  }
  .available {
    background-color: #e9e5e5;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0px 5px;
  }
`;

const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  img {
    width: 250px;
  }
`;
