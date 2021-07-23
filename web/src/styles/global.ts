import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #e2e4e1;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, label {
    font: 16px Roboto, sans-serif;
  }

  #root {
    position: relative;
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 8px 20px;
  }

  button {
    cursor: pointer;
  }

`;
