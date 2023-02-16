import React from "react";
import styled, { keyframes } from "styled-components";
import tuerca from "./../assets/tuerca.png"

const Contain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const iconanimation = keyframes`
    0%{
    transform:rotate(0deg);
  }
  25%{
    transform:rotate(90deg);
  }
  50%{
    transform:rotate(180deg);
  }
  75%{
    transform:rotate(270deg);
  }
  100%{
    transform:rotate(360deg);
  }
`;

const Div = styled.div`
    animation: 10s ${iconanimation} infinite;
`;

export default function Wait() {
  
  return (
    <Contain>
        <h1 style={{fontSize:"3em",marginBottom:"100px"}} >En construcción ... </h1>
      <Div>
        <img src={tuerca} alt="setting" />
      </Div >
    </Contain>
  );
}
