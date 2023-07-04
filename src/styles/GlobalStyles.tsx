import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
  color: #fff;
  padding: 20px;

  @media (min-width: 1200px){
    padding: 20px 60px;
  }

  @media (min-width: 1400px){
    padding: 20px 90px;
  }
}

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

a, :visited {
  text-decoration: none;
  color: inherit;
}

`;

export default GlobalStyles;
