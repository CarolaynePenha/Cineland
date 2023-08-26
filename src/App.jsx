import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Movies from "./Movies/Movies";
import Header from "./Header/Header";
import Time from "./Time/Time";
import Seat from "./Seat/Seat";
import Receipt from "./Receipt/Receipt";

export default function App() {
  return (
    <DivApp>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/time/:movieID" element={<Time />} />
          <Route path="/seat/:sessionID" element={<Seat />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </DivApp>
  );
}

// --------------css
const DivApp = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
