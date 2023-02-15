import React, { useState } from "react";
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
  margin-right: 10px;
  margin-left: 10px;
  padding: 0;
  font-family: "Lilita One", cursive;
  text-align: center;
  transition: 0.5s;
  @media (max-width: 1000px) {
    overflow: hidden;
    background-color: ${color.blueDark};
    filter: opacity(0.8);
    flex-direction: column;
    rigth: 0px;
    top: -5px;
    border-radius: 20px;
  }
`;

const Li = styled.li`
  position: relative;
  width: 100%;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
  padding: 20px 10px;
  border-radius: 20px;
  &:hover {
    text-decoration-line: line-through;
  }
  @media (max-width: 1000px) {
    padding:40px 0;
    &:hover {
      background-color: ${color.red};
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
  right: 3px;
  top: 3px;
  background-color: ${color.red};
  z-index: 1600;
  cursor: pointer;
  @media (max-width: 1000px) {
    display: block;
  }
`;

function Minnav({ idiom, changeidiom }) {
  const [active, setActive] = useState(false);

  const nonestyle = {
    display: "none",
  };

  const ulstyle = {
    width: `${active == true ? "80%" : "0px"}`,
    height: `${active == true ? "500px" : "0px"}`,
    overflow: `${active == true ? "hidden" : "visible"}`,
  };

  return (
    <Ul style={window.innerWidth > 1000 ? {} : ulstyle}>
      <Button>
        <img
          src={icon}
          alt="options"
          style={{
            width: "70%",
            position: "relative",
            top: "5px",
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
  right: 10px;
  padding: 0;
  top: 60px;
  border-radius: 20px;
  background-color: #d19c8a;
  cursor: pointer;
  outline: 2px solid red;
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
    display: `${active == false ? "none" : "flex"}`,
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
