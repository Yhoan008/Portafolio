import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  background-color: black;
`;

export default function Space() {
  return (
    <Container>
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
      <Point />
    </Container>
  );
}

const PointStyle = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #f420bf;
  border-radius: 50%;
`;

let invertX =false;
let invertY=false;

function Point() {
  const [countX, setCountX] = useState(Math.round(Math.random()*window.innerWidth));
  const [countY, setCountY] = useState(Math.round(Math.random()*450));
  const [invertX, setInvertX] = useState(false);
  const [invertY, setInvertY] = useState(false);
  
  useEffect(() => {

    const intervalId = setInterval(() => {
      if (!invertX && !invertY) {
        setCountX((count) => count + 1);
        setCountY((count) => count + 1);
      } else if (!invertX && invertY) {
        setCountX((count) => count + 1);
        setCountY((count) => count - 1);
      } else if (invertX && !invertY) {
        setCountX((count) => count - 1);
        setCountY((count) => count + 1);
      } else if (invertX && invertY) {
        setCountX((count) => count - 1);
        setCountY((count) => count - 1);
      }

    });

    
    return () => {
      clearInterval(intervalId);
    };
    
  }, []);
  
  // if (countX >= window.innerWidth) setInvertX(true);
  // if (countX <= 0) setInvertX(false);
  // if (countY >= 450) setInvertY(true);
  // if (countY <= 0)  setInvertY(false);

  
  const styles = {
    transform: `translate(${countX}px,${countY}px)`,
  };

  return <PointStyle style={styles} />;
}



// Se debe adaptar para que se peudan utilizar mas componentes Point 
