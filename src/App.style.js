const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
body{
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
a{
  color: white;
  text-decoration: none;
}
`;
