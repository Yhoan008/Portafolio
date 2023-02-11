import React, { Component,useEffect,useState } from "react";
import Clouds from "./Clouds";
import styled from "styled-components";
import { color } from "./../color";
import { BiBeenHere } from "react-icons/bi";
import titlecloud from './../assets/titlecloud.png';

const Contain = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
  padding: 0;
  background-color: ${color.blue};
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
  overflow: visible;

`;

export default function Skills({ idiom }) {

  const [titletop, setTitletop] = useState("-228");

  const styleTitle = {
    position: "relative",
    top:`${titletop}px`,
    width: "100%",
    height: "150px",
    textAlign: "center",
    marginTop: "200px",
    zIndex: "150",
    color: "black",
    display: "flex",
    justifyContent: "center",
    transition:"1s",
    fontFamily:"Lilita One,cursive"
  };

  //700 = -220
  //929 = 0

  // 229 = 220

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if(window.scrollY < 700){
        setTitletop("-228");
      }else if (window.scrollY > 700 && window.scrollY < 928) {
        setTitletop(`${window.scrollY-928}`);
      } else if (window.scrollY > 928) {
        setTitletop("0");
      }
    });
  })

  return (
    <Contain id="skills">
      <Clouds></Clouds>
      <h2 style={styleTitle}>
        <P><p style={{fontSize:"100%"}}>{idiom.skillsTitle}</p></P>
      </h2>
      {idiom.skills.map((skill, index) => (
        <Bar skill={skill.skill} percent={skill.percent} key={index} />
      ))}
    </Contain>
  );
}

const Skill = styled.h2`
  margin-bottom: 40px;
  font-size: 1.3em;
`;

const BarProgres = styled.div`
  position: relative;
  display: block;
  width: 200px;
  height: 4px;
  background-color: white;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #c06011;
`;

const Icon = styled.div`
  position: relative;
  top: -35px;
  display: flex;
  flex-direction: column;
  width: 16px;
`;

function Bar({ skill, percent }) {
  const styleProgress = {
    width: `${percent}%`,
  };

  const iconStyle = {
    left: `${percent - 4}%`,
  };

  return (
    <div
      style={{
        margin: "40px 50px",
      }}
    >
      <Skill>{skill}</Skill>
      <BarProgres>
        <Progress style={styleProgress} />
        <Icon style={iconStyle}>
          <p
            style={{
              margin: "0",
              fontSize: ".7em",
              width: "16px",
              display: "inline",
            }}
          >
            {percent}%
          </p>
          <BiBeenHere />
        </Icon>
      </BarProgres>
    </div>
  );
}
