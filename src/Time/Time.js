import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

import Footer from "../Footer/Footer";

import loading from "./../img/Spinner-1s-200px.gif";

export default function Time() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`
    );
    promise.then((response) => {
      const { data } = response;
      setMovie(data);
    });
    promise.catch((error) => console.log(error.response));
  }, []);

  if (movie === null) {
    return (
      <Load>
        <img src={loading} />
      </Load>
    );
  }
  const { days } = movie;
  const { title, posterURL } = movie;

  return (
    <Container>
      <p className="title">Selecione o horário desejado.</p>
      {days.map((day) => {
        const { weekday, date, showtimes } = day;
        return (
          <div className="data">
            <div className="date">
              <p>
                {" "}
                {weekday} - {date}
              </p>
            </div>
            {showtimes.map((time) => (
              <Link to={`/seat/${time.id}`}>
                <button key={time.id}>
                  <p>{time.name}</p>
                </button>
              </Link>
            ))}
          </div>
        );
      })}
      <Footer title={title} posterURL={posterURL} />
    </Container>
  );
}

// --------------------------css
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 140px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    padding: 30px;
  }

  button {
    width: 10em;
    height: 3rem;
    margin-right: 15px;
    background-color: #002828;
    color: #d4cccc;
  }

  .data {
    height: fit-content;
    width: fit-content;
    margin: 20px 0px;
  }
  .date {
    margin-bottom: 15px;
  }
  .date p {
    font-size: 20px;
    text-align: start;
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
