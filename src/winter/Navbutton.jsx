import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { color } from "./../color";
import icon from "./../assets/menu.png";

export default function Navbutton({ idiom, changeidiom }) {
  return <Minnav idiom={idiom} changeidiom={changeidiom} />;
}

const Ul = styled.ul`
  position: absolute;
  list-style: none;
  display: flex;
  align-items: center;
  right: 10px;
  padding: 0;
  font-family: "Lilita One", cursive;
  text-align: center;
  transition: 0.25s;
  @media (max-width: 1000px) {
    overflow: hidden;
    background-color: black;
    flex-direction: column;
    right: 0px;
    top: -15px;
  }
`;

const Li = styled.li`
  position: relative;
  width: 100%;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
  padding: 20px 10px;
  box-sizing: border-box;
  &:hover {
    text-decoration-line: line-through;
  }
  @media (max-width: 1000px) {
    &:hover {
      border-right: 10px solid ${color.red};
    }
  }
`;

const Button = styled.div`
  border: 2px solid white;
  display: none;
  border-radius: 10px;
  width: 45px;
  height: 45px;
  position: absolute;
  right: 13px;
  top: 13px;
  overflow: hidden;
  z-index: 1600;
  cursor: pointer;
  @media (max-width: 1000px) {
    display: block;
  }
`;

function Minnav({ idiom, changeidiom }) {
  const [active, setActive] = useState(false);
  const refbutton = useRef();

  const nonestyle = {
    display: "none",
  };

  const ulstyle = {
    width: `${active == true ? "80%" : "0px"}`,
    height: `${active == true ? "100vh" : "0px"}`,
    overflow: `${active == true ? "hidden" : "visible"}`,
    borderRadius: "0 0 0 100%",
    padding:"0"
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (!refbutton.current.contains(event.target)) {
        setActive(false);
      }
    });
  });

  return (
    <Ul style={window.innerWidth > 1000 ? {} : ulstyle} ref={refbutton}>
      <Button>
        <img
          src={icon}
          alt="options"
          style={{
            width: "100%",
            position: "relative",
          }}
          onClick={() => {
            setActive((prev) => !prev);
          }}
        />
      </Button>
      {idiom.navList.map((text, index) => (
        <Li
          key={index}
          style={active == false && window.innerWidth < 1000 ? nonestyle : {}}
        >
          <a
            href={`#${text.id}`}
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              padding:"20px",
            }}
            onClick={() => {
              setActive(false);
            }}
          >
            {text.text}
          </a>
        </Li>
      ))}
      <Idiom idiom={idiom} changeidiom={changeidiom} active={active} />
    </Ul>
  );
}

const IdiomButton = styled.button`
  position: absolute;
  right: 0px;
  padding: 0;
  top: 95px;
  border-radius: 20px;
  background-color: #d19c8a;
  cursor: pointer;
  margin: 15px;
  @media (max-width: 1000px) {
    position: relative;
    top: 0;
    margin-left: auto;
  }
`;

const IdiomText = styled.h3`
  margin: 4px 4px;
  padding: 0;
`;

const IdiomBar = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: #0c3070;
  border-radius: 50%;
  transition: 0.5s;
`;

function Idiom({ changeidiom, active }) {
  const [margin, setMargin] = useState(false);
  const style = {
    display: `${active == false && window.innerWidth < 1000 ? "none" : "flex"}`,
  };
  const stylebar = {
    marginLeft: `${margin == false ? 0 : 50}%`,
  };
  return (
    <IdiomButton
      onClick={() => {
        changeidiom();
        setMargin((margin) => !margin);
      }}
      style={style}
    >
      <IdiomBar style={stylebar}></IdiomBar>
      <IdiomText>es</IdiomText>
      <IdiomText>en</IdiomText>
    </IdiomButton>
  );
}
