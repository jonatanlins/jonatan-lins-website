import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-size: 16px;
    font-family: DINNextW05-Medium, arial, georgia, sans-serif;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.contrast};
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
