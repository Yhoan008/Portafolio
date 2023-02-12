import React, { Component, useState } from "react";
import styled, { keyframes } from "styled-components";
import nubeTop from "./../assets/nubeTop.png";
import nubeBottom from "./../assets/nubeBottom.png";
import nubeMidle from "./../assets/nubeMidle.png";

const Contain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  border:2px solid red;
  @media (min-width:800px) {
    
  }
`;

const Cloud = styled.div`
  width: 100%;
  position: relative;
  transition: 1s;
  border:2px solid blue;
`;

const incremento = 5.66666;

export default class Clouds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      midlecloud: "-140",
      bottomcloud: "-220",
    };
  }



  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 750) {
        // 700
        this.setState({
          midlecloud: `-140`,
          bottomcloud: `-220`,
        });
      } else if (window.scrollY > 750 && window.scrollY < 1300) {
        this.setState({
          midlecloud: `${window.scrollY - 840}`,
          bottomcloud: `${(window.scrollY - 898) * incremento}`,
        });
      } else if (window.scrollY > 1300) {
        this.setState({
          midlecloud: "28",
          bottomcloud: "170",
        });
      }
    });
  }

  // 550

  render() {

    console.log(window.scrollY)

    const styleMidle = {
      transform:`translate(0,${this.state.midlecloud}%)`,
      zIndex: "100",
      top:"0px"
    };

    // midlecloud min -140% max -80%
    const stylebottom = {
      transform:`translate(0,${this.state.bottomcloud}%)`,
      zIndex: "10",
      filter: "opacity(1)",
    };

    // bottom cloud min -220% max -150

    const Img = styled.img`
      width: 100%;
      position: relative;
    `;

    return (
      <Contain>
        <Cloud style={{ zIndex: "1000" }}>
          <img src={nubeTop} alt="ski" style={{ width: "100%" }} />
        </Cloud>
        <Cloud
          src={nubeMidle}
          alt="ski"
          style={styleMidle}
          // Max top : 25
        >
          <Img src={nubeMidle} alt="ski" />
        </Cloud>
        <Cloud
          src={nubeBottom}
          alt="ski"
          style={stylebottom}
          // Max top 170px
        >
          <img src={nubeBottom} alt="ski" style={{ width: "100%" }} />
        </Cloud>
      </Contain>
    );
  }
}
