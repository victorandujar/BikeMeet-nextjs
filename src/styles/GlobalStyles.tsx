import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  color: #ffffff;
  padding: 20px;
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
