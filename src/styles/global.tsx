import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${({ theme }) => theme.colors.primary};

    margin: 0px;
    padding: 0px;
  }

  button {
    cursor: pointer;
    border: 0px;
  }

   
`;

export default GlobalStyle;
