import React, { Component, createRef } from "react";
import styled from "styled-components";
import nubeTop from "./../assets/nubeTop.png";
import nubeBottom from "./../assets/nubeBottom.png";
import nubeMidle from "./../assets/nubeMidle.png";

const Contain = styled.div`
  position: relative;
  padding: 0;
  width: 100%;
`;

const Cloud = styled.div`
  width: 100%;
  position: absolute;
  transition: 1s;
`;

export default class Clouds extends Component {
  constructor(props) {
    super(props);
    this.myref = createRef();
    this.state = {
      midlecloud: "-30", // min -30 max 10 recorrido 40px
      bottomcloud: "0", // min 0 max 25 recorrido 25px
    };
  }

  // 400

  // x = .1
  // x = 1/16

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrollref = this.myref.current.getBoundingClientRect().y;

      if (scrollref > 400) {
        this.setState({
          midlecloud: "-30",
          bottomcloud: "0",
        });
      } else if (scrollref < 400 && scrollref > 0) {
        this.setState({
          midlecloud: `${-30 + (400 - scrollref) * 0.1}`,
          bottomcloud: `${-25 + (400 - scrollref) / 16}`,
        });
      } else if (scrollref < 0) {
        this.setState({
          midlecloud: "10",
          bottomcloud: "40",
        });
      }
    });
  }

  render() {
    const styleMidle = {
      transform: `translate(0,${this.state.midlecloud}%)`,
      zIndex: "100",
    };

    const stylebottom = {
      transform: `translate(0,${this.state.bottomcloud}%)`,
      zIndex: "10",
    };

    const Img = styled.img`
      width: 100%;
      position: relative;
    `;

    return (
      <Contain ref={this.myref}>
        <Cloud style={{ zIndex: "1000" }}>
          <img src={nubeTop} alt="ski" style={{ width: "100%" }} />
        </Cloud>
        <Cloud style={styleMidle}>
          <Img src={nubeMidle} alt="ski" />
        </Cloud>
        <Cloud style={stylebottom}>
          <img src={nubeBottom} alt="ski" style={{ width: "100%" }} />
        </Cloud>
      </Contain>
    );
  }
}
