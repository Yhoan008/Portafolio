import React, { Component } from "react";
import styled from "styled-components";
import winter from "./../assets/winter2.jpeg";

const Container = styled.section`
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
  font-family: "Lilita One", cursive; // titulos
`;

const P = styled.p`
  font-family: "Fira Sans Condensed", sans-serif;
  color: white;
  font-size: 2em;
`;

export default class About extends Component {
  // constructor() {
  //   super(props);
  //   this.state = {
  //     idiom: this.props.idiom,
  //   };
  // }
  render() {
    return (
      <Container id="about" >
        <Img />
        <div
          style={{
            width: "600px",
          }}
        >
          <H2>{this.props.idiom.aboutTitle}</H2>
          <P>{this.props.idiom.aboutDescription}</P>
        </div>
      </Container>
    );
  }
}
