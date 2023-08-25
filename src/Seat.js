import Footer from "./Footer/Footer";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Seat() {
  const { sessionID } = useParams();

  const [session, setSession] = useState(null);
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
    return <p>Carregando</p>;
  }
  console.log(session);
  const { movie, name: time, day } = session;
  const { title, posterURL } = movie;
  const { weekday } = day;
  return (
    <>
      <Footer
        title={title}
        posterURL={posterURL}
        weekday={weekday}
        time={time}
      />
    </>
  );
}
