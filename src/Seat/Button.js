import styled from "styled-components";
import { useState } from "react";

export default function Button({ seat, ids }) {
  const [available, setAvailable] = useState({
    availability: seat.isAvailable,
    selected: "available",
  });

  if (available.availability) {
    return (
      <Div>
        <button
          onClick={() => availableSeat(available.selected)}
          className={available.selected}
          key={seat.name}
        >
          <p>{seat.name}</p>
        </button>
      </Div>
    );
  } else {
    return (
      <Div>
        <button
          onClick={() => alert("Assento indisponível")}
          className="unavailable"
          key={seat.name}
        >
          <p>{seat.name}</p>
        </button>
      </Div>
    );
  }
  function availableSeat(status) {
    if (status === "available") {
      setAvailable({ ...available, selected: "selected" });
      ids(seat);
    } else {
      setAvailable({ ...available, selected: "available" });
      ids(seat);
    }
  }
}

// --------------------------css
const Div = styled.div`
  button {
    border-radius: 50%;
    margin: 8px;
    width: 35px;
    display: flex;
    justify-content: center;
    border: none;
  }
  p {
    font-size: 16px;
    padding: 3px 0px;
    color: #e9e5e5;
  }
  .selected {
    background-color: #002800;
  }
  .unavailable {
    background-color: #5b0000;
  }
  .available {
    background-color: #e9e5e5;
  }
  .available p {
    color: #0c0000;
  }
`;
