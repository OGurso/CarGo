import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
  background-color: ${(props) => props.theme.bgPrimary};
  color: ${(props) => props.theme.color};
}
a{
  color: ${(props) => props.theme.color};
  text-decoration: none;
}

h1, h2, h3{
  font-family: "Comfortaa";
  text-align: center;
  color:${(props) => props.theme.color};
}
h1, h2{
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
h3{
    color:${(props) => props.theme.tone};
}

h1,p{
  padding: 0 20px;
}
main{
  display:flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
`;
