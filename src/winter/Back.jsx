import styled from "styled-components";
import winter from "./../assets/winter.jpg";
import face from "./../assets/dragonCode.jpg";
import Title from "./Title";
import Head from "./Head";

let proporcion = window.innerWidth;
proporcion = proporcion / 2;

const Container = styled.div`
  width: 100%;
  height: ${proporcion}px;
  position: relative;
  background-image: url(${winter});
  background-repeat: no-repeat;
  background-size: 100%;
  box-shadow: inset 0 0 50px 50px black;
  display: flex;
`;

const Img = styled.div`
  position: absolute;
  width: 300px;
  height: auto;
  right: 200px;
  align-self: center;
`;

const StyleImg = styled.img`
  width: 100%;
  border-radius: 50%;
  transition: .2s all;
  &:hover {
    border-radius: 0;
  }
`;

export default function Back() {
  return (
    <Container>
      <Head />
      <Title />
      <Img>
        <StyleImg src={face} alt="perfil" />
      </Img>
    </Container>
  );
}
