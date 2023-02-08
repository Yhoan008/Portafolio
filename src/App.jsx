import styled, { createGlobalStyle } from "styled-components";
import Back from "./winter/Back";
import About from "./winter/About";
import Skills from "./winter/Skills";
import { idiom } from "./idiom";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 300vh;
    background-color: black;
    overflow-y: visible;
    overflow-x: hidden;
    font-family: 'Lilita One', cursive; // titulos
    font-family: 'Fira Sans Condensed', sans-serif; // Parrafos
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Back idiom={idiom.en} />
      <About idiom={idiom.en} />
      <Skills idiom={idiom.en} />
    </>
  );
}

// Pendientes:

// Agregar aprendizajes futuros
// Expand cards en area de proyectos
// Progress step con el scroll de la pagina
// incluir audios interactivos

// Proyectos :
//  Morf Effect con rick y morty
// wave form
// reloj analogico
