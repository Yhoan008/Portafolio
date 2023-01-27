import React, { Component } from "react";
import styled from "styled-components";
import winter from "./../assets/winter2.jpeg";

const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: inset 0 0 20px 20px black;
  background-image: url(${winter});
  background-repeat: no-repeat;
  background-position: 0 -200px;
  background-size: 100%;
`;

const H2 = styled.h2`
  color: white;
  font-size: 2.5em;
`;

const P = styled.p`
  color: white;
  font-size: 2em;
`;

export default class About extends Component {
  render() {
    return (
      <Container>
        <Img />
        <div
          style={{
            width: "600px",
          }}
        >
          <H2>Acerca de mi</H2>
          <P>
            Hola, soy Yhoan Moreno, soy Programador front end y diseñador
            Junior, no tengo experiencia en la industria mas allá de mis
            proyectos personales, aunque si cuento con unas infinitas ganas de
            aprender. Actualmente resido en la ciudad de Bogota Colombia.
          </P>
        </div>
      </Container>
    );
  }
}
