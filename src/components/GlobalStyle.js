import { createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: IBM Plex Serif;
    font-size: 30px;
    transition: all 0.50s linear;
  }
  `