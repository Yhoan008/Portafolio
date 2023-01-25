import styled from "styled-components";

const Ul = styled.ul`
  position: absolute;
  padding-top: 10px;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Li = styled.li`
  font-size: 1.2em;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  cursor: pointer;
  padding: 5px;
  &:hover {
    box-shadow: inset 0 -10px 5px -5px white;
    border-bottom: 2px solid white;
  }
`;

export default function Head() {
  return (
    <Ul>
      <Li>Acerca de mi</Li>
      <Li>Habilidades</Li>
      <Li>Proyectos</Li>
      <Li>Contactame</Li>
    </Ul>
  );
}
