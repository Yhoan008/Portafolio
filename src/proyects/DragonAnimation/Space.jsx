import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolte;
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
  
  useEffect(() => {

    let invertX = false;
    let invertY = false;

    const intervalId = setInterval(() => {
      setCountX(count => {
        if(count >= window.innerWidth) invertX=true;
        if(count <= 0) invertX=false; 

        if(invertX == false) return count+1;
        if(invertX ==true) return count-1;
      });
      setCountY(count => {
        if(count >= 450) invertY=true;
        if(count <= 0) invertY=false; 

        if(invertY == false) return count+1;
        if(invertY ==true) return count-1;
      });

    });

    
    return () => {
      clearInterval(intervalId);
    };
    
  }, []);
  
  const styles = {
    transform: `translate(${countX}px,${countY}px)`
  };

  return <PointStyle style={styles} />;
}



