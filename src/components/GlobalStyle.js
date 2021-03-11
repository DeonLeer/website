import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Roboto;
    font-size: 18px;
    transition: all 0.50s linear;
  }
  `
