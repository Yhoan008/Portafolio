import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import perfil from "./../assets/perfilFoto.png";
import { color } from "../color";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  z-index: 1400;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Margin = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0 50px 50px black;
`;

const Img = styled.div`
  position: relative;
  padding: 40px;
  box-sizing: border-box;
`;

const rotate1 = keyframes`
  0%{
    transform:rotate(0deg);
  }
  25%{
    transform:rotate(90deg);
  }
  50%{
    transform:rotate(180deg);
  }
  75%{
    transform:rotate(270deg);
  }
  100%{
    transform:rotate(360deg);
  }
`;
const rotate2 = keyframes`
  0%{
    transform:rotate(360deg);
  }
  25%{
    transform:rotate(270deg);
  }
  50%{
    transform:rotate(180deg);
  }
  75%{
    transform:rotate(90deg);
  }
  100%{
    transform:rotate(0deg);
  }
`;

const Fond1 = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  width: 60%;
  height: 60%;
  border-radius: 50% 20%;
  background-color: ${color.orange};
  filter: opacity(50%);
  animation: 5s ${rotate1} infinite;
  filter: blur(3rem);
`;

const Fond2 = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  width: 60%;
  height: 60%;
  border-radius: 20% 50%;
  background-color: ${color.blueLight};
  filter: opacity(50%);
  animation: 5s ${rotate2} infinite;
  filter: blur(5rem);
`;

const Textcontain = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 30px 100px;
  @media (max-width:730px){
    padding: 30px 10px;
  }
`;

const H2 = styled.h2`
  display: block;
  color: white;
  font-size: 2.5em;
  font-family: "Lilita One", cursive; // titulos
`;

const P = styled.p`
  display: block;
  font-family: "Fira Sans Condensed", sans-serif;
  color: white;
  font-size: 2em;
`;
// 368 502
export default class About extends Component {
  render() {
    return (
      <Container id="about">
        <Margin />
        <Img>
          <Fond1 />
          <Fond2 />
          <div
            style={{ width: "368px", height: "502px", position: "relative" }}
          >
            <img
              src={perfil}
              alt="perfil"
              style={{ width: "100%", zIndex: "1500", position: "absolute" }}
            />
          </div>
        </Img>
        <Textcontain>
          <H2>{this.props.idiom.aboutTitle}</H2>
          <P>{this.props.idiom.aboutDescription}</P>
        </Textcontain>
      </Container>
    );
  }
}
