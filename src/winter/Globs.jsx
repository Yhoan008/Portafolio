import React from "react";
import styled, { keyframes } from "styled-components";
import { color } from "../color";

const Contain = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  transform:scaleY(110%);
  filter: blur(2px) contrast(3);
  background-color: ${color.blueDark};
`;

const ContainGlob = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ContainFond = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0px;
  background-color: #777;
`;

const animate = keyframes`
  0%{
    transform:translate(0px, 0px);
    filter: opacity(100%);
  }
  80%{
    filter: opacity(90%);
  }
  100%{
    filter: opacity(0%);
    transform:translate(-50px, -60px)
  }
`;

export default function Globs() {
  return (
    <Contain>
      <ContainGlob>
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
      </ContainGlob>
      <ContainFond />
    </Contain>
  );
}

const Spancontain = styled.span`
  position: absolute;
  bottom: 50px;
  width: 50px;
  height: 50px;
  background-color: #777;
  border-radius: 50%;
  animation: 2s ${animate} linear infinite;
`;

function Span() {

  const ver = Math.round(Math.random()*10);

  const spanstyle = {
    left: `${Math.round(Math.random() * 100)}%`,
    animationDelay: `${Math.round(Math.random() * 10) / 2}s`,
    backgroundColor:`${ver >= 5 ? color.blue:"#777"}`
  };

  return <Spancontain style={spanstyle} />;
}
