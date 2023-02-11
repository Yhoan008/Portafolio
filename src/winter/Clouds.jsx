import React, { Component, useState } from "react";
import styled from "styled-components";
import nubeTop from "./../assets/nubeTop.png";
import nubeBottom from "./../assets/nubeBottom.png";
import nubeMidle from "./../assets/nubeMidle.png";

const Contain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
`;

const Cloud = styled.div`
  width: 100%;
  position: absolute;
  transition: 1s;
`;

const incremento = 5.66666;

export default class Clouds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      midlecloud: "-150",
      bottomcloud: "-150",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if(window.scrollY < 700){
        this.setState({
          midlecloud: `-150`,
          bottomcloud: `-150`,
        });
      }else if (window.scrollY > 700 && window.scrollY < 928) {
        this.setState({
          midlecloud: `${window.scrollY - 900}`,
          bottomcloud: `${(window.scrollY - 898) * incremento}`,
        });
      } else if (window.scrollY > 928) {
        this.setState({
          midlecloud: "28",
          bottomcloud: "170",
        });
      }
    });
  }

  // 30x = 170

  render() {
    const styleMidle = {
      top: `${this.state.midlecloud}px`,
      zIndex: "100",
    };

    const stylebottom = {
      top: `${this.state.bottomcloud}px`,
      zIndex: "10",
      filter: "opacity(1)",
    };

    return (
      <Contain>
        <Cloud style={{ zIndex: "1000" }}>
          <img src={nubeTop} alt="ski" style={{width:"100%"}} />
        </Cloud>
        <Cloud
          src={nubeMidle}
          alt="ski"
          style={styleMidle}
          // Max top : 25
        >
          <img src={nubeMidle} alt="ski" style={{width:"100%"}} />
        </Cloud>
        <Cloud
          src={nubeBottom}
          alt="ski"
          style={stylebottom}
          // Max top 140px o 170px
        >
          <img src={nubeBottom} alt="ski" style={{width:"100%"}} />
        </Cloud>
      </Contain>
    );
  }
}
