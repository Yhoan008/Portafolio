import { useState, useEffect } from "react";
import styled from "styled-components";

const Contain = styled.div`
  position: relative;
  width: 600px;
  height: 40px;
  text-align: center;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #aaa;
  filter: opacity(70%);
`;

export default function Title() {
  const containStyle = {
    top: `${170}px`,
  };

  return (
    <Contain style={containStyle}>
      <Back />
      <Text />
    </Contain>
  );
}

const H2 = styled.h2`
  position: absolute;
  width: 100%;
  font-weight: 900;
  font-size: 2em;
  padding: 0;
  margin: 0;
`;

const text1 = "Yhoan Moreno";
const text2 = "Desarrollador Front End";
const text3 = "Diseñador Web";
const array = Array.from(text1);

function Text() {
  const [ind, setInd] = useState(array.length);
  let invert = false;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setInd((ind) => {
        if (ind <= 0) {
          invert = true;
        } else if (ind >= array.length) {
          setTimeout(()=>{invert=false},200);
        }
        if (invert == true) return ind + 1;
        if (invert == false) return ind - 1;
      });
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <H2>{array.slice(0, ind)}</H2>;
}
