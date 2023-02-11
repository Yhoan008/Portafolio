import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top:300px;
`;

const H1 = styled.h1`
  color: red;
  text-align: center;
  font-size:1.5em;
`;

export default class Proyects extends Component {
  render() {
    return (
      <Container>
        <H1>PROYECTOS</H1>
        <h1>hola raro</h1>
      </Container>
    );
  }
}
