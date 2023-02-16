import React, { Component } from "react";
import Wait from "./Wait";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  height:100vh;
  width:100%;
`;

export default class Proyects extends Component {
  render() {
    return (
      <Container id="proyects">
        <Wait/>
      </Container>
    );
  }
}
