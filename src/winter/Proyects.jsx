import React, { Component } from "react";
import { CloudMove } from "./Skills";
import { color } from "../color";
import icon from './../assets/tuerca.png';

import styled, {keyframes} from "styled-components";

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
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: space-around;
  padding-top: 50px;
  @media (max-width:900px){
    flex-direction:column;
  }
`;

const Descrip = styled.div`
  width: 40%;
`;

const Cub = styled.div`
  position: relative;
  border-radius: 30px;
  overflow:hidden;
  width:400px;
  height:400px;
  background-color: gray;
  display:flex;
  justify-content: center;
  align-items: center;
  
`;

const animate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  width: 40%;
  animation: 2s ${animate} linear infinite;
`;

function Proyect() {
  return (
    <Div>
      <Descrip>
        <h1>Lorem, ipsum.</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, earum id
        repellendus esse libero harum nulla porro aspernatur, voluptatem
        suscipit laudantium natus vel obcaecati ducimus similique ipsa
        repudiandae modi vero iure! Reiciendis atque perferendis, iste laborum
        fugiat corrupti quam minima laboriosam mollitia molestias sequi
        necessitatibus odit minus est distinctio vel at fugit dolorem
        reprehenderit quis blanditiis accusantium dignissimos. Sunt aut id ipsa
      </Descrip>
      <Cub>
        <Img src={icon} alt="icon"  />
      </Cub>
    </Div>
  );
}
