import Imagen from "./assets/cristaAnimal2.png";
import styled, { createGlobalStyle } from "styled-components";
import { Image } from "./Image";
import Space from "./Space";

const GlobalStyle = createGlobalStyle`
        body{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            height: 100vh;
            background-color: black;
            overflow-y: visible;
            overflow-x: hidden;
        }
    `;
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Space/>
       <Image name={ Imagen }/>
    </>
  );
}
