import { useState } from "react";
import styled, { keyframes } from "styled-components";
import dragonIcon from "./../assets/dragonIcon.png";

const Contain = styled.nav`
  position: fixed;
  margin: 0;
  width: 100%;
  height: 60px;
  align-self: flex-start;
  backdrop-filter: blur(2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
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

const Ul = styled.ul`
  position: relative;
  list-style: none;
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: end;
  padding-left: 0px;
  margin-right: 10px;
  font-family: "Lilita One", cursive; // titulos
`;

const Li = styled.li`
  position: relative;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  &:hover {
    text-decoration-line: line-through;
  }
`;

export default function Head({ hover, idiom, changeidiom }) {
  const ulStyle = {
    zIndex: `${hover == true ? 1000 : -100}`,
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
      <Ul>
        {idiom.navList.map((text, index) => (
          <Li key={index}>
            <a
              href={`#${text.id}`}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {text.text}
            </a>
          </Li>
        ))}
      </Ul>
      <Idiom idiom={idiom} changeidiom={changeidiom} />
    </Contain>
  );
}

const IdiomButton = styled.button`
  position: absolute;
  right: 10px;
  top: 70px;
  padding: 0;
  border-radius: 20px;
  display: flex;
  background-color: #d19c8a;
  cursor: pointer;
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
  /* margin-left: 0%; */
`;

function Idiom({ changeidiom }) {
  const [margin, setMargin] = useState(false);

  const stylebar = {
    marginLeft: `${margin == false ? 0 : 50}%`,
  };
  return (
    <IdiomButton
      onClick={() => {
        changeidiom();
        setMargin((margin) => !margin);
      }}
    >
      <IdiomBar style={stylebar}></IdiomBar>
      <IdiomText>es</IdiomText>
      <IdiomText>en</IdiomText>
    </IdiomButton>
  );
}
