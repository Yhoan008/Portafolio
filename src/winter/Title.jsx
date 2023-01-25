import styled from "styled-components";

const Div = styled.div`
  position: relative;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  align-self: center;
  font-weight: 900;
  font-size: 3em;
  margin-left: 100px;
  width:300px;
  justify-self: flex-start;
`;

export default function Title() {
  return <Div>Hola, mi nombre es Yhoan y soy desarrollador Front End</Div>;
}
