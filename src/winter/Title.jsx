import { useState, useEffect } from "react";
import styled from "styled-components";

const Contain = styled.div`
  position: relative;
  width: auto;
  height: auto;
  margin-bottom:-4%;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #aaa;
  filter: opacity(70%);
  border-radius:10px;
  outline:10px solid #aaa;
`;

export default function Title({ idiom }) {

  return (
    <Contain>
      <Back />
      <Text idiom={idiom} />
    </Contain>
  );
}

const H2 = styled.h2`
  position: relative;
  font-weight: 900;
  font-size: 2em;
  padding: 0;
  max-width: 300px;
  margin: 0;
  font-family: "Lilita One", cursive; // titulos
  text-align: center;
`;

let array1 = [];
let array2 = [];
let array3 = [];

let array = array1;
let invert = false;

let ind1 = true;
let ind2 = false;
let ind3 = false;

function Text({ idiom }) {
  const [ind, setInd] = useState(array1.length);

  array1 = Array.from(idiom.title.title1);
  array2 = Array.from(idiom.title.title2);
  array3 = Array.from(idiom.title.title3);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setInd((ind) => {
        if (ind <= 0) {
          invert = true;
        } else if (ind >= array.length) {
          setTimeout(() => {
            invert = false;
          }, 400);
        }
        if (invert == true) return ind + 1;
        if (invert == false) return ind - 1;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (ind != 0) {
    return <H2>{array.slice(0, ind)}</H2>;
  } else {
    if (ind1 == true) {
      array = array2;
      ind1 = false;
      ind2 = true;
    } else if (ind2 == true) {
      array = array3;
      ind2 = false;
      ind3 = true;
    } else if (ind3 == true) {
      array = array1;
      ind3 = false;
      ind1 = true;
    }
  }
}
