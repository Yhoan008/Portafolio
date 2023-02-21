import React, { useEffect, useRef, useState } from "react";
import Clouds from "./Clouds";
import styled, { keyframes } from "styled-components";
import { color } from "./../color";
import titlecloud from "./../assets/titlecloud.png";

const Contain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: ${color.blueDark};
`;

const animatecloud = keyframes`
  0%{
    transform: translate(0,0);
  }
  20%{
    transform: translate(30px,0px);

  }
  50%{
    transform: translate(0px,-30px);
  }
  80%{
    transform: translate(-30px,-30px);
  }
  100%{
    transform: translate(0,0);
  }
`;

const Skillcontainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: -45%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width:700px){
  margin-top: -25%;
  }
`;

export default function Skills({ idiom }) {
  const [titletop, setTitletop] = useState("0");
  const scrolldiv = useRef(null);

  const styleTitle = {
    position: "absolute",
    top: `${titletop}%`,
    width: "100%",
    height: "150px",
    textAlign: "center",
    zIndex: "150",
    color: "black",
    display: "flex",
    justifyContent: "center",
    transition: "1s",
    fontFamily: "Lilita One,cursive",
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 730) {
        setTitletop("0");
      } else if (window.scrollY > 730 && window.scrollY < 810) {
        setTitletop(`${(window.scrollY - 730) * (3 / 16)}`);
      } else if (window.scrollY > 810) {
        setTitletop(`15`);
      }
    });
  });

  // 15x = 80

  return (
    <Contain id="skills" ref={scrolldiv}>
      <Clouds></Clouds>
      <div style={styleTitle}>
        <CloudMove title={idiom.skillsTitle} />
      </div>
      <Skillcontainer>
        {idiom.skills.map((skill, index) => (
          <Bar skill={skill} key={index} />
        ))}
      </Skillcontainer>
    </Contain>
  );
}

const P = styled.div`
  display: block;
  padding: 10px 20px;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  background-image: url(${titlecloud});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation-name: ${animatecloud};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

export function CloudMove(props) {
  return (
    <P>
      <p
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: "Lilita One,cursive",
          fontSize: "1.5em",
        }}
      >
        {props.title}
      </p>
    </P>
  );
}

const borderanimate = keyframes`
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

const Skillcontain = styled.div`
  position: relative;
  background-color: ${color.blueLight};
  border-radius: 20px;
  margin: 20px 40px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px) {
    &:hover {
      transform: scale(110%);
    }
    &:hover span {
      background: linear-gradient(to left, ${color.orange}, ${color.blue});
      animation: 2s ${borderanimate} infinite;
    }
  }
`;

const Back = styled.span`
  position: absolute;
  z-index: 10;
  width: 120%;
  height: 80%;
  @media (max-width: 1000px) {
    background: linear-gradient(to left, ${color.orange}, ${color.blue});
    animation: 2s ${borderanimate} infinite;
  }
`;

const Skill = styled.h2`
  margin-bottom: 40px;
  font-size: 2em;
  padding: 0 30px;
`;

const Img = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 50%;
`;

function Bar({ skill }) {
  return (
    <Skillcontain>
      <Back />
      <div
        style={{
          position: "relative",
          zIndex: "100",
          margin: "4px",
          backgroundColor: `${color.blueLight}`,
          display: "flex",
          padding: "10px 20px",
          borderRadius: "20px",
        }}
      >
        <Img>
          <img src={skill.dir} alt="logo" style={{ height: "100%" }} />
        </Img>
        <Skill>{skill.skill}</Skill>
      </div>
    </Skillcontain>
  );
}
