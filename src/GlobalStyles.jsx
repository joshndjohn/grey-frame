// globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  list-style-type: none;
  text-decoration: none;
}

:root {
  --primaryColor: #fff;
  --secondaryColor: #FD005B;
  --myBlack: #191C26;
}

body,
html {
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: var(--myBlack);
  color: var(--primaryColor);
}

  a {
    text-decoration: none;
    color: inherit;
  }
`;
