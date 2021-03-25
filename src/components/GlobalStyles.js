import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-green: rgb(56,239,125);
    --color-green-disabled: rgb(166,249,197);
    --color-dark-green: rgb(48,200,105);
    --color-bluegreen: rgb(17,153,142);
    --color-dark-bluegreen: rgb(16,120,111);
    --color-dark-bluegrey: rgb(9,73,67);
    --color-light-bluegrey: rgba(9,73,67,0.2);
    --color-gradient-green: linear-gradient(to bottom right, 
      var(--color-bluegreen) 0%, var(--color-green) 100%);
    --color-webkit-gradient-green: -webkit-linear-gradient(top left, 
    var(--color-bluegreen) 0%, var(--color-green) 100%);
    --color-transparent-white: rgba(255,255,255,0.4);

    --box-shadow: 0 0 10px 1px var(--color-light-bluegrey);
    --border-bottom: 5px solid var(--color-green);
    --section-margin: 30px 0 30px 0;
  }
  
  * {
    box-sizing: border-box
  }

  body {
    margin: 0 auto;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 112.5%;
    font-weight: 100;
    line-height: 1.5;
    background: var(--color-green);
    background: var(--color-gradient-green);
    background: var(--color-webkit-gradient-green);
    background-attachment: fixed;
  }

  input, textarea {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    }

  input, textarea {
    padding: 4px;
  }
`
