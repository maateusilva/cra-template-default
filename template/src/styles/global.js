import { createGlobalStyle } from 'styled-components';

import colors from './variables/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    font-family: 'Roboto', 'Segoe UI', Verdana, Arial, sans-serif;
    background: ${colors.bgColor};
    color: ${colors.text.light.medium};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font: 14px 'Roboto', 'Segoe UI', Verdana, Arial, sans-serif;
  }

  *:focus {
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
