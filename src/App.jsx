import styled, { createGlobalStyle } from "styled-components";
import Back from "./winter/Back";
import About from "./winter/About";
import Skills from "./winter/Skills";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 300vh;
    background-color: black;
    overflow-y: visible;
    overflow-x: hidden;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Back />
      <About />
      <Skills />
    </>
  );
}


// Pendientes: 

// Agregar aprendizajes futuros
// 
// Elegir paleta de colores y tipografias 

