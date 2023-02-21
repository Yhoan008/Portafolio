import React, { useState } from "react";
import Globs from "./Globs";
import styled from "styled-components";

const Contain = styled.div`
  position: relative;
  width: 100%;
  background-color:#666666;
  margin:0;
  padding: 0;
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
  margin-bottom: 40px;
  position:relative;
  &:hover{
    transform: scale(110%);
    background-color: #0f00ff;
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
      <Globs/>
      <h2 style={{ fontFamily: "'Lilita One', cursive", marginLeft:"50px", position:"relative", top:"-60px" }}>
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
                navigator.clipboard.writeText("yhoanmoreno8@gmail.com");
                setClip(true);
              }}
            >
              {/* <Clipboard clip={clip} setClip={setClip} text={net.copied} /> */}
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
  position: absolute;
  background-color: white;
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
