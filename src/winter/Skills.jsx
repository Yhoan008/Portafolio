import React, { Component } from "react";
import styled from "styled-components";
import { BiBeenHere } from "react-icons/bi";

const Contain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
  padding: 40px 50px 0 50px;
`;

export default function Skills({ idiom }) {
  return (
    <Contain id="skills" >
      <h2
        style={{
          width: "100%",
          height: "auto",
          textAlign: "center",
        }}
      >
        {idiom.skillsTitle}
      </h2>
      {idiom.skills.map((skill, index) => (
        <Bar skill={skill.skill} percent={skill.percent} key={index} />
      ))}
    </Contain>
  );
}

const ContainerSkill = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

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
