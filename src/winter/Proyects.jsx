import React, { Component } from "react";
import { CloudMove } from "./Skills";
import { color } from "../color";
import folio from "./../assets/masteryportfolio.png";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, ${color.blueDark} 80%, #000051);
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

const Link = styled.a`
  position: relative;
  height: 30vw;
  border-radius: 20px;
  margin-top: 40px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(110%);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Proyect() {
  return (
    <>
      <Link href="https://Yhoan008.github.io/masteryportfolio" target="_blank">
        <Img src={folio} alt="portfolio" />
      </Link>
    </>
  );
}
