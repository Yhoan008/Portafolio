import { useState, useEffect } from "react";
import styled from "styled-components";

const Contain = styled.div`
  position: relative;
  max-width: 80%;
  margin-bottom: -4%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
  padding: 10px 20px;
  @media (max-width: 700px) {
    width: 280px;
    height: 40px;
    top: 50px;
  }
`;

export default function Title({ idiom }) {
  return (
    <Contain>
      <Text idiom={idiom} />
    </Contain>
  );
}

const H2 = styled.h2`
  position: relative;
  font-weight: 900;
  font-size: 2em;
  display: inline;
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
    return (
      <div>
        <H2>{array.slice(0, ind)}</H2>;
      </div>
    );
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
