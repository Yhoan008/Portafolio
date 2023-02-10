import { useEffect, useState } from "react";
import styled from "styled-components";
import winter from "./../assets/winter.jpg";
import face from "./../assets/dragonCode.jpg";
import Title from "./Title";
import Head from "./Head";

const Container = styled.div`
  width: 100%;
  position: relative;
  background-image: url(${winter});
  background-repeat: no-repeat;
  background-size: 100%;
  box-shadow: inset 0 0 50px 50px black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Img = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  margin: auto;
  border-radius: 50%;
  transition: 0.2s all;
  overflow: hidden;
  z-index: 100;
  object-fit: contain;
`;

export default function Back({idiom,changeidiom}) {
  const [pantalla, setPantalla] = useState(window.innerWidth);
  const [hover, setHover] = useState(false);

  const containerStyle = {
    height: `${pantalla / 2}px`,
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setHover(true);
    }
  });

  window.addEventListener("resize", () => {
    setPantalla(window.innerWidth);
  });

  return (
    <Container style={containerStyle} id="home">
      <Shadow pantalla={pantalla} hover={hover} />
      <Head hover={hover} idiom={idiom} changeidiom={changeidiom} />
      <Title pantalla={pantalla} idiom={idiom} />
      <Img
        onMouseEnter={() => {
          setHover(true);
        }}
      >
        <img src={face} alt="perfil" style={{ height:'100%' }} />
      </Img>
    </Container>
  );
}

const ShadowStyle = styled.div`
  position: absolute;
  transition: 0.5s;
  border-radius: 50%;
  z-index: 10;
`;

function Shadow({ pantalla, hover }) {
  const shadowStyle = {
    zIndex: `${hover == true ? -10 : 10}`,
    width: `${pantalla + 100}px`,
    height: `${pantalla + 100}px`,
    top: `-${pantalla / 3.4}px`,
    boxShadow: `inset 0 0 0 ${hover == true ? 0 : pantalla / 2}px black`,
  };

  return <ShadowStyle style={shadowStyle} />;
}
