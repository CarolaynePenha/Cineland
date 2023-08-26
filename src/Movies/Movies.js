import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import loading from "./../img/Spinner-1s-200px.gif";

export default function Movies() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((response) => {
      const { data } = response;
      setMovies(data);
    });
    promise.catch((error) => console.log("error", error.response));
  }, []);
  if (movies === null) {
    return (
      <Load>
        <img src={loading} />
      </Load>
    );
  } else {
    return (
      <>
        <Div>
          <p>Selecione o filme. </p>
        </Div>
        <Section>
          {movies.map((movie) => {
            const { posterURL, id } = movie;
            return (
              <div className="movie">
                <Link to={`/time/${id}`}>
                  <img src={posterURL} />
                </Link>
              </div>
            );
          })}
        </Section>
      </>
    );
  }
}

// -----------------------------css

const Div = styled.div`
  padding-top: 25%;
  p {
    margin: 30px 0px;
  }
`;
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  a {
    display: flex;
    justify-content: center;
  }

  img {
    width: 90%;
    height: 90%;
  }
  .movie {
    width: 35%;
    border: solid #beb2b2 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
  }
`;

const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
  }
`;
