import styled from "styled-components";
import dragonIcon from "./../assets/dragonIcon.png";

const Contain = styled.div`
  position: fixed;
  margin: 0;
  width: 100%;
  height: 60px;
  align-self: flex-start;
  backdrop-filter: blur(2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  margin: 0 20px;
`;

const Img = styled.div`
  width: 35px;
  height: auto;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const ImgStyle = styled.img`
  width: 100%;
`;

const H2 = styled.h2`
  color: white;
`;

const Ul = styled.ul`
  position: relative;
  list-style: none;
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: end;
  padding-left: 0px;
  margin-right: 10px;
`;

const Li = styled.li`
  position: relative;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  &:hover {
    text-decoration-line: line-through;
  }
`;

export default function Head({ hover }) {
  const ulStyle = {
    zIndex: `${hover == true ? 1000 : -100}`,
  };

  return (
    <Contain style={ulStyle}>
      <Name>
        <Img>
          <ImgStyle src={dragonIcon} alt="Dragon colorfull" />
        </Img>
        <H2>Yhoan Moreno</H2>
      </Name>
      <Ul>
        <Li>Acerca de mi</Li>
        <Li>Habilidades</Li>
        <Li>Proyectos</Li>
        <Li>Contactame</Li>
      </Ul>
    </Contain>
  );
}
