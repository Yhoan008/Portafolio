import { useState } from "react";
import Navbutton from "./Navbutton";
import styled, { keyframes } from "styled-components";
import dragonIcon from "./../assets/dragonIcon.png";

const Contain = styled.nav`
  position: fixed;
  top: 0;
  margin: 0;
  width: 100vw;
  height:70px;
  backdrop-filter: blur(2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1500;
`;

const BackContain= styled.div`
  position:fixed;
  width:100%;
  height:100%;
  background-color: red;
  z-index:1450;
`;

const Name = styled.div`
  display: flex;
  width:200px;
  margin: 0 20px;
`;

const Img = styled.div`
  width: 35px;
  height: auto;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const ImgStyle = styled.img`
  width: 100%;
`;

const H2 = styled.h2`
  color: white;
  font-family: "Lobster", cursive;
`;

export default function Head({ hover, idiom, changeidiom }) {
  const ulStyle = {
    zIndex: `${hover == true ? 10000 : -100}`,
  };

  return (
    <Contain style={ulStyle}>
      <a href="#home" style={{ textDecoration: "none" }}>
        <Name style={{ cursor: "pointer" }}>
          <Img>
            <ImgStyle src={dragonIcon} alt="Dragon colorfull" />
          </Img>
          <H2>{idiom.navName}</H2>
        </Name>
      </a>
      <Navbutton idiom={idiom} changeidiom={changeidiom} />
    </Contain>
  );
}

