import React from "react";
import styled from "styled-components";
import imagen from "../assets/dragonCode.jpg";

const Contain = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border: 4px solid #f420bf;
  border-radius: 50%;
  margin: auto;
  top: -80px;
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  border-radius: 50%;
  top: 5px;
`;

export default function Foto() {
  return (
    <Contain>
      <Img src={imagen} alt="Dragon Coding" />
    </Contain>
  );
}
