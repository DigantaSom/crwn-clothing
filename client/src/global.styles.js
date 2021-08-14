import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 40px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  /* React router dom's Link component uses anchor tag behind the scenes */
  a {
    text-decoration: none;
    color: black;
  }
`;
