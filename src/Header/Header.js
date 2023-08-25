import styled from "styled-components";
export default function Header() {
  return (
    <DivHeader>
      <p> Cineland</p>
    </DivHeader>
  );
}

const DivHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 120px;
  background-color: #280000;
  display: flex;
  align-items: center;
  p {
    color: #e9e5e5;
    width: 100%;
  }
`;
