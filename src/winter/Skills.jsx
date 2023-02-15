import React, { useEffect, useState } from "react";
import Clouds from "./Clouds";
import styled, { keyframes } from "styled-components";
import { color } from "./../color";
import titlecloud from "./../assets/titlecloud.png";

const Contain = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  color: white;
  padding: 0;
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

const P = styled.div`
  display: block;
  width: 20%;
  padding: 3% 0;
  box-sizing: border-box;
  border-radius: 20px;
  background-image: url(${titlecloud});
  background-repeat: no-repeat;
  background-size: 100%;
  animation-name: ${animatecloud};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

const Skillcontainer = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default function Skills({ idiom }) {
  const [titletop, setTitletop] = useState("0");

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
    <Contain id="skills">
      <Clouds></Clouds>
      <h2 style={styleTitle}>
        <P>
          <p style={{ fontSize: "100%" }}>{idiom.skillsTitle}</p>
        </P>
      </h2>
      <Skillcontainer>
        {idiom.skills.map((skill, index) => (
          <Bar skill={skill.skill} key={index} />
        ))}
      </Skillcontainer>
    </Contain>
  );
}

const Skill = styled.h2`
  margin-bottom: 40px;
  font-size: 1.3em;
`;


function Bar({ skill }) {
  return (
    <div
      style={{
        position: "relative",
        border: "2px solid red",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Skill>{skill}</Skill>
    </div>
  );
}
