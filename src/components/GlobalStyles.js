import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-green: rgb(56,239,125);
    --color-dark-green: rgb(48,200,105);
    --color-bluegreen: rgb(17,153,142);
    --color-dark-bluegreen: rgb(16,120,111);
    --color-dark-bluegrey: rgb(9,73,67);
    --color-gradient-green: linear-gradient(to bottom right, 
      var(--color-bluegreen) 0%, var(--color-green) 100%);
    --color-webkit-gradient-green: -webkit-linear-gradient(top left, 
    var(--color-bluegreen) 0%, var(--color-green) 100%);
    --color-transparent-white: rgba(255,255,255,0.35);

    --box-shadow: 0 0 8px 1px var(--color-darkgreen);
    --border-bottom: 5px solid var(--color-green);


    /* Color-Setup-Green:
    --color-yellow-green: rgb(219,242,93);
    --color-limegreen: rgb(119,172,40);
    --color-green: rgba(164,199,67);
    --color-darkgreen: rgb(79,115,27);
    --color-gradient-green: linear-gradient(0deg, var(--color-limegreen) 0%, var(--color-green) 100%); 
    --color-tansparent-yellow-green: rgb(219,242,93,0.5);
    --color-lightgrey: rgb(226,228,231);  */
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
    background: var(--color-bluegreen);
    background: var(--color-gradient-green);
    background: var(--color-webkit-gradient-green);
    /* background: var(--color-gradient-green); */
    
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
