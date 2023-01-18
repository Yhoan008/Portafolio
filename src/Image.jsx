import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    0%{
        top:0;
        left:0;
    }
    20%{
        top: 20px;
        left: 0 ;
    }
    40%{
        top: 0px;
        left: 20px;
    }
    60%{
        top:20;
        left:20px;
    }
    80%{
        top:-20px;
        left:-20px;
    }
    100%{
        top : 0;
        left: 0;
    }
`;

const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  animation-name: ${Animation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
const Images = styled.img`
  width: 100%;
`;

export function Image(props) {
  return (
    <Container>
      <Images src={props.name} alt="Imagen de animal en el espacio" />
    </Container>
  );
}

// import Imagen from './assets/cristaAnimal2.jfif'
// <Image name={ Imagen }/>
