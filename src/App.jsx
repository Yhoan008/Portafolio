import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Back from "./winter/Back";
import About from "./winter/About";
import Skills from "./winter/Skills";
import Proyects from "./winter/Proyects";
import { idioma } from "./idiom";

const GlobalStyle = createGlobalStyle`
  body{
    position:relative;
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
  html{
    scroll-behavior: smooth;
  }
`;

export default function App() {
  const [idiom, setIdiom] = useState(idioma.es);

  function changeidiom() {
    if (idiom == idioma.es) {
      setIdiom(idioma.en);
    } else if (idiom == idioma.en) {
      setIdiom(idioma.es);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Back idiom={idiom} changeidiom={changeidiom} />
      <About idiom={idiom} />
      <Skills idiom={idiom} />
    </>
  );
}

// Pendientes:

// Agregar aprendizajes futuros
// About poner foto animada
// hacer efecto de nubes en skills
// Expand cards en area de proyectos
// Progress step con el scroll de la pagina
// incluir audios interactivos

// Proyectos :
//  Morf Effect con rick y morty
// wave form
// reloj analogico
