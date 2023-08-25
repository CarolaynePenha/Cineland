import styled from "styled-components";
export default function Footer({ title, posterURL, weekday, time }) {
  return (
    <DivFooter>
      <img src={posterURL} alt={title} />
      <div>
        <p>{title}t</p>
        <p>
          {weekday} - {time}h.
        </p>
      </div>
    </DivFooter>
  );
}

const DivFooter = styled.footer`
  position: fixed;
  width: 100%;
  height: 120px;
  bottom: 0px;
  background-color: #d4cccc;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  p {
    color: #280000;
    width: fit-content;
    margin: 10px 0px;
  }
  img {
    height: 90%;
    margin: 0px 10px;
    border: solid #ffffff 5px;
  }
`;
