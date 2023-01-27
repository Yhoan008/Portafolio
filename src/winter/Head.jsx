import styled from "styled-components";

const Ul = styled.ul`
  position: absolute;
  padding-top: 10px;
  list-style: none;
  display: flex;
  width: 100%;
  align-self: flex-start;
  justify-content: space-around;
`;

const Li = styled.li`
  font-size: 1.2em;
  color: white;
  cursor: pointer;
  padding: 5px;
  &:hover {
    box-shadow: inset 0 -10px 5px -5px white;
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
