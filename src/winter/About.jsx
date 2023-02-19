import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import perfil from "./../assets/perfilFoto.png";
import alas from "./../assets/alasNeon.png";

const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 50px;
  display: flex;
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
  width: 50%;
  height: 300px;
  padding: 50px 0px;
  flex-shrink: 0;
  display:flex;
  @media (max-width:600px){
    width:100%;
  }
`;

const Fond1 = styled.div`
  position: absolute;
  top: 20%;
  left: 14%;
  width: 60%;
  height: 60%;
  border-radius: 50% 20%;
  background-color: #06d5e5;
  filter: opacity(50%);
  filter: blur(5rem);
`;

const Fond2 = styled.div`
  height: 100%;
  position: absolute;
  top: -2%;
  left: 12%;
`;

const Textcontain = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 30px 10px;
  @media (max-width: 730px) {
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
  width: 100%;
  font-family: "Fira Sans Condensed", sans-serif;
  color: white;
  font-size: 2em;
`;
// 368 502
export default class About extends Component {
  constructor() {
    super();
    this.state = {
      neon: "none",
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("hola");
      this.setState({ neon: "block" });
      setTimeout(() => {
        this.setState({ neon: "none" });
      }, 100);
      setTimeout(() => {
        this.setState({ neon: "block" });
      }, 200);
      setTimeout(() => {
        this.setState({ neon: "none" });
      }, 2000);
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container id="about">
        <Margin />
        <Img>
          <Fond2 style={{ display: `${this.state.neon}` }}>
            <img src={alas} alt="alasNeon" style={{ height: "100%" }} />
          </Fond2>
          <Fond1 />
          <div style={{ height: "100%", position: "relative", top:"-10%",left:"15%" }}>
            <img
              src={perfil}
              alt="perfil"
              style={{ height:"120%", zIndex: "1500", position: "absolute"}}
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
