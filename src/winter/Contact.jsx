import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../color";

const Contain = styled.div`
  position: relative;
  width: 100%;
  background-color:${color.blueDark};
  padding: 10px 50px;
  box-sizing: border-box;
  color: white;
  font-size: 1.2em;
`;

const Boxes = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Link = styled.div`
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 20px;
  margin-bottom: 10px;
  &:hover{
    transform: scale(110%);
    background-color: ${color.blueLight};
  }
`;

const Img = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  margin-right: 10px;
`;

export default function Contact({ idiom }) {
  const [clip, setClip] = useState(false);

  return (
    <Contain id="contact">
      <h2 style={{ fontFamily: "'Lilita One', cursive" }}>
        {idiom.contactTitle}
      </h2>
      <Boxes>
        {idiom.contactNet.map((net) =>
          net.id != "mail" ? (
            <a
              href={net.link}
              target="_blanck"
              key={net.id}
              style={{ textDecoration: "none", display: "flex" }}
              title={net.link}
            >
              <Link>
                <Img>
                  <img src={net.icon} alt="icon" style={{ width: "150%" }} />
                </Img>

                {net.net}
              </Link>
            </a>
          ) : (
            <Link
              key={net.id}
              style={{ cursor: "pointer" }}
              title={net.title}
              onClick={() => {
                navigator.clipboard.writeText("hola mundo");
                setClip(true);
              }}
            >
              <Clipboard clip={clip} setClip={setClip} text={net.copied} />
              <Img>
                <img src={net.icon} alt="icon" style={{ width: "150%" }} />
              </Img>
              {net.link}
            </Link>
          )
        )}
      </Boxes>
    </Contain>
  );
}

const ContentClip = styled.div`
  position: fixed;
  bottom: 20px;
  left: 40%;
  font-size: 1.3em;
  margin: auto;
  padding: 5px;
  background-color: white;
  color: black;
  border: 2px dotted black;
`;

function Clipboard({ clip, setClip, text }) {
  const style = {
    display: `${clip == false ? "none" : "block"}`,
  };

  if (clip == true) {
    setTimeout(() => {
      setClip(false);
    }, 5000);
  }

  return <ContentClip style={style}>{text}</ContentClip>;
}
