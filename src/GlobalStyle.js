import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-limegreen: rgb(119,172,40);
    --color-green: rgba(164,199,67);
    --color-darkgreen: rgba(79,115,27);
    --color-gradient-green: linear-gradient(0deg, var(--color-limegreen) 0%, var(--color-green) 100%);
    --color-lightgrey: rgb(226,228,231);
    --color-darkgrey: rgb(96,108,119)
  }
  
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
    background: var(--color-gradient-green);
  }

  input, button, textarea {
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    &:focus {
      outline: none;
      border-color: 2px var(--color-darkgreen);
      box-shadow: 0 0 8px 2px var(--color-darkgreen);
    }
  }

  input, textarea {
    padding: 4px;
  }
  button {
    border-radius: 4px;
    background: #ddd;
    border: none;
  }
`
