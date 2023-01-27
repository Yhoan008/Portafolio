import React, { Component } from "react";
import styled from "styled-components";

const Contain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
  padding: 50px;
`;

export default function Skills() {
  return (
    <Contain>
      <Bar skill="HTML" percent={95} />
      <Bar skill="CSS" percent={85} />
      <Bar skill="Javascript" percent={85} />
      <Bar skill="React" percent={65} />
      <Bar skill='Git' percent={80} />
      <Bar skill="Gimp" percent={70} />
    </Contain>
  );
}

const Skill = styled.h2`
  font-size: 1.3em;
  display: inline;
`;

const BarProgres = styled.div`
  display: inline-block;
  margin-left: 10px;
  width: 200px;
  height: 2px;
  background-color: white;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #c06011;
`;

function Bar({ skill, percent }) {
  const styleProgress = {
    width: `${percent}%`,
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
      </BarProgres>
    </div>
  );
}
