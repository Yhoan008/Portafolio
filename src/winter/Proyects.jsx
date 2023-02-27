import React, { Component } from "react";
import { CloudMove } from "./Skills";
import { color } from "../color";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:linear-gradient(to bottom, ${color.blueDark} 80%, #000051 ) ;
`;



export default class Proyects extends Component {
  render() {
    return (
      <Container id="proyects">
        <CloudMove title={this.props.idiom.proyectTitle} />
        <Proyect />
      </Container>
    );
  }
}

const Div = styled.div`
  position: relative;
  width: 50%;
  height:30vw;
  border-radius: 20px;
  border:2px solid red;
  background-color: gray;
`;


function Proyect() {
  return (
    <>
      <Div/>
    </>
  );
}
