import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-limegreen: rgb(119,172,40);
    --color-green: rgba(164,199,67);
    --color-darkgreen: rgba(79,115,27);
    --color-gradient-green: linear-gradient(0deg, var(--color-limegreen) 0%, var(--color-green) 100%);
    --color-transparent-white: rgba(255,255,255,0.5);
    --color-lightgrey: rgb(226,228,231);
    --color-darkgrey: rgb(96,108,119)
  }
  
  * {
    box-sizing: border-box
  }

  body {
    margin: 0 auto;
    height: 100vh;
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
      border-color: 1px var(--color-darkgreen);
      box-shadow: 0 0 5px 1px var(--color-darkgreen);
    }
  }

  input, textarea {
    padding: 4px;
  }
`
